import React from 'react';
import Sidebar from '../Sidebar';
import DashNavBar from '../DashNavBar';
import CreateTransactionPanel from './CreateTransactionPanel';


function CreateTransaction(){
    return(
          <div className = "create-account-page">
            <DashNavBar />
            <div className = "flex-container"> 
                <div className= "flex-side"><Sidebar  /></div>
                <div className = "flex-create-account account-creater" ><CreateTransactionPanel  /></div>
            </div>

        </div>


    );

}

export default CreateTransaction;