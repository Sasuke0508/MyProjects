import React, {PureComponent } from "react";
import "./style.css";

export default class Header extends PureComponent {
  render() {
    return (
      <div className="container-fluid mt-2 header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <h1 style ={{margin: '0'}}>
              <a className="navbar-brand" href="#">
                <strong style = {{fontWeight: '700'}}>My</strong>CV
              </a>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item scrollHover">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-hover="HOME">Home</span>
                  </a>
                </li>
                <li className="nav-item scrollHover">
                  <a className="nav-link" href="#">
                    <span data-hover="ABOUT">About</span>
                  </a>
                </li>
                <li className="nav-item scrollHover">
                  <a className="nav-link" href="#project">
                    <span data-hover="PROJECTS">Projects</span>
                  </a>
                </li>
                <li className="nav-item scrollHover">
                  <a className="nav-link" href="#footer">
                    <span data-hover="CONTACT">Contact</span>
                  </a>
                </li>
              </ul>
              <div className="wrapper ms-lg-auto">
                <div className="icon facebook">
                  <div className="tooltip">Facebook</div>
                  <a href="https://www.facebook.com/profile.php?id=100013221368472" target = "_blank">
                    <i className="fab fa-facebook-f" />
                  </a>
                </div>
                <div className="icon instagram">
                  <div className="tooltip">Instagram</div>
                  <a href = "https://www.instagram.com/quan58fe/" target = "_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="icon github">
                  <div className="tooltip">Github</div>
                  <a href = "https://github.com/Sasuke0508" target = "_blank">
                    <i className="fab fa-github" />
                  </a>
                </div>
                <div className="icon youtube">
                  <div className="tooltip">Youtube</div>
                  <a href = "https://www.youtube.com/channel/UCuV96v3xkGJXYRlUybBu6XA" target = "_blank">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}


