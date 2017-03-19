import React, { Component } from 'react';
import { Link } from 'react-router';


class Home extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumpbotron col-sm-12 text-center">
        <h1>Github Battle</h1>
        <p className="lead">Some fancy motto</p>
        <Link to="/playerOne">
          <button className="btn btn-block btn-success">Start</button> 
        </Link>
      </div>
    );
  }
}

export default Home;
