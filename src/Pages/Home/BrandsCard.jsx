import { Link } from "react-router-dom";

const BrandsCard = ({brand}) => {


    const {id , brandImage , brandName} = brand ;

    


    return (
        <div>

<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={brandImage} alt="Shoes" className="rounded-xl w-[300px] h-[200px]" />
  </figure>
  <div className="card-body items-center text-center">

  <Link to={`/brands/${brandName}`}> <a className="link link-secondary"> 
   
   <h2 className="font-bold text-xl hover:uppercase  text-orange-600 text-center ">
      {brand.brandName}
  
    </h2>
   </a> </Link>


    
  </div>
</div>
            
        </div>
    );
};

export default BrandsCard;