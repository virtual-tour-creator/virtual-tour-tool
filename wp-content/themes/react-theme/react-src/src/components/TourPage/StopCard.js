import React from 'react';
// import MediaCard from './MediaCard'
import './SelectableCard.scss';
import AddIcon from '../../images/add-stop-icon.png';


class Card extends React.Component {
    render() {
      var isSelected = this.props.selected ? "selected" : "";
      var className = "card " + isSelected;
      return (
      <div className={className}>
        {this.props.children}
        <div className="middle"><img src={AddIcon} /></div>
      </div>)
    }
  }

//one single selectable stop card
class SelectableCard extends React.Component {

    render() {
      
      return (
        <Card selected={this.props.selected}>
          <div className="selectable" onClick={this.props.onClick}>
            {this.props.children}
          </div>
        </Card>
      );
    }
  }

class StopCard extends React.Component {

    render() {
      var {
        medium_url,
        thumbnailUrl,
        name,
        selected
      } = this.props;

      return (
        <SelectableCard onClick={this.props.onClick}
          selected={selected}>
          <div className="stop-card-selectable">
            <img alt='stop-card-thumbnail' src={medium_url} style={{'width':"100%"}} />
            <p className="stop-card-name">{name}</p>
          </div>
        </SelectableCard>
      );
    }
  }


export default StopCard;
