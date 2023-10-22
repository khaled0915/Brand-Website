
const AddProduct = () => {



    const handleAddProduct = e => {

        e.preventDefault();


        const form = e.target ;

        const name = form.name.value ; 
        const image = form.image.value ; 
        const brandName = form.brandName.value ; 
        const type = form.type.value ; 
        const price = form.price.value ; 
        const desc = form.desc.value ; 
        const rating = form.rating.value ; 

        const productDetails = {

            name , 
            image ,
            brandName ,
            type ,
            price ,
            desc ,
            rating 




        } 

        console.log(productDetails);

        form.reset();

        // send data to the server 

        fetch('http://localhost:5000/product' , {
            method : 'POST' ,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(productDetails)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })





    }

    






    return (
        <div>

            <h3 className="mt-10 mb-10  bg-green-400 underline text-3xl font=bold text-center text-orange-600 "> Add Your desired Product in the Form given below </h3>


            <div className=" ">

  <div className="hero-content flex-col ">

    <div className="text-center lg:text-left">

      <h1 className="text-5xl font-bold underline text-pink-600 mb-10"> Add Product </h1>
    
    </div>

    <div className=" w-full  shadow-2xl ">
        
      <form onSubmit={handleAddProduct} className="">

        {/* name */}

        <div className="form-control">

          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="product name" name='name' className="input input-bordered" required />

        </div>


        {/* image */}


        <div className="form-control">
          <label className="label">
            <span className="label-text">image</span>
          </label>
          <input type="text" name='image' placeholder="img URL" className="input input-bordered" required />
          <label className="label">
            
          </label>
        </div>


        {/* brand name */}


        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" name='brandName' placeholder="brand Name" className="input input-bordered" required />
          <label className="label">
            
          </label>
        </div>





{/* type */} 


<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Pick the Type of products </span>
    <span className="label-text-alt"></span>
  </label>
  <select name="type" className="select select-bordered">
    <option className="underline text-orange-400" disabled selected>Pick one</option>
    <option>Phone</option>
    <option>Computer</option>
    <option>headPhone</option>
    <option> Mouse </option>
    <option> Watches </option>
  </select>
  
</div>


{/* Price */}


<div className="form-control">
          <label className="label">
            <span className="label-text"> Price </span>
          </label>
          <input type="text" name='price' placeholder="price" className="input input-bordered" required />
          <label className="label">
            
          </label>
        </div>


        {/* short desc */}

        <div className="form-control">
          <label className="label">
            <span className="label-text"> Short description </span>
          </label>
          <input type="text" name='desc' placeholder="short desc" className="input input-bordered" required />
          <label className="label">
            
          </label>
        </div>


        {/* rating */}

        <div className="rating">

  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
</div>
















        <div className="form-control mt-6">
          <button type="submit" className="btn btn-outline btn-warning" > ADD </button>
        </div>
      </form>
    </div>
  </div>
</div>



            
        </div>
    );
};

export default AddProduct;