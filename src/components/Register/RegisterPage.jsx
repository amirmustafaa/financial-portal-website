import React, {useState, useContext} from 'react';
import { Link, useHistory} from 'react-router-dom';
import UserContext from "../../context/UserContext"
import Axios from 'axios';
import Cookies from 'universal-cookie';

function RegisterPage (){
  const cookies = new Cookies();
  const { setUserData } = useContext(UserContext);


  let history = useHistory();

  const [state, setState] = useState({
    username:  "",
    email: "",
    password:"",
    passwordCheck:"",


  });

  function handleChange(event){
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  const  createUser = async (event) =>{
    event.preventDefault();
    const userObject = {
      username: state.username,
      email: state.email,
      password: state.password,
      passwordCheck: state.passwordCheck,
      role:["user"]

    };
     await Axios.post("http://localhost:8080/api/auth/signup", userObject);

    //  const loginRes = await  Axios.post("http://localhost:5000/users/login", {
    //   email:state.email,
    //   password:state.password
    // });
    // setUserData({
    //   token: loginRes.data.token,
    //   user: loginRes.data.user
    // });
    //cookies.set("auth-token", loginRes.data.token,{ path: '/' }, {httpOnly:true});
    history.push("/");
  };


  return(
    <div className = "login-page">
        <div class="container px-4 py-5 mx-auto login-box">
        <div class="card card0">
            <div class="d-flex flex-lg-row flex-column-reverse">
                <div class="card card1">
                    <div class="row justify-content-center my-auto">
                        <div class="col-md-8 col-10 my-5">
                            <h3 class="mb-5 text-center heading">Welcome to Money Portal Web</h3>
                            <h6 class="msg-info">Please Create Your Account</h6>
                            <div class="form-group"> <label class="form-control-label text-muted">Username</label> <input name ="username" onChange = {handleChange}  type="text"  placeholder="Username" class="form-control"/> </div>
                            <div class="form-group"> <label class="form-control-label text-muted">Email</label> <input name ="email" onChange = {handleChange}  type="email"  placeholder="Email" class="form-control"/> </div>
                            <div class="form-group"> <label class="form-control-label text-muted">Password</label> <input name = "password" onChange = {handleChange} type="password"  placeholder="Password" class="form-control"/> </div>
                            <div class="form-group"> <label class="form-control-label text-muted">Confirm Password</label> <input name = "passwordCheck" onChange = {handleChange} type="password"  placeholder="Confirm Password" class="form-control"/> </div>
                            <div class="row justify-content-center my-3 px-3"> <button onClick= {createUser} class="btn-block btn-color">Create Account</button> </div>
                        </div>
                    </div>
                    <div class="bottom text-center mb-5">
                        <p href="#" class="sm-text mx-auto mb-3">Already Have an Account?<Link to="/"><button class="btn btn-white ml-2">LOGIN</button></Link></p>
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


export default RegisterPage;
