import React, { useState } from "react";
import './Footer.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ContactUs } from "./Contact.js";

export default function Footer() {
    const [toggle, setToggle] = useState(false);
    return (
        <footer id="section-4">
            <div className="contactus">
                <div className="socialmedia">
                    <a href=""><FacebookIcon className="icons" /></a>
                    <a href="https://www.instagram.com/vicky__20__07/"><InstagramIcon className="icons" /></a>
                    <a href="#section-4" onClick={() => setToggle(!toggle)}><GoogleIcon className="icons" /></a>
                    <a href="https://www.linkedin.com/in/vignesh71810406/"><LinkedInIcon className="icons" /></a>
                    <a href="https://github.com/vicky-20-07"><GitHubIcon className="icons" /></a>
                </div>
                {
                    toggle &&
                    <ContactUs />
                }
                <div className="footerNav">
                    <ul>
                        <li><a href="#section-1">Home</a></li>
                        <li><a href="#section-2">Features</a></li>
                        <li><a href="#section-3">FAQ</a></li>
                        <li><a href="">GetStarted</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>
                    Copyright &copy;{new Date().getFullYear()} - Designed by <span id="designer">VIGNESH M</span>
                </p>
            </div>
        </footer>
    );
}