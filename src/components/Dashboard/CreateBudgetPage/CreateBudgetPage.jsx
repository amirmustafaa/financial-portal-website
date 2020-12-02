import React from 'react';
import Sidebar from '../Sidebar';
import DashNavBar from '../DashNavBar';
import CreateBudgetPanel from './CreateBudgetPanel';

function CreateBudgetPage(){
    return(
               
        <div className = "create-account-page">
            <DashNavBar />
            <div className = "flex-container"> 
                <div className= "flex-side-create-budget"><Sidebar  /></div>
                <div className = "flex-create-budget account-creater" ><CreateBudgetPanel  /></div>
            </div>

        </div>

    );

}

export default CreateBudgetPage;