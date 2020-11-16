import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Router } from "react-router-dom";

const state = {

  name: ' '

}
export class Navigation extends Component {


  constructor(props) {
    super(props)
    this.getValue = (e) => {
      console.log(e)
      console.log(e.target.name)
      this.setState({
        name: e.target.name
      })
      props.changeName(e.target.name)
    }

  }


  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <Link to="/">

              <a className="navbar-brand page-scroll" href="#page-top">
                Wish Your Event
            </a>{" "}
            </Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              {/* <Router> */}
              <NavLink className="AdjLink" onClick={this.getValue} name="Dawali" to="/card" style={{ textDecoration: 'none', color: 'black', display: 'block' }}>

                {/* <a href="#portfolio" className="page-scroll"> */}
                  Dawali
                {/* </a> */}
              </NavLink>
              <NavLink className="AdjLink" to="/card" onClick={this.getValue} name="Dussehra" style={{ textDecoration: 'none', color: 'black',display: 'block' }}>

                {/* <a href="#portfolio" className="page-scroll"> */}
                  Dussehra
           {/* </a> */}
              </NavLink>
              {/* </Router> */}
              {/* <li>
                <a href="#about" className="page-scroll">
                  Dussehra
                </a>
              </li> */}
              {/* <li>
                <a href="#services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


const mapDispatchToProps = (Dispatch) => {
  return {
    changeName: (name) => {
      Dispatch({
        type: "CHANGE_NAME",
        payload: name
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(Navigation);
