import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";


const Register = () => {


    const handleRegister = e => {
        e.preventDefault();

     const    form = e.target ;

     const name = form.name.value; 
     const email = form.email.value; 
     const password = form.password.value; 

     console.log(name , email , password);

     


    }



    return (


        <div 
        style={{backgroundImage: 'url(https://i.ibb.co/nspq4N1/julian-o-hayon-Bs-zng-H79-Ds-unsplash.jpg)',

        backgroundSize: 'cover'
    
    }}
    >

            <Navbar></Navbar>



<div className=" min-h-screen  ">

  <div className="hero-content  flex-col">
    <div className="text-center lg:text-left">

      <h1 className="text-5xl text-white font-extrabold"> Register </h1>
      
     
    </div>


    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl  ">

      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-700 font-bold">Your Name</span>
          </label>

          <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text  text-red-700 font-bold">Email</span>
          </label>

          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-red-700 font-bold">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
           
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-accent">Register</button>
        </div>


        <p className="mt-5 text-cyan-800 font-bold hover:underline "> already register ? 

        <Link to='/login' className="ml-10 font-bold hover:text-green-500 text-yellow-400"> login </Link>
        
         </p>




      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Register;