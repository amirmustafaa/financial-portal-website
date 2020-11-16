import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText,
    Button
  } from 'reactstrap';

import Logo from './logo.png';

function DashNavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div >     
            <Navbar className = "dashNav" light expand="md">
                <NavbarBrand href="/"><img className = "logo" src = {Logo} alt ="logo"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="nav" navbar>
                </Nav>
                <a className = "logOut" href = "/"><NavbarText ><Button color="primary">LOG OUT</Button>{' '}</NavbarText></a>
                </Collapse>
            </Navbar>
        </div>

    );
}


export default DashNavBar;