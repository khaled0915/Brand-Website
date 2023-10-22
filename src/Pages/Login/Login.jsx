import { Link, useLocation, useNavigate } from "react-router-dom";

import './Login.css'
import Navbar from "../Home/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Result } from "postcss";


const Login = () => {

  const [loginSuccess , setLoginSuccess] = useState('');

  const [ loginError, setLoginError] = useState('');

  const location = useLocation();

  const navigate = useNavigate();

  const {logIn } = useContext(AuthContext);





    const handleLogin = e => {
        e.preventDefault();

     const    form = e.target ;

     const email = form.email.value; 
     const password = form.password.value; 

     console.log(email , password);

     setLoginError('');
     setLoginSuccess('');

     // to logIn 

     
    if(!password){
      toast.error('Your password doesnt match ')
      return;
    }
    else if(!email){
      toast.error('Your Email doesnt match')
      return;
    }

    logIn(email ,password)
    .then(result => {
      console.log(result.user);
      
      setLoginSuccess(toast.success('login successfully'))

      navigate(location?.state? location.state : '/')


    })
    .catch(error => {
      console.log(error);
      setLoginError(toast.error(error.message))

    })



     


    }
    return (

        


        <div className="" >


            <Navbar></Navbar>



<div className=" min-h-screen bgImg ">

  <div className="hero-content  flex-col">
    <div className="text-center lg:text-left">

      <h1 className="text-5xl text-black  font-bold">Login now!</h1>
      
     
    </div>


    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl  ">

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold ">Email</span>
          </label>

          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black font-bold ">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-outline btn-success">

          <ToastContainer></ToastContainer>
          
           Login </button>
        </div>


        <p className="mt-5 text-yellow-800 font-bold hover:underline "> New here ? 

        <Link to='/register' className="ml-10 font-bold hover:text-green-500 text-yellow-800"> Register </Link>
        
         </p>




      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;