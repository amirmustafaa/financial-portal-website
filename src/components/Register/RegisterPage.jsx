import React from 'react';
import Axios from 'axios';

function RegisterPage (){
  return(
    <div>
    <form class="text-center border border-light p-5" action="#!">

      <p class="h4 mb-4">Sign up</p>


      <input type="text" id="defaultRegisterFormText" class="form-control mb-4" placeholder="Username"/>
      <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"/>


      <input type="password" id="defaultRegisterFormPassword" class="form-control mb-4" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
      <input type="password" id="defaultRegisterPasswordConfirm" class="form-control mb-4" placeholder="Confirm Password"/>

      <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>





</form>
    </div>

  );
}


export default RegisterPage;
