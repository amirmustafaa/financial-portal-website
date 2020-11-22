import React from 'react';
//import {useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoneyCheckAlt, faChartPie} from '@fortawesome/free-solid-svg-icons'

function MainPagePanel(){
    //let history = useHistory();


    return(
        <div className = "container"> 
            <div className = "row" >
                <div className = "create-account-card">
                    <div class="card main-card">
                        <FontAwesomeIcon className ="card-img-top money-check" icon={faMoneyCheckAlt} size="8x"/>
                        <div class="card-body">
                            <a href = "/createaccount/1"><h2 class="card-text card-text-main">Create Account</h2></a>
                        </div>
                    </div>
                </div>

                <div className = "create-account-card">
                    <div class="card main-card">
                        <FontAwesomeIcon className ="card-img-top money-check" icon={faChartPie} size="8x"/>
                        <div class="card-body">
                        <a href = "/createBudget"><h2 class="card-text card-text-main">Create Budget</h2></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

   

export default MainPagePanel;