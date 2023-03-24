import React from 'react';
import './Footer.css';
import Insta from './footerImages/insta.png';
import Linkedin from './footerImages/linkedin.png';
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <div className="footer">
        <div className="ftleft">
            <ul>
                <li>Prompt Generator</li>
                <li>Dweep Daily</li>
                <li>All Contributors</li>
                <li>Your data on Dweep.io</li>
                <li>Contribute to Dweep</li>
            </ul>
        </div>
        <div className="ftright">
            <ul>
                <li>Dweep.io</li>
                <li>Made with love in India</li>
                <li>
                    <img src={Insta} alt="Instagram"/>  
                    <img src={Linkedin} alt="LinkedIn"/>
                </li>
                <li>{props.email}</li>
            </ul>
        </div>
    </div>
  );
}

export default Footer;
Footer.propTypes = {
    email:PropTypes.string.isRequired
}