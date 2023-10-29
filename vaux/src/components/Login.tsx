import google from 'assets/google.svg';
import { useGoogleLogin } from '@react-oauth/google';
import signin from 'assets/signin.svg';
import { useState } from 'react';
import { login } from 'actions/APIActions';
import { useNavigate } from 'react-router';

function Login() {

  return (
    <div className="bg-background flex justify-center items-center h-[100%]">
      <div className="w-[60%] h-[100%] hidden lg:flex lg:justify-center lg:items-center">
        <a href="/" className="text-white m-4 font-14 back-to-homepage">
          <div className="d-flex align-items-center text-black font-semibold">
            <span className="material-icons-round md-18 text-black mr-2">{'<-'}</span>
            Back to Homepage
          </div>
        </a>
        <img src={signin} alt="login" />
      </div>
      <LoginContent />
    </div>
  )
}

function LoginContent() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (event: any) => {
    event.preventDefault();
    const data:any = await login({ email: email, password: password });
    if (data.Token) {
      console.log(data.Token);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      console.log(credentialResponse);
    },
    onError: errorResponse => console.log(errorResponse),
  });

	const routeChange = (path: string, params?: any) => {
		navigate(path, { state: params });
	}

  return (
    <div className="lg:py-12 lg:px-20 md:p-32 sm:p-20 p-8 w-full lg:w-[40%]">
      <h1 className="text-3xl font-semibold mb-12 sm:mb-16 text-center">Login to VAux</h1>
      <div className='flex flex-col gap-3 items-center'>
        {/* <GoogleLogin
          onSuccess={credentialResponse => {

          }}
          onError={() => {
            console.log('Login Failed');
          }}
        /> */}
        <button className='w-full flex justify-center border border-solid border-indigo rounded-xmd py-2 px-3 focus:outline-none text-black hover:bg-button-hover' onClick={() => googleLogin()}>
          <img src={google} alt="google" className='w-6 h-6 mx-4' />
          <span>Sign In with Google</span>
        </button>
        <div className='text-center'><span className='text-indigo text-xl font-normal'>OR</span></div>
        <div className='w-full'>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <input type="text" id="email" name="email" placeholder='Email' value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border border-indigo py-2 px-3 focus:outline-none focus:border-primary bg-transparent rounded-xmd" autoComplete="off" />
            </div>
            <div className="mb-6">
              <input type="password" id="password" name="password" placeholder='Password' value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-indigo py-2 px-3 focus:outline-none focus:border-primary bg-transparent rounded-xmd" autoComplete="off" />
            </div>
            <div className='mb-6'>
              <button type="submit" className="bg-primary text-white font-medium rounded-xmd py-2 px-4 w-full">Login</button>
            </div>
          </form>
        </div>
      </div>
      <div className='border-t border-t-indigo mb-8'></div>
      <div className=''>
        <button type="submit" className="border border-primary font-medium py-2 px-4 w-full hover:bg-button-hover rounded-xmd"
          onClick={() => routeChange('/signup')}>CREATE AN ACCOUNT</button>
      </div>
    </div>
  )
}

export default Login