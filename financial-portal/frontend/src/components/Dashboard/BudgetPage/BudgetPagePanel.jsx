import React, {useState, useEffect} from 'react';
import {PieChart, Pie,  Cell, Tooltip} from 'recharts';
import {useHistory} from 'react-router-dom';
import {useLocation } from 'react-router';
import Axios from 'axios';
import Cookies from 'universal-cookie';


function BudgetPagePanel(){
    const history = useHistory();
    const cookies = new Cookies();
    let token = cookies.get("auth-token");
    const location = useLocation();
    let budgetId;
    if(location.state === undefined){
        history.push("/");
     }else{
        budgetId = location.state.data;
     }

    const[budgetState, setBudgetState]= useState([]);

    const budgetInformation = async() =>{
        const budgetObject = {
            accountId: budgetId
        };
        const budgetRes = await Axios.post("https://www.moneyportalpro.com/api/data/budgetinformation", budgetObject,{
           headers: { "Authorization":  `Bearer ${token}`},
        });
        setBudgetState(budgetRes.data);
        
  
    }

    useEffect(() => {
        budgetInformation();
    },[location.key])

    const data = [
        { name: 'Housing', value: budgetState.housingAmount }, { name: 'Utilities', value: budgetState.utilitiesAmount},
        { name: 'Transportation', value: budgetState.transportationAmount}, { name: 'Insurance', value: budgetState.insuranceAmount },
        { name: 'Savings', value: budgetState.savingsAmount }, { name: 'Food', value: budgetState.foodAmount },
        { name: 'Entertainment', value: budgetState.entertainmentAmount }, { name: 'Clothing', value: budgetState.clothingAmount },
      ];
    
    const colors = ['#33B2FF', '#7DFF33', '#33FFB5', '#FF3333', '#6942f5', '#FF6B33', '#FFD133', '#f542f2'];

    return(

        <div>
            <h1 className = "budget-header"> Your {budgetState.duration} Budget</h1>
            <PieChart width={800} height={800}>
                <Pie dataKey="value" isAnimationActive={false} data={data} cx={380} cy={400} outerRadius={300} fill="#8884d8" label>
                    {
                        data.map((entry, index) => <Cell key = {index} fill={colors[index % colors.length]}/>)
                    }
                </Pie>
                
                
            <Tooltip />
            </PieChart>
       
        </div>
    );

}

export default BudgetPagePanel;