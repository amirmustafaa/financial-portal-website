import React from 'react';
import { NavItem, NavLink, Nav } from "reactstrap";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className = "sidebar">
            <h3>List Based</h3>
            <Nav vertical>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav>
        </div>
       

    );

}

export default Sidebar;