import React from 'react';
import Sidebar from '../Sidebar';
import CreateAccountPanel from './CreateAccountPanel';
import DashNavBar from '../DashNavBar';

function MainPage(){
    return(
        <div className = "create-account-page">
            <DashNavBar />
        <div className = "flex-container"> 
            <div className= "flex-side flex-side-create-account"><Sidebar  /></div>
            <div className = "flex-create-account account-creater" ><CreateAccountPanel  /></div>
        </div>

        </div>
    );
}

export default MainPage;