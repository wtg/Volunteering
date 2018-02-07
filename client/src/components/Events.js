import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './Event';

class Events extends Component {
  render() {
    const events = this.props.events ? this.props.events : [];
    return (
      <div className="row">
        {events.map(e => {
          return <Event key={e._id}>{e}</Event>;
        })}
      </div>
    );
  }
}

function mapStateToProps({ events }) {
  return { events };
}

export default connect(mapStateToProps)(Events);
