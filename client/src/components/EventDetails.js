import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import officeImage from '../assets/images/office.jpg';

class EventDetails extends Component {
  componentDidMount() {
    this.props.selectEvent(this.match.params.id);
  }

  constructor(props) {
    super();
    this.match = props.match;
  }

  render() {
    const event = this.props.selected ? this.props.selected[0] : {};

    return (
      <div className="col s12 m12">
        <div className="card">
          <div className="card-image">
            <img src={officeImage} alt={`${event.title} event`} />
            <span className="card-title">{event.title}</span>
          </div>
          <div className="card-content">
            <p>{event.description}</p>
          </div>
          <div className="card-action">
            <a>More Info</a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ selected }) {
  return { selected };
}

export default connect(mapStateToProps, actions)(EventDetails);
