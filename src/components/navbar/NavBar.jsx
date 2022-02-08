import React from "react"
import "./navbar.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" 
                    style={{height : 25}}
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Poplar and New</span>
                    <span>List</span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span>KIDS</span>
                    <NotificationsIcon className="icon"/>
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt=""
                    style={{height : 35 , borderRadius : 10}}
                    />
                     <ArrowDropDownIcon className="icon"/>
                </div>
               
            </div>
        </div>
    )
}

export default Navbar