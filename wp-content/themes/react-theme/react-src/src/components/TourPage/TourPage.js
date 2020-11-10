import React from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';

import Navbar from '../Navbar/Navbar'
// import Jumbotron from '../Jumbotron/Jumbotron'

// import CollapseNavbar from './CollapseNavbar';
// import BrandingLogo from '../Navbar/BrandingLogo';
import AddStop from './AddStop'
import StopBoxList from './CurrentStops'
import MediaCard from './MediaCard';
import TourStatus from '../Playlist/TourStatus';
import CloseIcon from '@material-ui/icons/Close';

import CopyTour from '../Button/CopyTour';
import '../Button/CreateTour.styles.css'

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import dropdownIcon from '../../images/dropdown-icon.png';
import hamburgerIcon from '../../images/hamburger.png';
import hamburgerCloseIcon from '../../images/hamburger-close.png';

import arrayMove from 'array-move';

import './TourPage.styles.css'


class TourPage extends React.Component {
    constructor(props) {
        super(props);
        //initial state
        const { editMode, setEditMode } = props;
        this.state = {
            'id': props.match.params.tourId,
            'name': '',
            'visibility': 'public',
            'date': '',
            'stops': [],
            'authorId': 0,
            'authorName': "",
            'mode': editMode ? 'edit' : 'view',
            'showDeleteConfirmation': false
        };
        this.handleRemoveStop = this.handleRemoveStop.bind(this);
    }
    
    parseContent(content) {
        let info = {
            'stopIds': [],
            'tourDate': "",
            'visibility': ""
        };
        let res = content.match(/<li>\d+<\/li>/gm);
        let stops = res ? res.map(item => {
            let idStr = item.slice(4, -5)
            return parseInt(idStr);
        }) : [];
        info.stopIds = stops;
        res = content.match(/<h2>TourDate:.+<\/h2>/gm);
        let date = res ? res[0].slice(4, -5).split(":")[1] : "";
        info.tourDate = date;
        res = content.match(/<h2>Visibility:.+<\/h2>/gm);
        let status = res ? res[0].slice(4, -5).split(":")[1] : "public";
        info.visibility = status;
        return info;
    }

    componentDidMount() {
        let time =  new Date().getTime();
        fetch('/wp-json/wp/v2/tour/' + this.state.id)
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            const { id, title, content, author } = data;
            let parsedContent = this.parseContent(content.rendered);
            console.log(parsedContent);
            this.setState({
                'name': title.rendered,
                'authorId': author[0],
                'authorName': author[1],
                'date': parsedContent.tourDate,
                'visibility': parsedContent.visibility
            });
            // Get all stop details
            const allRequests = parsedContent.stopIds.map(tourId => 
                {   
                    return fetch('/wp-json/wp/v2/stop/' + tourId +'?timestamp=' + time)
                            .then(res => {
                                return res.ok && res.json ? res.json() : { id: -1 };
                            })
                            .then(data => { 
                                const { id, thumbnail_url, title, medium_url } = data;
                                if (id === -1) return {};
                                const stop = {
                                    "id": id,
                                    "thumbnailUrl": thumbnail_url,
                                    "name": title.rendered,
                                    "medium_url": medium_url
                                };
                                return stop;
                            });
                }            
            );
            // wait for all requests to finish
            return Promise.all(allRequests);
        })
        .then(allStops => {
            this.setState({
                'stops': allStops.filter(stop => stop.hasOwnProperty('id'))
            });
        });
    }
       
    async deleteTour() {
        const response = await fetch('/wp-json/wp/v2/tour/' + this.state.id, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'X-WP-Nonce': reactInit.nonce
            },
        });

        if(!response.ok) {
            console.log(response);
        }
        const tour = await response.json();
        this.props.history.push(`/`);
    }

    getContentString() {
        let str = "<ol>";

        const { stops, date, visibility } = this.state;
        stops.map(stop => {
            const { id } = stop;
            str += "<li>";
            str += id.toString();
            str += "</li>"
        });
        str += "</ol>"
        str += "<h2>TourDate:";
        str += date;
        str += "</h2>";
        str += "<h2>Visibility:";
        str += visibility;
        str += "</h2>";
        return str;
    }

    async updateTour(content) {
        const { name, stops, id} = this.state;
        const data = {
            "title": name,
            "content": content
        };
        const response = await fetch('/wp-json/wp/v2/tour/' + id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-WP-Nonce': reactInit.nonce
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            console.log(response);
        }
        const tour = await response.json();
        console.log(tour);
    }

    //////////Edit vs. View mode///////////

    //toggling editing mode
    handleEditing() {
        if(this.state.mode === 'edit') {
            const content = this.getContentString();
            this.updateTour(content).then(() => {
                // show notice after update is done?
                //toggle editing mode
            });
            this.setState({'mode': 'view'});
        } if(this.state.mode === 'view') {
            this.setState({'mode': 'edit'});
        }
        
    }


    renderTourInfo() {

        // styling the collasible tour title
        const Accordion = withStyles({
            root: {
              border: 'none',
              boxShadow: 'none',
              '&:not(:last-child)': {
                borderBottom: 0,
              },
              '&:before': {
                display: 'none',
              },
              '&$expanded': {
                margin: 'auto',
              },
            },
            expanded: {},
          })(MuiAccordion);
          
          const AccordionSummary = withStyles({
            root: {
              backgroundColor: 'transparent',
              borderBottom: "1px solid #666E77",
              minHeight: 56,
              cursor: "auto !important",
              padding: "0",
              '&$expanded': {
                minHeight: 56,
              },
            },
            content: {
              '&$expanded': {
                margin: '12px 0',
              },
            },
            expanded: {},
          })(MuiAccordionSummary);
          
          const AccordionDetails = withStyles((theme) => ({
            root: {
            },
          }))(MuiAccordionDetails);
        const { visibility, authorId, authorName, date } = this.state;
        const canEditVisibility = authorId === reactInit.userId;
        const canEdit = visibility === 'public' || authorId === reactInit.userId;
        const canDelete = authorId === reactInit.userId;
        if(this.state.mode === 'edit') {
            return(
                <Form id="tour-info-form">
                <Form.Group>
                    <Form.Label className="form-label">Tour Name</Form.Label>
                    <Form.Control className="info-form" type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group>
                    <Form.Label className="form-label">Tour Date</Form.Label>
                    <Form.Control className="info-form" type="date" value={this.state.date} onChange={e => this.setState({date: e.target.value})}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Tour Edit is</Form.Label>
                    <Form.Check type='radio' disabled={!canEditVisibility} id='default-radio' value='private' checked={this.state.visibility === 'private'} label='COMPLETE' name='tourTypeRadio' onChange={e => this.setState({visibility: e.target.value})}/>
                    <Form.Check type='radio' disabled={!canEditVisibility} label='INCOMPLETE' value='public' checked={this.state.visibility === 'public'} id='disabled-default-radio' name='tourTypeRadio' onChange={e => this.setState({visibility: e.target.value})}/>
                </Form.Group>
    
                </Form>
            )
            
        } if (this.state.mode === 'view') {
            return(
                <div className='tour-info-display'>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<img src={dropdownIcon}></img>}
                        >
                        <span id='tour-name'>{this.state.name.toUpperCase()}</span>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TourStatus visibility={visibility} date={date} username={authorName}/>
                            <div className="button-container">
                                    <Button variant="primary" id='copy-tour-button' className='tour-page-button'>
                                    <div className="copy-tour-icon-img" style={{'width':'18px', 'height':'20px', 'marginRight': '0'}}></div>  
                                    <CopyTour
                                        className='copy-tour-button' 
                                        id={this.state.id}
                                        name={this.state.name}
                                        date={date}
                                        visibility={visibility}
                                        entries={this.state.stops}  />
                                    </Button>
                            {
                                canEdit ? 
                                    <Button variant="primary" onClick={this.handleEditing.bind(this)} className='tour-page-button'>
                                    <div className="edit-tour-icon-img" style={{'width':'18px', 'height':'20px', 'marginRight': '0'}}></div>   EDIT THIS TOUR
                                    </Button> : ""
                            }    
                            {
                                canDelete ?
                                    <Button variant="primary" onClick={this.handleDelete.bind(this)} id='delete-stop-button'  className='tour-page-button'>
                                    <div className="delete-tour-icon-img" style={{'width':'18px', 'height':'20px','marginRight': '0'}}></div> DELETE TOUR
                                    </Button> : ""
                            } 
                            </div>
                            
                        </AccordionDetails>
                    </Accordion>

                </div> 
            )
        }
    }

    renderTourStops() {
        if(this.state.mode === 'edit') {
            return(
                <div>
                    <div className="top-button-container">
                        <AddStop onSelectStops={this.handleAddedStops} />
                        <Button variant="primary" onClick={this.handleEditing.bind(this)} id='update-stop-button' className='tour-page-button'>
                            <i className='fas fa-check'></i> DONE EDITING
                        </Button>
                    </div>
               
                    <div className='grid-list-container'>
                        <StopBoxList 
                            stops={this.state.stops} 
                            onRemoveStop={this.handleRemoveStop}
                            onSortEnd={this.onSortEnd}
                            onSwapLeft = {this.onSwapLeft}
                            onSwapRight = {this.onSwapRight}
                            axis='xy'
                            useWindowAsScrollContainer={true}/>
                    </div>
                </div>
                
                
            )
        } if(this.state.mode === 'view') {
            return(

                <div className='stops-container-view'>
                    {this.state.stops.map(singleStop => (
                        <MediaCard stop={singleStop} onClick={() => this.props.history.push(`/stop/${singleStop.id}`)}/>
                    ))}
                </div>
            )
        }
    }

    renderDeleteConfirmation() {

        return (
            <Modal show={this.state.showDeleteConfirmation} onHide={() => this.setState({showDeleteConfirmation:false})} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton={false}>
                  <Modal.Title>Are you sure?</Modal.Title>
                  <CloseIcon onClick={() => this.setState({showDeleteConfirmation:false})} className="overlay-close-icon" />
                </Modal.Header>
                <Modal.Body className="show-grid">
                <div className='container'>
                    <p>Your're about to delete <span>{this.state.name.toUpperCase()}</span> and you won't be able to revert this. Are you sure?</p>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="delete-tour" onClick={this.deleteTour.bind(this)}>
                            <div className="delete-tour-icon-img" style={{'width':'18px', 'height':'20px'}}></div> YES, DELETE
                        </Button>
                        <Button variant="primary" onClick={() => this.setState({showDeleteConfirmation:false})}>
                        NO, GO BACK
                        </Button>
                </Modal.Footer>
            </Modal>
        );
    }

    handleDelete() {
        // confirmation overlay
        this.setState({showDeleteConfirmation: true});
    }


    handleAddedStops = (selectedStops) => {
        let joined = this.state.stops.concat(selectedStops);
        this.setState({'stops':joined});
    }

    handleRemoveStop = (index) => {
        let stops = this.state.stops;
        // splice will operate directly on stops and return removed stops
        stops.splice(index, 1);
        this.setState({
            'stops': stops
        })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        const newArray = arrayMove(this.state.stops, oldIndex, newIndex);
        this.setState({
            'stops': newArray
        })
      }

    //on-click swapping
    onSwapLeft = (index) => {
        if(index > 0){
            const newArray = arrayMove(this.state.stops, index, index-1);
            this.setState({
                'stops': newArray
            })
        }
    }

    onSwapRight = (index) => {
        if(index < this.state.stops.length){
            const newArray = arrayMove(this.state.stops, index, index+1);
            this.setState({
                'stops': newArray
            })
        }
    }

    render() {
        return (
            <div>
                <Navbar isTourPage={true} />
                
                <div id='tour-page'>
                    <div className='tour-info'>
                        {this.renderTourInfo()}
                    </div>
                    <br></br>
                    {this.renderTourStops()}
                    {this.renderDeleteConfirmation()}
                </div>
                            
            </div>
        )
    }
    
}


export default withRouter(TourPage);