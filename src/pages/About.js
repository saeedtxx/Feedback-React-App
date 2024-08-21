import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="container">
        <div className="card">
          <h3>About This Project</h3>
          <br />
          <p>This is a simple react app to leave feedback</p>
          <br />
          <Link to="/">
            <button className="btn btn-primary ">back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
