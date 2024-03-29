import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserContext from "../context/UserContext.js";
import Login from './Login/Login';
import Register from './Register/Register';
import MainPage from './Dashboard/MainPage/MainPage';
import CreateAccountPage from './Dashboard/CreateAccountPage/CreateAccountPage';
import AccountPage from './Dashboard/AccountPage/AccountPage';
import CreateBudgetPage from './Dashboard/CreateBudgetPage/CreateBudgetPage';
import BudgetPage from './Dashboard/BudgetPage/BudgetPage';
import CreateTransaction from './Dashboard/CreateTransaction/CreateTransaction';
import Axios from 'axios';
import Cookies from 'universal-cookie';

function App() {
  const cookies = new Cookies();


  const [userData, setUserData] = useState({
    token:undefined,
    user: undefined
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = cookies.get("auth-token");
      if (token === undefined) {
        cookies.set("auth-token", "", { path: '/' }, {httpOnly:true});
        token = "";
      }

        const userRes = await Axios.get("https://www.moneyportalpro.com/api/test/user", {
          headers: { "Authorization":  `Bearer ${token}`},
        });
        if(userRes.data){
          setUserData({
            token,
            user: userRes.data,
          });
      }

    };

    checkLoggedIn();
  }, []);

  return(
    <Router>
      <UserContext.Provider value = {{userData, setUserData}}>
        <Switch>
          <Route path= "/" exact component = {Login} />
          <Route path= "/register" component = {Register} />
        </Switch>
          {userData.token ? (
            <Switch>
              <Route path= "/mainpage/:userId" component = {MainPage} />
              <Route path= "/createaccount/:userId" component = {CreateAccountPage} />
              <Route path= "/account/:accountName" component = {AccountPage} />
              <Route path= "/createbudget/:userId" component = {CreateBudgetPage} />
              <Route path= "/budget/:budgetName" component = {BudgetPage} />
              <Route path= "/createtransaction/:userId" component = {CreateTransaction} />
            </Switch>

   

          ) : (


            <>
            </>
          )}
         
      </UserContext.Provider>
    </Router>


  );
}

export default App;
