import React,{useState, useContext} from 'react';
import { NavItem, NavLink, Nav,Dropdown, DropdownItem, DropdownToggle, DropdownMenu,UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";


function Sidebar(){
    const { userData } = useContext(UserContext);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);


    return(
        <div className = "sidebar">
            {userData.user ? (
                <h3>{userData.user}</h3>
            
          ) : (

            <>
            </>
          )}
            
            <Nav vertical>
                <NavItem>
                <NavLink href="/mainpage/1">Home</NavLink>
                </NavItem>
                <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                         Accounts
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                    
                <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                            Budgets
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </div>
       

    );

}

export default Sidebar;