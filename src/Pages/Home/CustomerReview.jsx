import { FaStar } from 'react-icons/fa';

const customerReviewsData = [
    {
        id: 1,
        author: 'John Doe',
        rating: 5,
        comment: 'Great product, highly recommended!',
        profileImage: 'https://i.ibb.co/C8tkjV5/icons8-account-50.png', 
      },
      {
        id: 2,
        author: 'Jane Smith',
        rating: 4,
        comment: 'I love this brand and their products.',
        profileImage: 'https://i.ibb.co/fpH6tQJ/icons8-female-profile-50.png', 
      },
      {
        id: 3,
        author: 'Tony Starc',
        rating: 3,
        comment: 'Decent products but could use some improvements.',
        profileImage: 'https://i.ibb.co/C8tkjV5/icons8-account-50.png', 

      },
      {
        id: 4,
    author: 'Bob Wilson',
    rating: 5,
    comment: 'Outstanding quality and service!',
    profileImage: 'https://i.ibb.co/C8tkjV5/icons8-account-50.png',
      },
      {
        id: 5,
    author: 'Eva Brown',
    rating: 2,
    comment: 'Not satisfied with the product. Needs more variety.',
    profileImage: 'https://i.ibb.co/fpH6tQJ/icons8-female-profile-50.png',
      },
      {
        id: 6,
    author: 'David Lee',
    rating: 4,
    comment: 'Impressed by the brand. Will shop again.',
    profileImage: 'https://i.ibb.co/C8tkjV5/icons8-account-50.png',
      }
    // Add more review objects here
  ];


const CustomerReview = () => {


    


    return (

        <>

<div className='rounded-lg mt-20 flex flex-col md:flex-row'>


    <div>
    <img className='w-[550px] h-[450px]' src="https://i.ibb.co/gPSYs85/undraw-reviews-lp8w.png" alt="" />
    </div>

    <div>


    {
      
      customerReviewsData.map((review) => (
        <div key={review.id} className="border p-4 my-4 flex items-center">
          <img
            src={review.profileImage}
            alt={`${review.author}'s Profile`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <div className="text-lg font-bold">{review.author}</div>
            <div 
            
            className="text-yellow-500 flex mt-10">

              {Array.from({ length: review.rating }, (_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 fill-current text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2c-.2 0-.4.08-.54.26L9.22 7.5l-5.16.47a1 1 0 0 0-.55 1.74l4.18 4.08-1 .42a1 1 0 0 0-.46 1.37l3.63 7.46 7.97-7.21a1 1 0 0 0 .29-1.38l-1.93-4.96 6.33-4.25a1 1 0 0 0 .34-1.37 1 1 0 0 0-1.36-.34L12 2zm0 15.38V4.06l2.35 5.98a1 1 0 0 0 .6.54l6.84 2.5-5.23 4.73a1 1 0 0 0-.29 1.38l1.93 4.96-7.15-3.84a1 1 0 0 0-.92 0l-7.15 3.84 1.93-4.96a1 1 0 0 0-.29-1.38l-5.23-4.73 6.84-2.5a1 1 0 0 0 .6-.54L12 4.06v13.32z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="ml-4">{review.comment}</p>
        </div>
      )
      )
      }

    </div>

      

    </div>
        
        
         </>

    

    
    );
    

    




};

export default CustomerReview;