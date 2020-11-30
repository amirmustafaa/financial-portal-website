import React,{useState} from 'react';
import Sidebar from '../Sidebar';
import DashNavBar from '../DashNavBar';
import BudgetPagePanel from './BudgetPagePanel';

function BudgetPage(){


    return(
        <div className = "create-account-page">
            <DashNavBar />
        <div className = "flex-container"> 
            <div className= "flex-side"><Sidebar  /></div>
            <div className = "flex-main" ><BudgetPagePanel  /></div>
        </div>
        </div>

    );

}

export default BudgetPage;