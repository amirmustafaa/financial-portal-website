import React, {useState, useContext} from 'react';
import { Link, useHistory} from 'react-router-dom';
//import UserContext from "../../context/UserContext"
import Axios from 'axios';
//import Cookies from 'universal-cookie';

function RegisterPage (){
  //const cookies = new Cookies();
  //const { setUserData } = useContext(UserContext);


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
     await Axios.post("http://www.moneyportalpro.com/api/auth/signup", userObject);

    history.push("/");
  };


  return(
    <div className = "login-page">
        <div className="container px-4 py-5 mx-auto login-box">
        <div className="card card0">
            <div className="d-flex flex-lg-row flex-column-reverse">
                <div className="card card1">
                    <div className="row justify-content-center my-auto">
                        <div className="col-md-8 col-10 my-5">
                            <h3 className="mb-5 text-center heading">Welcome to Money Portal Pro</h3>
                            <h6 className="msg-info">Please Create Your Account</h6>
                            <form>
                              <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input name ="username" onChange = {handleChange}  type="text"  placeholder="Username" className="form-control" required/> </div>
                              <div className="form-group"> <label className="form-control-label text-muted">Email</label> <input name ="email" onChange = {handleChange}  type="email"  placeholder="Email" className="form-control" required/> </div>
                              <hr />
                              <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input name = "password" onChange = {handleChange} type="password"  placeholder="Password" className="form-control" required/> </div>
                              <div className="form-group"> <label className="form-control-label text-muted">Confirm Password</label> <input name = "passwordCheck" onChange = {handleChange} type="password"  placeholder="Confirm Password" className="form-control" required/> </div>
                              <div className="row justify-content-center my-3 px-3"> <button onClick= {createUser} className="btn-block btn-color">Create Account</button> </div>
                            </form>
                        </div>
                    </div>
                    <div className="bottom text-center mb-5">
                        <p href="#" className="sm-text mx-auto mb-3">Already Have an Account?<Link to="/"><button className="btn btn-white ml-2">LOGIN</button></Link></p>
                    </div>

                </div>
                <div className="card card2">
                    <div className="my-auto mx-md-5 px-md-5 right">
                        <h3 className="text-white">Track Your Transactions and Budget for the Future.</h3> 
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>


  );
}


export default RegisterPage;
