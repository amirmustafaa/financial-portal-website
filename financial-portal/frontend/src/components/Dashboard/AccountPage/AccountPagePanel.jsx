import React, {useState, useEffect, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useLocation } from 'react-router';
import UserContext from "../../../context/UserContext";
import Axios from 'axios';
import Cookies from 'universal-cookie';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

function AccountPagePanel(){
    const { userData } = useContext(UserContext);
    const history = useHistory();
    const cookies = new Cookies();
    let token = cookies.get("auth-token");
    const location = useLocation();
    let accountId;
    if(location.state === undefined){
        history.push("/");
     }else{
        accountId = location.state.data;
     }

    const[accountState, setAccountState]= useState([]);
    const[transactionState, setTransactionState]= useState([]);


    const accountInformation = async() =>{
        const accountObject = {
            accountId: accountId
        };
        const accountRes = await Axios.post("http://www.moneyportalpro.com/api/data/accountinformation", accountObject,{
           headers: { "Authorization":  `Bearer ${token}`},
        });
        setAccountState(accountRes.data);
  
      }

    const transactionList = async() =>{
        const accountObject = {
            accountId: accountId
        };
        const transactionRes = await Axios.post("http://www.moneyportalpro.com/api/data/transactionlist", accountObject,{
           headers: { "Authorization":  `Bearer ${token}`},
        });
        setTransactionState(transactionRes.data);

    }
    
    useEffect(() => {
        accountInformation();
    },[location.key])
    
    useEffect(() => {
        transactionList();
    },[location.key])

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

 
    return(
        <div>
            <div className="card text-center balance-card">
                <div className="card-header">
                    <h1>Current Balance</h1>
                </div>
                <div className="card-body">
                     <h2>{accountState.currentAmount}</h2>
                </div>
            </div>
            <div className = "transactions">
                <div>
                    <Navbar>
                        <NavbarBrand ><h1 className = "transaction-title">Transactions</h1></NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                            {userData.user ? (
                                <Link to={{ pathname: '/createtransaction/' + userData.user, state: { data: accountId} }}>
                                    <button type="button" className="btn btn-primary ">Add Transaction</button>
                                </Link>
                             ) : (

                            <>
                            </>
                             )}
                            </NavItem>
                            
                        </Nav>
                    </Navbar>
                </div>
           
                    
                    

                <div className="table-responsive-sm">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th className ="right">Name</th>
                                <th className ="right">Amount</th>
                                <th className="right">Company</th>
                                <th className="center">Date</th>
                                <th className="right">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                                {userData.user ? (
                                    transactionState.map(function(d, idx){
                                        return  (
                                            <tr key = {idx}>
                                                <td className="center">{d.name}</td>
                                                <td className="left strong">{d.amount}</td>
                                                <td className="left">{d.company}</td>
                                                <td className="right">{d.date}</td>
                                                <td className="center">{d.category}</td> 
                                            </tr>   
                                        );
                                    })
                                    ) : (
                                    <>
                                    </>
                                    )}  
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default AccountPagePanel;