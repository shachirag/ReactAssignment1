import React from 'react';
import './Navbar.css';
import man from './navbarImages/man.png';
import PropTypes from 'prop-types';


function Navbar(props) {
  return (
    <div className="header">
        <div className="left">
            <h1>{props.heading}</h1>
            <p className="sub-head">{props.subheading}</p>
            <h3 className="span-1">Show me how it looks</h3>
            <div>
                <input className="input-field" type="text" placeholder="Your Email Address"/>
                <button className="button-field">Register Now</button>
            </div>
            <h3 className="span-2">
                    Free-No Spam-No Data Sharing
            </h3>
        </div>
        <div className="right">
            <img src={man} alt= "Man" height="400px" width="400px"/>
        </div>
    </div>
  )
}

export default Navbar;

Navbar.prototypes={
    heading:PropTypes.string,
    register:PropTypes.string,
    subheading:PropTypes.string,
};