//Rendering layer control (React Router)
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Footer from './Footer';
import Header from './Header';
import Events from './Events';
import EventDetails from './EventDetails';

// const events = [0, 1, 2, 3];

const Submit = () => <div>Submit</div>;

class App extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Events} />
            <Route path="/submit" component={Submit} />
            <Route path={`/event/:id`} component={EventDetails} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
