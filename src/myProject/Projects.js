import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";

class Projects extends Component {
  state = {
    technical: "all",
  };

  renderProject = () => {
    let listProject = [];
    if (this.state.technical === "all") {
      listProject = this.props.projects;
    } else
      listProject = this.props.projects.filter((project) =>
        project.tagName.includes(this.state.technical)
      );
    console.log("data", listProject);
    return listProject.map((project, index) => {
      return (
        <div key={index} className="col-12 col-md-6 col-lg-4 px-3">
          <div className="project__item">
            <div className="project__img">
              <img src={project.image} />
            </div>
            <footer className="project__footer">
              <div className="project__name">
                <h3>{project.name}</h3>
                <div className="project__tag">
                  {project.tagName.map((tag, index) => {
                    return <p key={index}>{tag}</p>;
                  })}
                </div>
              </div>
              <div className="project_source">
                <div className="project__code">
                  <a href={project.linkSource} target="_blank">
                    Source code
                  </a>
                </div>
                <div className="project__demo">
                  <a href={project.linkDemo} target="_blank">
                    View demo
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="project" id="project">
        <div className="container">
          <div className="project__title">
            <h1>Projects</h1>
            <div className="title__underline"></div>
          </div>
          <form id="project__form">
            <div id="select-box">
              <input
                type="checkbox"
                id="options-view-button"
                value={this.state.technical}
                onClick={(event) => {
                  console.log("Value", event.target.value);
                  this.setState({
                    technical: event.target.value,
                  });
                }}
              />
              <div id="select-button" className="brd">
                <div id="selected-value">
                  <span>Select technical</span>
                </div>
                <div id="chevrons">
                  <i className="fas fa-chevron-up" />
                  <i className="fas fa-chevron-down" />
                </div>
              </div>
              <div id="options">
                <div className="option">
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="all"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <input
                    className="s-c bottom"
                    type="radio"
                    name="platform"
                    value="all"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <i class="fa fa-code"></i>
                  <span className="label">All</span>
                  <span className="opt-val">All</span>
                </div>
                <div className="option">
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="HTML"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <input
                    className="s-c bottom"
                    type="radio"
                    name="platform"
                    value="HTML"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <i className="fab fa-html5" />
                  <span className="label">HTML, CSS</span>
                  <span className="opt-val">HTML, CSS</span>
                </div>
                <div className="option">
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="JS"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <input
                    className="s-c bottom"
                    type="radio"
                    name="platform"
                    value="JS"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <i className="fab fa-js" />
                  <span className="label">Javascript</span>
                  <span className="opt-val">Javascript</span>
                </div>
                <div className="option">
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="ReactJs"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <input
                    className="s-c bottom"
                    type="radio"
                    name="platform"
                    value="ReactJs"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <i class="fab fa-react"></i>
                  <span className="label">ReactJs</span>
                  <span className="opt-val">ReactJs</span>
                </div>
                <div className="option">
                  <input
                    className="s-c top"
                    type="radio"
                    name="platform"
                    value="NodeJs"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <input
                    className="s-c bottom"
                    type="radio"
                    name="platform"
                    value="NodeJs"
                    onClick={(event) => {
                      console.log("Value", event.target.value);
                      this.setState({
                        technical: event.target.value,
                      });
                    }}
                  />
                  <i class="fab fa-node-js"></i>
                  <span className="label">NodeJS</span>
                  <span className="opt-val">NodeJS</span>
                </div>
                <div id="option-bg" />
              </div>
            </div>
          </form>

          <div className="project__body row">{this.renderProject()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.ProjectReducer.projects,
  };
};

export default connect(mapStateToProps)(Projects);
