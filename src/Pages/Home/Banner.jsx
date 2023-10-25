import { Link } from "react-router-dom";




const Banner = () => {
    return (
        <div >




{/* <div className="card flex lg:card-side bg-base-100 shadow-xl">
  <div className="flex items-center justify-center lg:w-1/2">
    <img className="flex-1" src="https://i.ibb.co/cghLzTq/onur-binay-Rp-PMkq-TTTg-unsplash.jpg" alt="Album" />
  </div>


  <div 

style={{backgroundImage: 'url(https://i.ibb.co/LxQFLcz/black-and-yellow-gadget-background.jpg)',

backgroundSize: 'cover',
backgroundBlendMode : 'overlay'

}}
  
  
  className="card-body  flex-1 p-4 items-center  bg-orange-200 ">



    <h2 className="font-bold text-3xl  text-white card-title">Your One-Stop Tech Store!</h2>
    <p className="text-green-100 font-bold mt-20 text-center ">Discover a wide range of high-quality products from renowned brands like Apple, Samsung, Google, Xiaomi, Sony, and more. We've carefully curated a collection of devices that meet the highest standards of performance and design.</p>
    <div className="card-actions justify-end">
      <Link to='/register'> <button className="btn btn-success">Get Started</button> </Link>
    </div>
  </div>
</div> */}


<div 

style={{

  backgroundImage : 'url(https://i.ibb.co/cghLzTq/onur-binay-Rp-PMkq-TTTg-unsplash.jpg)',

  backgroundRepeat : 'no-repeat',

  backgroundBlendMode : 'lighten',
  backgroundSize : 'cover'
}}


className="relative  text-white py-16 px-4">
      <div className="absolute inset-0 "></div>
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Discover the Perfect Brands for You
        </h1>
        <p className="text-lg mb-8">
          Explore a wide range of premium brands and products.
        </p>
        <Link to='/register' > <a
          href='' // Replace with your actual link
          className="bg-white text-gray-900 hover:bg-gray-200 inline-block px-6 py-3 font-semibold rounded-full transition duration-300"
        >
          Get Started
        </a> </Link>
      </div>
    </div>





            
        </div>









    );
};

export default Banner;