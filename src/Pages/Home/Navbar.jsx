import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

  const {logOut , user ,  handleGoogleSignIn } = useContext(AuthContext);

  const handleSignOut = () => {
    
    logOut()
    .then()
    .catch()
  }
  const [User , setUser] = useState(null);

  const  handleGoogleBtn = (auth , googleProvider) =>{

    handleGoogleSignIn(auth , googleProvider)
    .then(result => {
      const loggedUser = result.user ;
      console.log(loggedUser);
      setUser(loggedUser);
          
    })
    .catch(error =>{
      console.error(error);
    })
  }


    const navLink = <> 


    <li className="underline hover:no-underline "> <NavLink  to='/' className='hover:text-yellow-400 font-bold text-stone-400 ' > Home </NavLink> </li>
    <li className="underline hover:no-underline "> <NavLink to='/addProduct' className='hover:text-yellow-400 font-bold text-stone-400 ' > Add Product </NavLink> </li>
    <li className="underline hover:no-underline "> <NavLink to='/myCart' className='hover:text-yellow-400 font-bold text-stone-400 ' >  My Cart </NavLink> </li>
    <li className="underline hover:no-underline "> <NavLink to='/login' className='hover:text-yellow-400 font-bold text-stone-400 '> Login </NavLink> </li>
    
    
    
    
     </>


    return (





        <div className="navbar bg-base-100 flex flex-col md:flex-row">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>

    <img className="rounded-full w-15 h-10 lg:w-30 lg:h-20 " src="https://i.ibb.co/GJLXgW4/download.png" alt="" />
    <a className="btn btn-ghost normal-case text-lg">TechPulseHub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

        {navLink}
    
    </ul>
  </div>


  <div className="dropdown navbar-end ">


  <label 
  
  tabIndex={0} className="btn ml-8 ">


<button className=" btn-outline btn-success"> Login  </button>

  </label>


  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box ">
    <li>
      
      
      <a>

      <div>
    {
      user ? 
      <button onClick={handleSignOut} className="btn btn-outline btn-success">SignOut</button>
      :
      <Link to='/login'> <button className="btn btn-accent">Login</button></Link>
    }
    </div>



      </a>
      
      </li>


    <li><a>


    <div>


{
  User 

  ?

  <div>

<button onClick={handleGoogleBtn } className="btn btn-xs btn-success hidden  ml-5"> Login With Google </button>
    <h3 className="text-xs font-bold text-red-800 ">
      User : {User.displayName}
       </h3>
       <img className="rounded-full w[60px] h-[50px] mx-auto " src={User.photoURL} alt="" />



  </div>

  :

  <button className="btn  btn-success" onClick={handleGoogleBtn}> Login with Google </button>



  

  

  

}

</div>
      
      
      
      
      </a>
      
      
      
      </li>


  </ul>



</div>






</div>
    );
};

export default Navbar;