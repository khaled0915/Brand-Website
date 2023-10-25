import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo";
import Navbar from "../Home/Navbar";

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {



    const [ showProduct , setShowProduct ] = useState({});


    

    const {id} = useParams();
    console.log(id);

    const params  = useParams();
    console.log(params);

    const ProductDetails = useLoaderData();

    
    console.log(ProductDetails);

    const [addedProduct , setAddedProduct] = useState({

        name : 'name',
        price : 'price'
    });


    const HandleAddToCart = (id) => {

        fetch(`https://brand-server-rho.vercel.app/${addedProduct.id}` , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json' 
            },
            body : JSON.stringify(addedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('you successfully added the product')

        })
        











    }

    useEffect( ()=> {



        const SelectedProduct =  ProductDetails.find( product => product._id === id )

        if(SelectedProduct){
            setShowProduct(SelectedProduct);
        }









    } , [id , ProductDetails] )
    console.log(showProduct);



    return (

        <div>
            <Navbar></Navbar>

      <h3 className="text-2xl text-center  underline font-semibold mb-4">This is the product detail page</h3>
      <div className="bg-white rounded-lg shadow-lg p-4">
        {showProduct ? (

<div className="card  bg-base-100 shadow-xl">

<figure><img className="mt-10 w-[200px] h-[200px] rounded-lg" src={showProduct.image} alt="Shoes" /></figure>
<div className="card-body">


  <h2 className="card-title mx-auto mb-5 font-bold text-cyan-800 underline">

    {showProduct.name}

    
  </h2>

  <p className="text-center ">
            <span className="font-bold text-xl text-red-500 underline mr-5">Price :</span>
            <span className="font-bold text-xl text-cyan-600">{showProduct.price}</span>
          </p>


          <div className="flex underline flex-col  text-lg justify-between items-center mt-5 gap-10"> 

          <p>
            <span className="font-bold text-violet-400">Brand Type :</span>
            <span className="font-bold hover:underline text-yellow-600">{showProduct.type}</span>
          </p>

          <p className=" font-semibold text-cyan-400">Brand : {showProduct.brandName}</p>
            
             </div>

  <p className="text-center font-bold text-3xl underline mt-3 text-yellow-500 ">  Description   </p> 

  <p className="text-blue-500 text-center">

   
    
    {showProduct.desc}</p>


  <div className="card-actions justify-end">


{/* add to cart button  */}
   

    <button onClick={ () =>  HandleAddToCart(id)} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg badge badge-outline mx-auto mt-10 bg-orange-600 font-bold text-white p-3 hover:text-blue-600 ">Add to Cart</button>

   

  </div>
</div>
</div>
          
        )
         : (
          <p className="text-red-600">Product not found</p>
        )}
      </div>
    </div>
    );
};

export default ProductDetail;