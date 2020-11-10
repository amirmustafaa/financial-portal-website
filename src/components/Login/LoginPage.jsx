import React, {useState, useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
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
     console.log(loginRes.data.roles);
    cookies.set("auth-token", loginRes.data.accessToken,{ path: '/' }, {httpOnly:true});
    history.push("/profile/" + loginRes.data.id)

  };
  return (
    <div className = "login-page">
        <div class="container px-4 py-5 mx-auto login-box">
        <div class="card card0">
            <div class="d-flex flex-lg-row flex-column-reverse">
                <div class="card card1">
                    <div class="row justify-content-center my-auto">
                        <div class="col-md-8 col-10 my-5">
                            <h3 class="mb-5 text-center heading">Welcome to Money Portal Web</h3>
                            <h6 class="msg-info">Please login to your account</h6>
                            <div class="form-group"> <label class="form-control-label text-muted">Username</label> <input name ="username" onChange = {handleChange}  type="text"  placeholder="Username" class="form-control"/> </div>
                            <div class="form-group"> <label class="form-control-label text-muted">Password</label> <input name = "password" onChange = {handleChange} type="password"  placeholder="Password" class="form-control"/> </div>
                            <div class="row justify-content-center my-3 px-3"> <button onClick= {handleClick} class="btn-block btn-color">Login to Portal</button> </div>
                        </div>
                    </div>
                    <div class="bottom text-center mb-5">
                        <p href="#" class="sm-text mx-auto mb-3">Don't have an account?<Link to="/register"><button class="btn btn-white ml-2">Create new</button></Link></p>
                    </div>
                </div>
                <div class="card card2">
                    <div class="my-auto mx-md-5 px-md-5 right">
                        <h3 class="text-white">We are more than just a company</h3> <small class="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
  );
}
//
//
export default LoginPage;
