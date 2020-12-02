import React,{useContext, useEffect} from 'react';
import {useLocation } from 'react-router';
import UserContext from "../../../context/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoneyCheckAlt, faChartPie, faDoorOpen} from '@fortawesome/free-solid-svg-icons'

function MainPagePanel(){
    //let history = useHistory();
    const { userData } = useContext(UserContext);
    const location = useLocation();


    return(
        <div className = "container"> 
            <div className = "row" >
                <div className = "create-account-card">
                    <div class="card main-card">
                        <FontAwesomeIcon className ="card-img-top money-check" icon={faMoneyCheckAlt} size="8x"/>
                        <div class="card-body">
                        {userData.user ? (
                            <a href = {"/createaccount/" + userData.user}><h2 class="card-text card-text-main">Create Account</h2></a>
                        
                        ) : (

                        <>
                        </>
                        )}
                        </div>
                    </div>
                </div>

                <div className = "create-account-card">
                    <div class="card main-card">
                        <FontAwesomeIcon className ="card-img-top money-check" icon={faChartPie} size="8x"/>
                        <div class="card-body">
                        {userData.user ? (
                            <a href = {"/createbudget/" + userData.user}><h2 class="card-text card-text-main">Create Budget</h2></a>
                        
                        ) : (

                        <>
                        </>
                        )}
                        </div>
                    </div>
                </div>

                <div className = "create-account-card">
                    <div class="card main-card">
                        <FontAwesomeIcon className ="card-img-top money-check" icon={faDoorOpen} size="8x"/>
                        <div class="card-body">
                        {userData.user ? (
                            <a href = "/"><h2 class="card-text card-text-main">Leave Portal</h2></a>
                        
                        ) : (

                        <>
                        </>
                        )}
                        </div>
                    </div>
                </div>

               
            </div>
        </div>

        
    );
}

   

export default MainPagePanel;