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
        housingAmount:null,
        utilitiesAmount: null,
        transportationAmount: null,
        insuranceAmount: null,
        savingsAmount: null,
        foodAmount: null,
        entertainmentAmount:null,
        clothingAmount: null,
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
 
        };
  
        const budgetRes = await Axios.post("http://localhost:8080/api/data/createbudget", budgetObject,{
           headers: { "Authorization":  `Bearer ${token}`},
        });
  
        history.push("/mainpage/"+userData)
      }

      
    return(
        <div className = "create-budget">
            <form class="text-center  p-5" >

                <p class="h4 mb-4 create-account-header">Create Budget</p>


                <input name="name"  type="text"  class="form-control mb-4" placeholder="Budget Name"/>

                <select name ="accountType"   class=" form-control mb-4">
                     <option value="" selected disabled>Choose Budget Duration</option>
                     <option value="Weekly" >Weekly</option>
                     <option value="Monthly">Monthly</option>
                     <option value="Yearly">Yearly</option>
                </select>
                <input name="name"  class="form-control mb-4" placeholder="Housing Budget"/>
                <input name="name"  class="form-control mb-4" placeholder="Utilities Budget"/>
                <input name="name"  class="form-control mb-4" placeholder="Transportation Amount"/>
                <input name="name"  class="form-control mb-4" placeholder="Insurance Budget"/>
                <input name="name"  class="form-control mb-4" placeholder="Savings Budget"/>
                <input name="name"  class="form-control mb-4" placeholder="Food Budget"/>
                <input name="name"  class="form-control mb-4" placeholder="Entertainment Budget"/>
                <input name="name"  class="form-control mb-4" placeholder="Clothing Budget"/>
                <div class="form-group">
                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Describe the Goals of Your Budget"></textarea>
                </div>


                <button  class="btn btn-info btn-block" type="submit">Create</button>

            </form>  
            
        </div>

    );

}

export default CreateBudgetPanel;