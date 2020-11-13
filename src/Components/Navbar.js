import React from 'react';
import SidebarOption from "./SidebarOption";
import '../CSS/Navbar.css'
// Import Icons
// import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import SearchIcon from '@material-ui/icons/Search';
// import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListIcon from '@material-ui/icons/List';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// Button Import
import { Button } from '@material-ui/core';

const Navbar = () => {
    window.addEventListener('scroll', function(){
        var header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    //  toggleMenu(){
    //     var menuToggle = document.querySelector('.toggle');
    //     var menu = document.querySelector('.menu');
    //     menuToggle.classList.toggle('active')
    //     menu.classList.toggle('active')
    // }

    return (
    <header className='nav'>
        {/* <a href="#home" className="logo">My Life</a>
        <div className="toggle" onclick={this.toggleMenu}></div>
        <ul className="menu">
            <li><a href="#home" onclick="toggleMenu();">Home</a></li>
            <li><a href="#about" onclick="toggleMenu();">About</a></li>
            <li><a href="#family" onclick="toggleMenu();">Family</a></li>
        </ul> */}
        <Button className="navButton" href="#top"> 
            <SidebarOption active Icon={HomeOutlinedIcon} text="Top" />
        </Button>
        <Button className="navButton" href="#aboutLink">
            <SidebarOption link="#bottom" Icon={PersonOutlineOutlinedIcon} text="About Me" />
        </Button>
        <Button className="navButton" href="#projectLink">
            <SidebarOption Icon={ListIcon} text="Projects" />
        </Button>


        <Button id="email" href="mailto:fernettejs@gmail.com" >Email Me
        </Button>
            
    </header>
    );
}

export default Navbar;