import React,{useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import UserContext from "../../../context/UserContext.js";



function CreateAccountPanel(){
    let history = useHistory();
    const cookies = new Cookies();
    let token = cookies.get("auth-token");
    const { userData } = useContext(UserContext);

    const [state, setState] = useState({
      name: "",
      accountType: "",
      currentAmount: null,
      monthlyAmount:null ,
      minimumAmount:null
    });
  
    function handleChange(event){
      const value = event.target.value;
      setState({
        ...state,
        [event.target.name]: value
      });
    }

    const createAccount = async(event) =>{
      event.preventDefault();
      const accountObject = {
         name: state.name,
          accountType: state.accountType,
          currentAmount:state.currentAmount,
          monthlyAmount: state.monthlyAmount,
          minimumAmount: state.minimumAmount
      };

      const accountRes = await Axios.post("http://localhost:8080/api/data/createaccount", accountObject,{
         headers: { "Authorization":  `Bearer ${token}`},
      });

      history.push("/mainpage/"+userData)
    }
    return(
        <div>
            <form class="text-center  p-5" >

                <p class="h4 mb-4 create-account-header">Create Account</p>

           
                <input name="name" value = {state.name} onChange={handleChange} type="text"  class="form-control mb-4" placeholder="Account Name"/>

            
                <input name="currentAmount"  value = {state.currentAmount} onChange={handleChange}   class="form-control mb-4" placeholder="Current Balance"/>

                <input name="minimumAmount"  value = {state.minimumAmount} onChange={handleChange}   class="form-control mb-4" placeholder="Minimum Balance"/>

                <input name="monthlyAmount"  value = {state.monthlyAmount} onChange={handleChange}   class="form-control mb-4" placeholder="Monthly Spending Limit"/>
                
                <select name ="accountType"  value = {state.accountType} onChange={handleChange} class="browser-default custom-select mb-4">
                    <option value="" disabled>Choose option</option>
                    <option value="1" selected>Checking</option>
                    <option value="2">Savings</option>
                </select>


                <button onClick = {createAccount} class="btn btn-info btn-block" type="submit">Create</button>

        </form>  
        
            
        </div>

    );

}

export default CreateAccountPanel;