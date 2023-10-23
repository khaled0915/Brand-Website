import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="  " >




<div 

style={{backgroundImage : 'url(https://i.ibb.co/tZWhdyH/error-404-6052476-1280.png)'}}


className="hero min-h-screen bg-base-200">


  <div className="hero-content text-center">


    <div className="">

      <h1 className="text-7xl font-bold text-red-400"> Oops!!! </h1>
      <p className="py-6 font-semibold text-black text-2xl"> Page not Found </p>

      <Link to='/'> <button className="btn btn-warning"> Go to Home  </button> </Link>

    </div>
  </div>
</div>



            {/* <img className="min-w-screen min-h-screen" src="https://i.ibb.co/WVBxQb8/undraw-Page-not-found-re-e9o6.png" alt="" /> */}

            {/* <h1 className="text-5xl text-center font-bold   items-center flex text-black justify-center"> 404 Error  </h1>


            <p className="text-center mt-10 text-4xl font-bold text-black "> 

                OoPS!!!
                
                 </p>

                 <p className="text-center mt-10 text-4xl font-bold text-red-700"> 
                    
                    Page Not Found  </p> */}

            



            
        </div>
    );
};

export default ErrorPage;