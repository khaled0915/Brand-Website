import { Link } from "react-router-dom";




const Banner = () => {
    return (
        <div>




<div className="card flex lg:card-side bg-base-100 shadow-xl">
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
</div>





            
        </div>
    );
};

export default Banner;