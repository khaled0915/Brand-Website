
import { RiCustomerService2Fill} from 'react-icons/Ri';
const Contact = () => {
    return (


        <div className="py-16  m-10   bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center underline text-lime-500 mb-6">Contact with Us</h2>
          <p className="text-gray-600 text-center mb-8">
            Have questions, feedback, or need assistance? Contact us through the
            options below.
          </p>

          <div className="grid m-5 grid-cols-1 md:grid-cols-2 gap-8">
            <div>

             <div className='flex justify-center items-center gap-5 '>
             <h3 className="text-xl font-semibold mb-4 text-sky-500 ">Customer Support</h3>

<span>  <RiCustomerService2Fill></RiCustomerService2Fill> </span>
             </div>


              <p className="text-pink-700">
                If you have any questions or need assistance, our customer support
                team is ready to help. Feel free to reach out to us.
              </p>
              <p className="mt-4 text-pink-700">
                <strong>Email:</strong> support@example.com
              </p>
            </div>


            <div>
              <h3 className="text-xl font-semibold mb-4 text-sky-500">Business Inquiries</h3>
              <p className="text-amber-600 ">
                For business-related inquiries or partnerships, please contact us
                through the following information.
              </p>
              <p className="mt-4 text-amber-600">
                <strong>Email:</strong> business@example.com
              </p>

            </div>



            <div className="text-white mx-auto mt-10 ">
                <h2 className="font-bold text-orange-600 ml-5"> Give us Review </h2>
            <textarea className="textarea textarea-accent" placeholder="Review"></textarea>
            </div>



          </div>
        </div>
      </div>
    );
};

export default Contact;