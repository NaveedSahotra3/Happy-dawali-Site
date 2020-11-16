import React, { useEffect, useState } from "react";
import "./happy.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import ShareButton from './shareable/shareable1'
import ShareButon from "./shareable/shareable";
import axios from "axios";

const Happy = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [details, setDetails] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    axios.get(`/users/${props.match.params.fullname}`).then((resp) => {
      console.log(resp);
      setDetails(resp.data);
    });
  }, []);

  return (
    <div class="container-fluid pyro">
      <div class="before">
        <h2>
          {/* Happy Dawali..! */}
          {" Happy" + props.myData}
          {/* {props.match.params.fullname} */}
        </h2>
      </div>
      <div class="after">{/* <h1>O No</h1> */}</div>
      <div className="Main__app">
        <img
          className="Gif__Dawali"
          src={require("./Diwali-Wishes-GIF-Images.gif")}
        />
        <i>
          <h3>
            From{" "}
            <strong className="user_name_to_show">
              {details ? details.name : null}{" "}
            </strong>
          </h3>
        </i>
        {details ? (
          details.message ? (
            <i>
              <h3>
                Message:{" "}
                <strong className="user_name_to_show">
                  {details.message}{" "}
                </strong>
              </h3>
            </i>
          ) : null
        ) : null}

        <br />

        <Link to="/">
          <button class="animate__animated animate__bounceInLeft happy__botton">
            {" "}
            Create Your Own ..!
          </button>
        </Link>
      </div>
      <div style={{ postion: "fixed", marginTop: "88px" }}>
        <ShareButon />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.name);
  return {
    myData: state.name,
  };
};

export default connect(mapStateToProps)(Happy);
