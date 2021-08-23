import React, {PureComponent } from "react";
import "./style.css";

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer__icon">
          <div className="icon facebook">
            <a
              href="https://www.facebook.com/profile.php?id=100013221368472"
              target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </div>
          <div className="icon instagram">
            <a href="https://www.instagram.com/quan58fe/" target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="icon github">
            <a href="https://github.com/Sasuke0508" target="_blank">
              <i className="fab fa-github" />
            </a>
          </div>
          <div className="icon youtube">
            <a
              href="https://www.youtube.com/channel/UCuV96v3xkGJXYRlUybBu6XA"
              target="_blank"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
        <p>
          ©2021. ALL RIGHTS RESERVED. | Design by <span>quan58fe</span>
        </p>
      </div>
    );
  }
}
