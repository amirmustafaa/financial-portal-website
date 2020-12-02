import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useLocation } from 'react-router';
import UserContext from "../../../context/UserContext";
import Axios from 'axios';
import Cookies from 'universal-cookie';

function AccountPagePanel(){
    const { userData } = useContext(UserContext);
    const cookies = new Cookies();
    let token = cookies.get("auth-token");
    const location = useLocation();
    const accountId = location.state.data

    const[accountState, setAccountState]= useState([]);
    const[transactionState, setTransactionState]= useState([]);


    const accountInformation = async() =>{
        const accountObject = {
            accountId: accountId
        };
        const accountRes = await Axios.post("http://localhost:8080/api/data/accountinformation", accountObject,{
           headers: { "Authorization":  `Bearer ${token}`},
        });
        setAccountState(accountRes.data);
  
      }

    const transactionList = async() =>{
        const accountObject = {
            accountId: accountId
        };
        const transactionRes = await Axios.post("http://localhost:8080/api/data/transactionlist", accountObject,{
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

 
    return(
        <div>
            <div class="card text-center balance-card">
                <div class="card-header">
                    <h1>Current Balance</h1>
                </div>
                <div class="card-body">
                     <h2>{accountState.currentAmount}</h2>
                </div>
            </div>
            <div className = "transactions">
            <div className = "container">
                <div className = "row">
                    <h1 className = "transaction-title">Transactions</h1>
                    {userData.user ? (
                        <Link to={{ pathname: '/createtransaction/' + userData.user, state: { data: accountId} }}>
                             <div className= "transaction-button" ><button type="button" class="btn btn-primary ">Add Transaction</button></div>
                        </Link>
                        ) : (

                        <>
                        </>
                        )}
                    
                </div>
            </div>
                <div class="table-responsive-sm">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th className = "right">Name</th>
                                <th className = "right">Amount</th>
                                <th class="right">Company</th>
                                <th class="center">Date</th>
                                <th class="right">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                                {userData.user ? (
                                    transactionState.map(function(d, idx){
                                        return  (
                                            <tr key = {idx}>
                                                <td class="center">{d.name}</td>
                                                <td class="left strong">{d.amount}</td>
                                                <td class="left">{d.company}</td>
                                                <td class="right">{d.date}</td>
                                                <td class="center">{d.category}</td> 
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