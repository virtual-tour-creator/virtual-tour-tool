import React from 'react';
import MediaCard from './MediaCard'
import './SelectableCard.scss';


class Card extends React.Component {
    render() {
      return (<div className="card">{this.props.children}</div>)
    }
  }

//one single selectable stop card
class SelectableCard extends React.Component {

    render() {
      var isSelected = this.props.selected ? "selected" : "";
      var className = "selectable " + isSelected;
      return (
        <Card>
          <div className={className} onClick={this.props.onClick}>
            {this.props.children}
            <div className="check"><span className="checkmark">✔</span></div>
          </div>
        </Card>
      );
    }
  }

class StopCard extends React.Component {

    render() {
      var {
        thumbnailUrl,
        name,
        selected
      } = this.props;
      return (
        <SelectableCard onClick={this.props.onClick}
          selected={selected}>
          <div className="stop">
            <img alt='stop-thumbnail' src={thumbnailUrl} style={{width:"10rem"}} />
            <p className="name">{name}</p>
          </div>
        </SelectableCard>
      );
    }
  }


export default StopCard;
