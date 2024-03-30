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
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from "react-router-dom";
import logo from './20231220_232409.png';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function HomeHeader(props) {
    const navigate = useNavigate();

    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);
    const [explore, setExplore] = useState(false);

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);
    }

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

    function DropDownExplore() {
        function DropdownItem(props) {
            return (
                <button
                    className="menu-item"
                    onClick={props.task}>
                    <span className="icon-button">{props.icon}</span>
                    {props.children}
                </button>
            );
        }

        return (
            <div className="dropdown-explore">
                <DropdownItem icon={<TravelExploreIcon />}>Explore</DropdownItem>
                <DropdownItem icon={<HourglassTopIcon />}>New Arrival</DropdownItem>
                <DropdownItem icon={<LocalFireDepartmentIcon />}>Top Grossing</DropdownItem>
                <DropdownItem icon={<EmojiEventsIcon />}>Popular</DropdownItem>
            </div>
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
                <DropdownItem Icon={<InfoIcon />} location={('/HelpAndSupport')}>Help & Support</DropdownItem>
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
                    <img
                        src={logo}
                        onClick={() => navigate("/Home")}
                        alt="logo" />
                </IconButton>
            </LogoWrapper>
            <SearchWrapper>
                <SearchBarWrapper>
                    <form>
                        <input
                            type="text"
                            placeholder="search"
                            onChange={(e) => setInput(e.target.value)} />
                        <button
                            type="submit"
                            onClick={onSearchSubmit}>
                            <SearchIcon />
                        </button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <NavBar>
                <NavItem
                    icon={<ExploreIcon id="explore-icon" />}
                    task={() => {
                        setExplore(!explore);
                        setOpen(false)
                    }}>
                    {explore && <DropDownExplore />}
                </NavItem>
                <NavItem
                    icon={<UploadIcon />}
                    task={() => navigate('/Create')} />
                <NavItem
                    icon={<NotificationsIcon />}
                    task={() => navigate('/Notification')} />
                <NavItem
                    icon={<PersonIcon />}
                    task={() => {
                        setOpen(!open);
                        setExplore(false)
                    }}>
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
    z-index: -1;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 25px;
    padding: 5px 2px 2px 0px;
    margin-top: 10px;
`

const LogoWrapper = styled.div`
    img {
        height: 80px;
        filter: drop-shadow(1px 0 0 white);
    }
`

const SearchWrapper = styled.div`
    flex: .7; 
    display: flex;
`

const SearchBarWrapper = styled.div`
    background-color: #232323;
    display: flex;
    height: 38px;
    width: 100%;
    max-width: 1000px;
    border-radius: 5px;
    border: 1px solid #343434;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px; 
        color: white;
    }

    input:focus {
        outline: none;
    }

    form > button {
        background-color: #343434;
        border-radius: 0px 5px 5px 0px;
        width: 65px; 
        color: white;
        border: none;
    }

    form > button:hover {
        background-color: #222;
    }
`
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 200px;
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

const ExploreButton = styled.div`
    #down-icon {
        margin-top: 1.5px;
    }
`

const ExploreTab = styled.div`
    width: 105px;
    z-index: 2;
    position: absolute;
    margin-left: -35px;
    top: 7.5%;
    background-color: #ebebeb;
    border-radius: 5px;
    border: 1px solid #111;
    button {
        width: 100%;
        border: none;
        outline: none;
        background: transparent;
        text-align: left;
        color: black;
        font-size: 15px;
        font-weight: 600;
        border-bottom: 1px solid #aaaaaa;
        padding: 10px 10px 10px 10px;
    }
    button:hover {
        background-color: #343434;
        color: white;
    }
`
const ProfileTab = styled.div`

`

const DropdownItem = styled.div`
    position: absolute;
    z-index: 2;
    top: 58px;
    width: 300px;
    transform: translateX(-100%);
    background-color: #100C08;
    border: 1px solid white;
    border-radius: 5px;
    padding: 1rem;
    overflow: hidden;
`

const CreateButton = styled.div`

`

const NotificationButton = styled.div`
`

const ProfileButton = styled.div`
`
