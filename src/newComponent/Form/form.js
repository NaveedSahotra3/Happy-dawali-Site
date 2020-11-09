import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Navigation from '../../components/navigation'
import axios from 'axios'
import { connect } from 'react-redux'
const InputName = (props) => {
    const history = useHistory();
    const [state, setState] = useState(
        {
            name: '',
            message: ''
        }
    )

    const handleChange = (e) => {
        console.log(e.target.value)

        setState({ ...state, [e.target.name]: e.target.value })


        console.log(state)

    }
    const submitData = (e) => {
        e.preventDefault();
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        // history.push("../happy.js");
        console.log(state)
        axios.post('/signup', state ).then(res=>{
            console.log(res)
                })
        // axios.post({

        //     url: '/sendpostreq',
        //     data: state,
        //     // headers: {'Content-Type': 'multipart/form-data' }
        // })
        //     .then(function (response) {
               
        //         console.log(response);
        //     })
        //     .catch(function (response) {
           
        //         console.log(response);
        //     });

        // props.changeName(state)

    }

    // componentWillReceiveProps = nextProps => {

    //     console.log(nextProps.dd)
    //   }

    return (<div>
        <Navigation />

        <div>
            <div id="contact">
                <div className="container">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="section-title">
                                <h2>Wish Your Beloved</h2>
                                <p>
                                    Please fill out the form below to send us an email and we
                                    will get back to you as soon as possible.
                               </p>
                            </div>
                            <form name="" id="contactForm" enctype="multipart/form-data" >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required="required"
                                                // onChange={handleChange}
                                                onChange={e => state.Name = e.target.value}
                                            />
                                            <textarea
                                                type="text"
                                                id="name"
                                                className="form-control"
                                                placeholder="Custom Message"
                                                required="required"
                                                name="message"
                                                onChange={handleChange}
                                                style={{ marginTop: '10px', height: '94px' }}
                                            // onChange={e => state.message = e.target.value } 
                                            >


                                            </textarea>
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>

                                </div>
                                {/* <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div> */}
                                <div id="success"></div>
                                <Link  to={`/happy/${state.Name}`}>
                                    <button onClick={submitData} type="submit" className="btn btn-custom btn-lg">
                                        Submit
                                </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-offset-1 contact-info">

                    </div>

                </div>
            </div>
            <div id="footer">
                <div className="container text-center">
                    <p>
                        &copy; Festival Wishing Developed by{" "}
                        <a href="#" rel="nofollow">
                            Coding Trip
              </a>
                    </p>
                </div>
            </div>
        </div>



    </div>)

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

export default connect(null, mapDispatchToProps)(InputName)