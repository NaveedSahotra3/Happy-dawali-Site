import React, { useEffect, useState } from 'react'
import './happy.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
const Happy = (props) => {
    const [seconds, setSeconds] = useState(0);
    const [classes, setClasses] = useState()

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);

        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (

        <div class="container-fluid pyro">
            <div class="before">
                <h2 >
                    Happy Dawali..!
                    {/* {props.match.params.fullname} */}
                </h2>
            </div>
            <div class="after">
                {/* <h1>O No</h1> */}
            </div>
        <div className="Main__app">
            <h3>Happy Dawali From <strong style={{color :'red'}}> {props.match.params.fullname} </strong></h3>
        <img className="Gif__Dawali" src={require('./Diwali-Wishes-GIF-Images.gif')} />
        <br/>

        <Link to="/inputname">
            <button class="animate__animated animate__bounceInLeft happy__botton"> Create Your Own ..!</button>
        </Link>
        </div>
        </div>



    )

}

const mapStateToProps = (state) => {
    console.log(state.name);
    return {
        myData: state.name
    }
}

export default connect(mapStateToProps)(Happy)