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

  const [nameState, setNameState] = useState();

  function handleChange(event){
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value
    });
  }

  function handleChange2(event){
    const value = event.target.value;
    setNameState({
      ...nameState,
      [event.target.name]: value
    });
  }

  const  handleClick = async (event) =>{
    event.preventDefault();

    const userObject = {
      username: state.username,
      password: state.password,
    };

    const loginRes = await Axios.post("https://www.moneyportalpro.com/api/auth/signin", userObject).catch(function (error) {
      if (error.response) {
        alert("Username or Password Incorrect");
      }
    });

      if(loginRes){
      setUserData({
        token: loginRes.data.accessToken,
        user: loginRes.data.username
      })
      cookies.set("auth-token", loginRes.data.accessToken,{ path: '/' }, {httpOnly:true});
      history.replace("/mainpage/" + loginRes.data.username)
    }

  };

  const createRole = async (event) =>{
    event.preventDefault();


    await Axios.post("https://www.moneyportalpro.com/api/data/createroles", nameState);
     
  }
  return (
    <div className = "login-page">
        <div className="container px-4 py-5 mx-auto login-box">
        <div className="card card0">
            <div className="d-flex flex-lg-row flex-column-reverse">
                <div className="card card1">
                    <div className="row justify-content-center my-auto">
                        <div className="col-md-8 col-10 my-5">
                            <h3 className="mb-5 text-center heading">Welcome to Money Portal Pro</h3>
                            <h6 className="msg-info">Please login to your account</h6>
                            <form>
                              <div className="form-group"> <label className="form-control-label text-muted">Username</label> <input name ="username" onChange = {handleChange}  type="text"  placeholder="Username" className="form-control" required/> </div>
                              <div className="form-group"> <label className="form-control-label text-muted">Password</label> <input name = "password" onChange = {handleChange} type="password"  placeholder="Password" className="form-control" required/> </div>
                              <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick= {handleClick} className="btn-block btn-color">Login to Portal</button> </div>
                            </form>
                        </div>
                    </div>
                    <div className="bottom text-center mb-5">
                        <p href="#" className="sm-text mx-auto mb-3">Don't have an account?<Link to="/register"><button className="btn btn-white ml-2">Sign Up</button></Link></p>
                    </div>
                </div>
                <div className="card card2">
                    <div className="my-auto mx-md-5 px-md-5 right">
                        <h3 className="text-white">Track Your Transactions and Budget for the Future.</h3> 
                    </div>
                    <div className="form-group"> <label className="form-control-label text-muted"></label> <input name = "name" onChange = {handleChange2} type="text"   className="form-control" required/> </div>
                    <div className="row justify-content-center my-3 px-3"> <button type = "submit" onClick= {createRole} className="btn-block btn-color">test</button> </div>
                </div>
            </div>
        </div>
      </div>
  </div>
  );
}

export default LoginPage;
