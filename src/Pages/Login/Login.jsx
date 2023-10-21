import { Link } from "react-router-dom";

import './Login.css'
import Navbar from "../Home/Navbar";


const Login = () => {




    const handleLogin = e => {
        e.preventDefault();

     const    form = e.target ;

     const email = form.email.value; 
     const password = form.password.value; 

     console.log(email , password);

     


    }
    return (

        


        <div className="" >


            <Navbar></Navbar>



<div className=" min-h-screen bgImg ">

  <div className="hero-content  flex-col">
    <div className="text-center lg:text-left">

      <h1 className="text-5xl text-white  font-bold">Login now!</h1>
      
     
    </div>


    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl  ">

      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>

          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-outline btn-success"> Login </button>
        </div>


        <p className="mt-5 text-white font-bold hover:underline "> New here ? 

        <Link to='/register' className="ml-10 font-bold hover:text-green-500 text-white"> Register </Link>
        
         </p>




      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Login;