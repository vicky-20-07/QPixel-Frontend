import React from "react";
import './GetStarted.css';
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from './20231220_232409.png';
import sharing from './socialmedia.png';
import library from './PngItem_5033164.png';
import community from './PinClipart.com_dover-clip-art_5805471.png';
import saving from './PngItem_193515.png';
import Footer from "./Footer";
import FAQ from "./FAQ";

export default function GetStarted() {

        const navigate = useNavigate();

        return (
            <div className="container" id="section-1">
                <div className="cover">
                    <div className="background" />
                    <div className="header">
                        <img src={logo} alt="logo" />
                        <ul>
                            <li><a href="#section-1">Home</a></li>
                            <li><a href="#section-2">Features</a></li>
                            <li><a href="#section-3">FAQ</a></li>
                            <li><a href="#section-4">Contact</a></li>
                        </ul>
                    </div>
                    <div className="getstarted">
                        <h1>QPixel</h1>
                        <p>Capturing Memories, Unleashing Creativity<br />Explore the Art of Images with Us
                            <button onClick={() => navigate('/Login')}>Get started <ChevronRightIcon id="icon" /></button></p>
                    </div>
                </div>
                <div className="features" id="section-2">
                    <div className="feature">
                        <img src={library} alt="library" />
                        <div className="text">
                            <h1>Create your own library</h1>
                            <p>QPixel offers the users to create their own library to store their images. The images would be hoisted in the main page based on the user interaction.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="text">
                            <h1>Publish albums to the world</h1>
                            <p>Share your images with the other creators and the users around the world.</p>
                        </div>
                        <img src={sharing} alt="publish" />
                    </div>
                    <div className="feature">
                        <img src={saving} alt="download" style={{ height: '300px', fill: "white" }} />
                        <div className="text" style={{ paddingBottom: '20px' }}>
                            <h1>Save your favourites offline</h1>
                            <p>Download your favourite albums from the other creators in your local device.</p>
                        </div>
                    </div>
                    <div className="feature">
                        <div className="text">
                            <h1>Build your community</h1>
                            <p>Improve the popularity of your profile by the likes for your photographs.</p>
                        </div>
                        <img src={community} alt="community" />
                    </div>
                </div>
                <FAQ />
                <Footer />
            </div>
        );
    }