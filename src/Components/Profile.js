import React from "react";
import "./Profile.css";
import image from "./pexels-zukiman-mohamad-22185.jpg";
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import RestrictedAccess from "./RestrictedAccess";

export default function Profile() {
  const navigate = useNavigate();

  const display = window.localStorage.getItem('isloggedin');

  return (
    display ? (
      <div className="prof-container">
        <Header />
        <div className="emp-profile">
          <form method="">
            <div className="emp-profile-row">
              <div className="emp-profile-img">

              </div>
              <div className="emp-profile-col">
                <div className="emp-profile-head">
                  <h5>HELLO</h5>
                  <h6>WORLD</h6>
                  <p className="profile-rating">RATINGS <span><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span></p>
                  <ul className="profile-nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">Active</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="prof-grid-container">
          <div className="prof-grid">
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
            <img src={image}></img>
          </div>
        </div>
      </div>
    )
    :
    (
      <RestrictedAccess />
    )
  );
}
