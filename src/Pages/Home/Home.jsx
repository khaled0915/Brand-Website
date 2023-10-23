import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import BrandsCard from "./BrandsCard";


const Home = () => {



    const brands = useLoaderData();
    console.log(brands);




    return (
        <div>
            <Navbar></Navbar>

          

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

                {/* {
                    brands.map( brand => 

                        <div key={brand.id} className="card  bg-base-100 shadow-xl">
  <figure><img className="w-[500px] h-[300px] rounded-full" src={brand.brandImage} alt="Shoes" /></figure>
  <div className="card-body">

  



<div className="lg:tooltip" data-tip="Go to Details">

    <Link to={`/brands/${id}`}> <a className="link link-secondary"> 
   
   <h2 className="font-bold text-xl hover:uppercase  text-orange-600 text-center ">
      {brand.brandName}
  
    </h2>
   </a> </Link>


</div>
  
    
  </div>
</div>
                        
                        
                        
                        
                        )
                } */}
            </div>



            <Footer></Footer>


            
        </div>
    );
};

export default Home;