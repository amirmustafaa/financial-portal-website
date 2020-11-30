import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useLocation } from 'react-router';
import UserContext from "../../../context/UserContext";
import Axios from 'axios';

function AccountPagePanel(){
    const { userData } = useContext(UserContext);
    const location = useLocation();
    console.log(location.state.data);
 
    return(
        <div>
            <div class="card text-center balance-card">
                <div class="card-header">
                    Current Balance
                </div>
                <div class="card-body">
                     <h2>5000.23</h2>
                </div>
            </div>
            <div className = "transactions">
            <div className = "container">
                <div className = "row">
                    <h1 className = "transaction-title">Transactions</h1>
                    {userData.user ? (
                        <Link to = {"/createtransaction/" + userData.user}>
                             <button type="button" class="btn btn-primary">Add Transaction</button>
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
                                <th class="center">#</th>
                                <th>Item</th>
                                <th>Description</th>
                                <th class="right">Price</th>
                                <th class="center">Qty</th>
                                <th class="right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="center">1</td>
                                <td class="left strong">Iphone 10X</td>
                                <td class="left">Iphone 10X with headphone</td>
                                <td class="right">$1500</td>
                                <td class="center">10</td>
                                <td class="right">$15,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default AccountPagePanel;