import { Button } from '@mui/material';
import mainImage from 'assets/main.png';
import google from 'assets/google.svg';
<<<<<<< HEAD
import { GoogleLogin } from '@react-oauth/google';
=======
>>>>>>> d44587b (merged)

function Login() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <a href="/" className="text-white m-4 font-14 back-to-homepage">
        <div className="d-flex align-items-center text-white">
          <span className="material-icons-round md-18 text-white mr-2">{'<-'}</span>
          Back to Homepage
        </div>
      </a>
      <div className="w-1/2 h-screen hidden bg-primary lg:flex lg:justify-center lg:items-center">
        <div className='w-full flex flex-col justify-center items-center'>
          <img src={mainImage} alt="Main_Image" className="object-cover" />
          <hr className='my-16 text-white w-[80%]'></hr>
          <span className='text-5xl text-white'>VAux</span>
        </div>
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-12 text-center">Login to VAux</h1>
<<<<<<< HEAD
        <div className='flex flex-col gap-3 items-center'>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          {/* <Button className='w-full border border-solid border-gray-300 rounded-xmd py-2 px-3 focus:outline-none text-black'>
            <img src={google} alt="google" className='w-6 h-6' />
            <span>Sign In with Google</span>
          </Button> */}
          <div className='text-center my-2'><span className='text-gray-300 '>OR</span></div>
          <div className='w-full'>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">Username</label>
                <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-xmd py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-xmd py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
              </div>
              <button type="submit" className="bg-primary text-white font-semibold rounded-xmd py-2 px-4 w-full">Login</button>
=======
        <div className='flex flex-col gap-3'>
          <Button className='w-full border border-solid border-gray-300 rounded-sm py-2 px-3 focus:outline-none text-black'>
            <img src={google} alt="google" className='w-6 h-6' />
            <span>Sign In with Google</span>
          </Button>
          <div className='text-center my-2'><span className='text-gray-300 '>OR</span></div>
          <div>
            <form action="#" method="POST">
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-600">Username</label>
                <input type="text" id="username" name="username" className="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600">Password</label>
                <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500" autoComplete="off" />
              </div>
              <button type="submit" className="bg-primary text-white font-semibold rounded-sm py-2 px-4 w-full">Login</button>
>>>>>>> d44587b (merged)
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login