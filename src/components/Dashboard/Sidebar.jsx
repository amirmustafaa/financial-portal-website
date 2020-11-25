import React,{useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { NavItem, NavLink, Nav, DropdownItem, DropdownToggle, DropdownMenu,UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import AccountContext from "../../context/AccountContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faHome, faMoneyCheckAlt, faChartPie} from '@fortawesome/free-solid-svg-icons'


function Sidebar(){
    const { userData } = useContext(UserContext);
    const { accountId, setAccountId }= useContext(AccountContext);
    const cookies = new Cookies();
    let token = cookies.get("auth-token");

    const [state, setState] = useState([]);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    const changeId = (id) =>{
        setAccountId(id);
    }

    
    
    const getAccounts = async() => {
        const accountRes = await Axios.get("http://localhost:8080/api/data/accountlist", {
          headers: { "Authorization":  `Bearer ${token}`},
        });
        setState(accountRes.data);
   
    }

    useEffect(() => {
        getAccounts();
      },[])

    return(
        <div className = "sidebar">
            {userData.user ? (
                <div className = "sidebar-title"><h3><FontAwesomeIcon className ="title-icon" icon={faUser}/>{userData.user}</h3></div>
            
          ) : (

            <>
            </>
          )}
            <hr/>
            <Nav className = "sidebar-item"vertical>
                <NavItem className = "sidebar-name">
                <NavLink   href="/mainpage/1"> <FontAwesomeIcon className ="card-img-top" icon={faHome} />Home</NavLink>
                </NavItem>
                <UncontrolledDropdown>
                    <DropdownToggle  nav caret  >
                    <FontAwesomeIcon className ="card-img-top" icon={faMoneyCheckAlt}/> Accounts
                    </DropdownToggle>
                    <DropdownMenu>
                    {userData.user ? (
                        state.map(function(d, idx){
                            return  (
                                <Link key = {idx} to={{ pathname: '/account/' + d.name, state: { data: d.id} }}>
                                <DropdownItem key = {idx}>{d.name}</DropdownItem>
                                </Link>
                            );
                    })
                     ) : (

                     <>
                    </>
                     )}
                    
                    </DropdownMenu>
                </UncontrolledDropdown>
                    
                <UncontrolledDropdown>
                    <DropdownToggle  nav caret>
                    <FontAwesomeIcon className ="card-img-top" icon={faChartPie}/> Budgets
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