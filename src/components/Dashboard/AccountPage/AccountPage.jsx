import React,{useState} from 'react';
import Sidebar from '../Sidebar';
import DashNavBar from '../DashNavBar';
import AccountPagePanel from './AccountPagePanel';
//import AccountContext from "../../../context/AccountContext.js";

function AccountPage(){

    return(
        
        <div className = "create-account-page">
            <DashNavBar />
        <div className = "flex-container"> 
            <div className= "flex-side"><Sidebar  /></div>
            <div className = "flex-create-account account-creater" ><AccountPagePanel  /></div>
        </div>
        </div>
    );

}

export default AccountPage;