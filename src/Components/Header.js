import React, { useState } from "react";
import './Header.css';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import UploadIcon from '@mui/icons-material/Upload';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import logo from './20231220_232409.png';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Header(props) {

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    function NavItem(props) {
        return (
            <li className="nav-item">
                <button className="icon-button" onClick={props.task}>
                    {props.icon}
                </button>
                {props.children}
            </li>
        );
    }

    function DropdownMenu() {
        function DropdownItem(props) {
            return (
                <button
                    className="menu-item"
                    onClick={() => navigate(props.location)}>
                    <span
                        className="icon-button">{props.Icon}</span>
                    {props.children}
                </button>
            );
        }

        return (
            <div className="dropdown">
                <DropdownItem Icon={<PersonIcon />} location={('/Profile')}>My Profile</DropdownItem>
                <DropdownItem Icon={<FavoriteIcon />}>Favourites</DropdownItem>
                <DropdownItem Icon={<SettingsIcon />}>Settings</DropdownItem>
                <DropdownItem Icon={<InfoIcon />}>Help & Support</DropdownItem>
                <button style={{ width: '100%', background: 'transparent', border: 'none', padding: '0' }} onClick={() => { navigate('/'); localStorage.clear(); toast.success("Logged Out Successfully!"); }}><DropdownItem Icon={<LogoutIcon />}>Log out</DropdownItem></button>
            </div>
        );
    }

    function NavBar(props) {
        return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    {props.children}
                </ul>
            </nav>
        );
    }

    return (
        <Wrapper>
            <ToastContainer />
            <WrapperBackground />
            <LogoWrapper>
                <IconButton>
                    <img src={logo} onClick={() => navigate("/Home")} alt="logo" />
                </IconButton>
            </LogoWrapper>
            <NavBar>
                <NavItem
                    icon={<UploadIcon />}
                    task={() => navigate('/Create')} />
                <NavItem
                    icon={<NotificationsIcon />}
                    task={() => navigate('/Notification')} />
                <NavItem
                    icon={<PersonIcon />}
                    task={() => setOpen(!open)}>
                    {open && <DropdownMenu />}
                </NavItem>
            </NavBar>
        </Wrapper>
    );
}

const WrapperBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 55px;
    background-color: #100C08;
    box-shadow: 0 0 5px 1px black;
    top: 0;
    left: 0;
    z-index: 1;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25px;
    padding: 5px 2px 2px 0px;
    margin-top: 10px;
    z-index: 2;
`

const LogoWrapper = styled.div`
    img {
        height: 80px;
        filter: drop-shadow(1px 0 0 white);
        margin-left: 20px;
        z-index: 2;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    z-index: 2;
    flex-direction: row;
    width: 150px;
    margin-right: 20px;
    justify-content: space-between;
    .mainButton {
        background-color: #343434;
        outline: none;
        border: none;
        width: 40px;
        height: 40px;
        color: #e2e2e2;
        border-radius: 50%;
        transition: .5s;
    }
    .mainButton:hover {
        background-color: transparent;
        transform: scale(1.1);
        color: white;
    }

    .icons {
        font-size: 25px;
    }
`

const CreateButton = styled.div`
    
`

const NotificationButton = styled.div`
`

const ProfileButton = styled.div`
`