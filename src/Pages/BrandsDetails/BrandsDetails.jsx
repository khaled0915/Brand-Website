import { Link, useLoaderData,  } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useState } from "react";



const BrandsDetails = () => {


    

    // const {_id} = useParams();
    // console.log(_id);

    // const params = useParams()
    // console.log(params);

    const loadedDetails = useLoaderData();

    // const [brandDetails , setBrandDetils] = useState(loadedDetails);




    // const { _id , name , image , brandName ,type , price , desc   } = brandDetails;

    // console.log(brandDetails);


    // const [brands , setBrands ] = useState(brandDetails);

    

    console.log(loadedDetails);
    // console.log(brandDetails);


//     useEffect( ()=>{

//         const matchBrand = brandDetails.find( brandName => brandName.brandName == brandName    )

// setBrands(matchBrand);






//     } , [brandDetails] )

//     console.log(brands);
    

    


    return (
        <div>

            <Navbar></Navbar>

            <h2> details page </h2>
            <h3 className="text-5xl font-bold"> {loadedDetails.length}  </h3>

            

            <div>
                { 

loadedDetails &&
                 

loadedDetails.map( brandDetail =>

                       

                        <div key={brandDetail._id} className="card gap-10 m-10 flex-col md:flex-row card-side bg-base-100 shadow-xl">

  <figure className="flex-1">
    
    <img className="w-[400px] h-[300px] rounded-lg " src={ brandDetail.image} alt="Movie"/>
    
    </figure>

  <div className="card-body flex-1 ">


    <h2 className="card-title font-bold text-2xl text-orange-700  "> <span className="mr-3 font-bold text-green-400 underline"> Product_Name : </span> {brandDetail.name} </h2>


    
    <p className="text-xl font-semibold text-cyan-400"> Brand : {brandDetail.brandName} </p>

    <p> <span className="font-bold text-xl text-gray-500"> Price : </span> <span className="font-bold text-xl text-red-800"> {brandDetail.price}  </span></p>
    <p> <span className="text-lg font-bold text-violet-400">  Brand Type : </span>  <span className="font-bold hover:underline text-yellow-600"> {brandDetail.type} </span>  </p>

    

    <p className="mt-5 "> <span className="text-xl mr-4 font-bold underline "> Description: </span> <span className="font-normal text-gray-100 text-lg"> {brandDetail.desc} </span> </p>

    <div className="card-actions justify-center mt-10">

        <button className="btn btn-accent mr-10"> Details </button>


      <button className="btn btn-primary"> Update </button>


    </div>
  </div>
</div>


                        
                        
                        
                        )


}
:

                
                
                 <div className="bg-red-500 min-h-screen items-center  justify-center"> 




                    <h3 className="text-center text-4xl  font-bold text-cyan-200 "> Sorry , No product available here at the Moment</h3>

                    <p  className="text-center text-4xl mt-20 font-bold text-cyan-200"> You can explore the other brands which is available </p>


                 <div className="text-center mt-20"> 


                    <Link to='/'>    <button className="btn btn-outline btn-success font-bold text-3xl  "> Continue </button> </Link>
                 </div>



                    
                    
                    
                    
                     </div>


            </div>

            

            

            

            
           


            
        </div>
    );
};

export default BrandsDetails;