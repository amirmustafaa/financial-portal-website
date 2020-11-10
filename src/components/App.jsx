import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserContext from "../context/UserContext.js";
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Profile from './Profile/Profile.jsx';
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

        const userRes = await Axios.get("http://localhost:8080/api/test/user", {
          headers: { "Authorization":  `Bearer ${token}`},
        });
        setUserData({
          token,
          user: userRes.data,
        });

    };

    checkLoggedIn();
  }, []);

  return(
    <Router>
      <UserContext.Provider value = {{userData, setUserData}}>
        <Switch>
          <Route path= "/" exact component = {Login} />
          <Route path= "/register" component = {Register} />
          <Route path= "/profile/:userId" component = {Profile} />
        </Switch>
      </UserContext.Provider>
    </Router>


  );
}

export default App;
