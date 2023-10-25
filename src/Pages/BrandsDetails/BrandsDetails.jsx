import { Link, useLoaderData,  } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useState } from "react";



const BrandsDetails = () => {







    

   

    const loadedDetails = useLoaderData();


    // const {_id , brandName } = loadedDetails ;
    // console.log(_id , brandName);
    console.log(loadedDetails);

    
    

    

    // const {id  } = loadedDetails ;

    // console.log(id);

   






  

    

    console.log(loadedDetails);
    // console.log(brandDetails);



    

    


    return (
        <div>

            <Navbar></Navbar>

            <h2> details page </h2>
            <h3 className="text-5xl font-bold"> {loadedDetails.length}  </h3>


            {/*  slider */}


            <div className="carousel mb-10 w-full">

    <div id="slide1" className="carousel-item relative w-full">


      <img src="https://i.ibb.co/0yZpW9Y/bc384dbc.jpg" className="w-[700px] mx-auto h-[600px]" />


      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
      </div>
    </div> 


    <div id="slide2" className="carousel-item relative w-full">
        
      <img src="https://i.ibb.co/NnFRHsQ/image-processing20200628-10734-r56h59.jpg" className="w-[700px] mx-auto h-[600px]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
      </div>
    </div> 

    <div id="slide3" className="carousel-item relative w-full">
      <img src="https://i.ibb.co/w6W6X3y/image-processing20220105-9869-1bg0gmm.jpg" className="w-[700px] mx-auto h-[600px]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
      </div>
    </div> 

    
  </div>

            


<div>


        
        <h1 className="mt-15 mb-10  font-bold text-6xl underline text-center text-green-400"> Available Products List  </h1>
    
        

    

  {

  
  loadedDetails && loadedDetails.length > 0

  
  
  ?

  
  
  
  ( 

    


    loadedDetails.map((brandDetail) => (

        

      <div 

      
      
      key={brandDetail._id} className="card gap-10 m-10 flex-col md:flex-row card-side bg-base-100 shadow-xl">


        <figure className="flex-1">

          <img className="w-[400px] h-[300px] lg:w-[300px] lg:h-[250px] rounded-lg" src={brandDetail.image} alt="Product" />
        </figure>

        <div className="card-body flex-1">

          <h2 className="card-title font-bold  text-lg lg:text-2xl text-orange-700">

            <span className="mr-3 font-bold text-green-400 underline">Product_Name:

            </span>

            {brandDetail.name}

          </h2>
          <p className="text-xl font-semibold text-cyan-400">Brand : {brandDetail.brandName}</p>
          <p>
            <span className="font-bold text-xl text-gray-500">Price :</span>
            <span className="font-bold text-xl text-red-800">{brandDetail.price}</span>
          </p>
          <p>
            <span className="text-lg font-bold text-violet-400">Brand Type :</span>
            <span className="font-bold hover:underline text-yellow-600">{brandDetail.type}</span>
          </p>
         
          <div className="card-actions justify-center mt-10">


            <Link to={`/product/${brandDetail._id}`}> <button className="btn btn-accent mr-10">Details</button> </Link>


             <button className="btn btn-primary">Update</button> 
          </div>
        </div>
      </div>
    ))


  ) 
  
  :
   (
    
    <div className="bg-red-500 min-h-screen items-center justify-center">


      <h3 className="text-center text-4xl font-bold text-cyan-200">Sorry, No product available here at the Moment</h3>
      <p className="text-center text-4xl mt-20 font-bold text-cyan-200">
        You can explore the other brands which are available
      </p>
      <div className="text-center mt-20">


        <Link to="/">
          <button className="btn btn-outline btn-success font-bold text-3xl">Continue</button>
        </Link>
      </div>
    </div>
  )
  
  }
</div>


            

            

            

            
           


            
        </div>
    );
};

export default BrandsDetails;