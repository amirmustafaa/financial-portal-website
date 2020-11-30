import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import {useLocation } from 'react-router';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import UserContext from "../../../context/UserContext.js";

function CreateTransactionPanel(){

    let history = useHistory();
    const cookies = new Cookies();
    let token = cookies.get("auth-token");
    const { userData } = useContext(UserContext);
    const location = useLocation();
    const accountId = location.state.data

    

    const [state, setState] = useState({
        name: "",
        amount:undefined,
        company: "",
        type: "",
        category: "",
      });

      function handleChange(event){
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }
      
      let d = new Date();
      let date = d.getDate();
      let month = d.getMonth() + 1;
      let year = d.getFullYear();
      let dateStr =  + month + "/" + date + "/" + year;

      const createTransaction = async(event) =>{
        event.preventDefault();

        const transactionObject = {
            name: state.name,
            amount: state.amount,
            company: state.company,
            type: state.type,
            category: state.category,
            date: dateStr,
            accountId: accountId
 
        };
  
        const transactionRes = await Axios.post("http://localhost:8080/api/data/createtransaction", transactionObject,{
           headers: { "Authorization":  `Bearer ${token}`},
        });
  
        history.push("/account/"+accountId, location.state);
      }



    return(
        <div>
            <form class="text-center  p-5" >

                <p class="h4 mb-4 create-account-header">Add Transaction</p>

           
                <input name="name" value = {state.name} onChange = {handleChange}  type="text"  class="form-control mb-4" placeholder="Transaction Name"/>

            
                <input name="amount" value = {state.amount} onChange = {handleChange}   class="form-control mb-4" placeholder="Amount"/>

                <input name="company" value = {state.company} onChange = {handleChange}   class="form-control mb-4" placeholder="Company"/>

                <select name ="type" value = {state.type} onChange = {handleChange} class="browser-default custom-select mb-4">
                    <option value="" disabled>Choose Transaction Type</option>
                    <option value="Charge" defaultValue >Charge</option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdrawal">Withdrawal</option>
                </select>
                <select name ="category" value = {state.category} onChange = {handleChange}   class="browser-default custom-select mb-4">
                    <option value=""  disabled>Choose Category</option>
                    <option value="Housing" defaultValue>Housing</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Transportation" >Transportation</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Food" >Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Clothing">Clothing</option>
                </select>


                <button onClick ={createTransaction} class="btn btn-info btn-block" type="submit">Create</button>

             </form>   
        </div>

    );

}

export default CreateTransactionPanel;