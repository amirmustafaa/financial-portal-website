import React from 'react';
import Sidebar from '../Sidebar';
import DashNavBar from '../DashNavBar';
import CreateBudgetPanel from './CreateBudgetPanel';

function CreateBudgetPage(){
    return(
               
        <div className = "create-account-page">
            <DashNavBar />
            <div className = "flex-container"> 
                <div className= "flex-side"><Sidebar  /></div>
                <div className = "flex-create-account account-creater" ><CreateBudgetPanel  /></div>
            </div>

        </div>

    );

}

export default CreateBudgetPage;