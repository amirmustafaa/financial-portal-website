import React, {useContext, useState, useEffect} from 'react';
import {PieChart, Pie, Legend, Cell, Tooltip} from 'recharts';
import {useLocation } from 'react-router';
import UserContext from "../../../context/UserContext";
import Axios from 'axios';
import Cookies from 'universal-cookie';


function BudgetPagePanel(){
    const { userData } = useContext(UserContext);
    const cookies = new Cookies();
    let token = cookies.get("auth-token");
    const location = useLocation();
    const budgetId = location.state.data

    const[budgetState, setBudgetState]= useState([]);

    const budgetInformation = async() =>{
        const budgetObject = {
            accountId: budgetId
        };
        const budgetRes = await Axios.post("http://localhost:8080/api/data/budgetinformation", budgetObject,{
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
    
    const colors = ['#33B2FF', '#7DFF33', '#33FFB5', '#FF3333', '#337DFF', '#FF6B33', '#FFD133', '#33FFC1'];

    return(

        <div>
            <h1 className = "budget-header"> Your {budgetState.duration} Budget</h1>
            <PieChart width={800} height={800}>
                <Pie dataKey="value" isAnimationActive={false} data={data} cx={380} cy={400} outerRadius={300} fill="#8884d8" label>
                    {
                        data.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)
                    }
                </Pie>
                
                
            <Tooltip />
            </PieChart>
       
        </div>
    );

}

export default BudgetPagePanel;