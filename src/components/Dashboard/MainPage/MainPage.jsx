import React from 'react';
import Sidebar from '../Sidebar';
import MainPagePanel from './MainPagePanel';
import DashNavBar from '../DashNavBar';

function MainPage(){
    return(
        <div className = "mainPage">
            <DashNavBar />
        <div className = "flex-container"> 
            <Sidebar className= "flex-side" />
            <MainPagePanel className = "flex-main" />
        </div>

        </div>
    );
}

export default MainPage;