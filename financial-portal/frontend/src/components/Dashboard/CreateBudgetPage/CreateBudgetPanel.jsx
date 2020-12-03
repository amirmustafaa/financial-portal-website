import React, {useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import UserContext from "../../../context/UserContext.js";


function CreateBudgetPanel(){
    let history = useHistory();
    const cookies = new Cookies();
    let token = cookies.get("auth-token");
    const { userData } = useContext(UserContext);
    
    const [state, setState] = useState({
        name: "",
        budgetDuration: "",
        housingAmount:undefined,
        utilitiesAmount: undefined,
        transportationAmount: undefined,
        insuranceAmount: undefined,
        savingsAmount: undefined,
        foodAmount: undefined,
        entertainmentAmount:undefined,
        clothingAmount: undefined,
        goal: "",
      });

      function handleChange(event){
        const value = event.target.value;
        setState({
          ...state,
          [event.target.name]: value
        });
      }

      const createBudget = async(event) =>{
        event.preventDefault();

        const budgetObject = {
          name: state.name,
          duration: state.budgetDuration,
          housingAmount: state.housingAmount,
          utilitiesAmount: state.utilitiesAmount,
          transportationAmount: state.transportationAmount,
          insuranceAmount: state.insuranceAmount,
          savingsAmount: state.savingsAmount,
          foodAmount: state.foodAmount,
          entertainmentAmount: state.entertainmentAmount,
          clothingAmount: state.clothingAmount,
          goal: state.goal
        };
  
        const budgetRes = await Axios.post("http://www.moneyportalpro.com/api/data/createbudget", budgetObject,{
           headers: { "Authorization":  `Bearer ${token}`},
        });
  
        history.push("/mainpage/"+userData)
      }

      
    return(
        <div className = "create-budget">
            <form className="text-center  p-5" >

                <p className="h4 mb-4 create-account-header">Create Budget</p>


                <input name="name" value = {state.name} onChange = {handleChange}  type="text"  className="form-control mb-4" placeholder="Budget Name"/>

                <select name ="budgetDuration" value = {state.budgetDuration} onChange = {handleChange}   className=" form-control mb-4">
                     <option value="" disabled>Choose Budget Duration</option>
                     <option value="Weekly" defaultValue >Weekly</option>
                     <option value="Monthly">Monthly</option>
                     <option value="Yearly">Yearly</option>
                </select>
                <input name="housingAmount" value = {state.housingAmount} onChange = {handleChange} className="form-control mb-4" placeholder="Housing Budget"/>
                <input name="utilitiesAmount" value = {state.utilitiesAmount} onChange = {handleChange}  className="form-control mb-4" placeholder="Utilities Budget"/>
                <input name="transportationAmount" value = {state.transportationAmount} onChange = {handleChange} className="form-control mb-4" placeholder="Transportation Amount"/>
                <input name="insuranceAmount" value = {state.insuranceAmount} onChange = {handleChange}  className="form-control mb-4" placeholder="Insurance Budget"/>
                <input name="savingsAmount" value = {state.savingsAmount} onChange = {handleChange}  className="form-control mb-4" placeholder="Savings Budget"/>
                <input name="foodAmount" value = {state.foodAmount} onChange = {handleChange}  className="form-control mb-4" placeholder="Food Budget"/>
                <input name="entertainmentAmount" value = {state.entertainmentAmount} onChange = {handleChange}  className="form-control mb-4" placeholder="Entertainment Budget"/>
                <input name="clothingAmount" value = {state.clothingAmount} onChange = {handleChange}  className="form-control mb-4" placeholder="Clothing Budget"/>
                <div className="form-group">
                    <textarea name = "goal" value = {state.goal} onChange = {handleChange} className="form-control rounded-0" rows="3" placeholder="Describe the Goals of Your Budget"></textarea>
                </div>


                <button onClick = {createBudget}  className="btn btn-info btn-block" type="submit">Create</button>

            </form>  
            
        </div>

    );

}

export default CreateBudgetPanel;