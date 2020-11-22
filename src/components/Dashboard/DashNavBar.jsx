import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import { useHistory} from 'react-router-dom';
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
    const cookies = new Cookies();
    let history = useHistory();

    function logout() {
        cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
        history.replace("/");
    }
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
                <NavbarText ><Button onClick = {logout} color="primary">LOG OUT</Button>{' '}</NavbarText>
                </Collapse>
            </Navbar>
        </div>

    );
}


export default DashNavBar;