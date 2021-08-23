/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./style.css";

export default class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="title col-12 col-lg-6">
              <div>
                <h1>My Projects</h1>
                <p>
                  Projects are the most practical way to learn any language,
                  and Front-end is no exception. Solidify your knowledge of Front-end
                  by creating these cool projects.
                </p>
                <a href="#project" className="btn btn-white btn-animated">
                  Explore
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="bannerImg" src="./images/person.webp"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
