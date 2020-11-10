import React, {useState, useContext} from 'react';
import { useHistory} from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Axios from 'axios';
import Cookies from 'universal-cookie';

function LoginPage(){
  const cookies = new Cookies();
  const {setUserData} = useContext(UserContext);

  let history = useHistory();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  function handleChange(event){
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const  handleClick = async (event) =>{
    event.preventDefault();

    const userObject = {
      username: state.username,
      password: state.password,
    };

    const loginRes = await Axios.post("http://localhost:8080/api/auth/signin", userObject);

     setUserData({
       token: loginRes.data.accessToken,
       user: loginRes.data
     })
     console.log(loginRes.data.accessToken);
    cookies.set("auth-token", loginRes.data.accessToken,{ path: '/' }, {httpOnly:true});
    history.push("/profile/" + loginRes.data.id)

  };
  return (
    <div class="login-page">
        <div class="card login-card">
            <div class="card-body">
                <h3 class="text-center text-white font-weight-light mb-4">LOG IN</h3>
                <form>
                    <div class="form-group">
                        <input name ="username" onChange = {handleChange} value = {state.username} type="text" placeholder="Username" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <input name = "password" onChange = {handleChange} value = {state.password} type="text" placeholder="Password" class="form-control"/>
                    </div>
                    <input onClick= {handleClick} type="submit" value="Login" class="btn btn-danger btn-block mb-3"/>
                </form>
                    <p class="text-white text-center font-weight-light">Sign Up</p>

            </div>
        </div>
    </div>
  );
}
//
//
export default LoginPage;
