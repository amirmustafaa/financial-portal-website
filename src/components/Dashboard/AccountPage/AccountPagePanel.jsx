import React, {useState} from 'react';
import { useLocation } from 'react-router';
import Axios from 'axios';

function AccountPagePanel(){
    
    const location = useLocation();
    console.log(location.state.data);
 
    return(
        <div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{location.state.data}</h5>
                    <p class="card-text">Some</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

        </div>
    );

}

export default AccountPagePanel;