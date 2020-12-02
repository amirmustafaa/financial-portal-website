import React,{useState, useContext, useEffect} from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { NavItem, NavLink, Nav, DropdownItem, DropdownToggle, DropdownMenu,UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faHome, faMoneyCheckAlt, faChartPie} from '@fortawesome/free-solid-svg-icons'


function Sidebar(){
    const { userData } = useContext(UserContext);
    const cookies = new Cookies();
    let token = cookies.get("auth-token");

    const [accountState, setAccountState] = useState([]);
    const [budgetState, setBudgetState] = useState([]);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    
    const getAccounts = async() => {
        const accountRes = await Axios.get("http://localhost:8080/api/data/accountlist", {
          headers: { "Authorization":  `Bearer ${token}`},
        });
        setAccountState(accountRes.data);
   
    }

    const getBudgets = async() => {
        const accountRes = await Axios.get("http://localhost:8080/api/data/budgetlist", {
          headers: { "Authorization":  `Bearer ${token}`},
        });
        setBudgetState(accountRes.data);
   
    }



    useEffect(() => {
        getAccounts();
      },[])

    useEffect(() => {
        getBudgets();
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

                {userData.user ? (
                    <NavLink   href= {"/mainpage/" + userData.user} > <FontAwesomeIcon className ="card-img-top" icon={faHome} />Home</NavLink>
                
            
                ) : (

                 <>
                </>
                )}
               
                </NavItem>
                <UncontrolledDropdown>
                    <DropdownToggle  nav caret  >
                    <FontAwesomeIcon className ="card-img-top" icon={faMoneyCheckAlt}/> Accounts
                    </DropdownToggle>
                    <DropdownMenu>
                    {userData.user ? (
                        accountState.map(function(d, idx){
                            return  (
                                <Link key = {idx} to={{ pathname: '/account/' + d.id, state: { data: d.id} }}>
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
                        {userData.user ? (
                            budgetState.map(function(d, idx){
                                return  (
                                    <Link  key = {idx}  to={{ pathname: '/budget/' + d.id, state: { data: d.id} }}>
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
                
            </Nav>
        </div>
       

    );

}

export default Sidebar;