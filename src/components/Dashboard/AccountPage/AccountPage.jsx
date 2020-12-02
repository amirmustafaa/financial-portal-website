import React,{useState} from 'react';
import Sidebar from '../Sidebar';
import DashNavBar from '../DashNavBar';
import AccountPagePanel from './AccountPagePanel';

function AccountPage(){

    return(
        
        <div className = "create-account-page">
            <DashNavBar />
        <div className = "flex-container"> 
            <div className= "flex-side-account"><Sidebar  /></div>
            <div className = "flex-account" ><AccountPagePanel  /></div>
        </div>
        </div>
    );

}

export default AccountPage;