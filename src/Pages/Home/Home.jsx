import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BrandsCard from "./BrandsCard";
import { useState } from "react";
import CustomerReview from "./CustomerReview";
import Contact from "./Contact";




const Home = () => {



    const brands = useLoaderData();
    console.log(brands);

    const [isDarkMode , setDarkMode] = useState(false);

    const toggleDarkMode = () =>{
        setDarkMode(!isDarkMode);
    }




    return (


        <> 

<Navbar></Navbar>

       

<div className=

// {`bg-${isDarkMode ? 'dark' : 'light'}-bg text-${isDarkMode ? 'dark' : 'light'}-text`}

{
    `

${

            
isDarkMode ? 

'bg-black text-white'




: 

'bg-white text-black'}`

} 



>



{/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleDarkMode}> Dark Mode 
 </button> */}

<button
          className={` btn btn-outline btn-info hover:bg-orange-700 text-white font-bold py-2 px-4 rounded`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>




 





<Banner></Banner>

<h2 className="font-bold mt-10  text-4xl text-center underline text-red-500">Our  Brands collection </h2>



<div className="grid mt-10 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

    {
        brands.map(brand =>
             <BrandsCard 
             key={brand.id}
              brand={brand} >

              </BrandsCard>)
    }

    
</div>

<div>

    <h1 className="text-4xl text-center mt-20 underline  text-pink-700"> Review Section  </h1>
    <CustomerReview>  </CustomerReview>

</div>


<div className="mt-10  ">
    <Contact></Contact>
</div>





<Footer></Footer>



</div>
        
         </>

       
    );
};

export default Home;