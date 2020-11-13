import React from 'react';
import '../CSS/Navbar.css'

function SidebarOption({active,text, Icon}) {
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon />
            <h2>{text}</h2>

        </div>
    );
}



export default SidebarOption;