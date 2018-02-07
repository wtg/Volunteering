import React from 'react';
import { Link } from 'react-router-dom';
import officeImage from '../assets/images/office.jpg';

const Event = ({ children }) => {
  const eventInfo = children;
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={officeImage} alt={`${eventInfo.title} event`} />
          <span className="card-title">{eventInfo.title}</span>
        </div>
        <div className="card-content">
          <p>{eventInfo.description}</p>
        </div>
        <div className="card-action">
          <Link
            to={`/event/${eventInfo._id}`}
            onClick={() => this.onSelectEvent()}
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
