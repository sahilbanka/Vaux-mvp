import google from 'assets/google.svg';
import { useGoogleLogin } from '@react-oauth/google';
import signup from 'assets/signup.svg';
import { useState } from 'react';
import { userSignup } from 'actions/APIActions';
import { useNavigate } from 'react-router';
import { VAUX_LOGIN_RESPONSE } from 'utils/APIResponseTypes';


function SignUp() {

    return (
        <div className="bg-background flex justify-center items-center h-[100%] overflow-auto">
            <div className="w-[60%] h-[100%] hidden lg:flex lg:justify-center lg:items-center">
                <a href="/" className="text-white m-4 font-14 back-to-homepage">
                    <div className="d-flex align-items-center text-black font-semibold">
                        <span className="material-icons-round md-18 text-black mr-2">{'<-'}</span>
                        Back to Homepage
                    </div>
                </a>
                <img src={signup} alt="signup" />
            </div>
            <SignUpContent />
        </div>
    )
}

function SignUpContent() {

    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState(
        {
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            privilege_type: "free"
        }
    );

    const handleSignup = async (event?: any, fromGoogle?: boolean, gToken?: string | undefined) => {
        if (!fromGoogle) {
            event.preventDefault();
        }
        const data: any = await userSignup(fromGoogle ? {token: gToken} : signupForm);
        if (data?.Token) {
            console.log(data?.Token);
          }
    };

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            handleSignup(null, true, tokenResponse?.access_token)
        },
        onError: errorResponse => console.log(errorResponse),
    });

    const routeChange = (path: string, params?: any) => {
        navigate(path, { state: params });
    }

    return (
        <div className="lg:py-12 lg:px-20 md:p-32 sm:p-20 p-8 w-full lg:w-[40%]">
            <h1 className="text-3xl font-semibold mb-12 sm:mb-16 text-center">Create an Account</h1>
            <div className='flex flex-col gap-3 items-center'>
                <button className='w-full flex justify-center border border-solid border-indigo rounded-xmd py-2 px-3 focus:outline-none text-black hover:bg-button-hover' onClick={() => googleLogin()}>
                    <img src={google} alt="google" className='w-6 h-6 mx-4' />
                    <span>Sign Up with Google</span>
                </button>
                <div className='text-center'><span className='text-indigo text-xl font-normal'>OR</span></div>
                <div className='w-full'>
                    <form onSubmit={(event) => handleSignup(event, false, undefined)}>
                        <div className="mb-6">
                            <input type="text" id="firstName" name="firstName" placeholder='First Name'
                                onChange={(event) => setSignupForm((prev) => { return { ...prev, first_name: event?.target.value } })}
                                className="w-full border border-indigo py-2 px-3 focus:outline-none focus:border-primary bg-transparent rounded-xmd" autoComplete="off" />
                        </div>
                        <div className="mb-6">
                            <input type="text" id="lastName" name="lastName" placeholder='Last Name'
                                onChange={(event) => setSignupForm((prev) => { return { ...prev, last_name: event?.target.value } })}
                                className="w-full border border-indigo py-2 px-3 focus:outline-none focus:border-primary bg-transparent rounded-xmd" autoComplete="off" />
                        </div>
                        <div className="mb-6">
                            <input type="text" id="email" name="email" placeholder='Email'
                                onChange={(event) => setSignupForm((prev) => { return { ...prev, email: event?.target.value } })}
                                className="w-full border border-indigo py-2 px-3 focus:outline-none focus:border-primary bg-transparent rounded-xmd" autoComplete="off" />
                        </div>
                        <div className="mb-6">
                            <input type="password" id="password" name="password" placeholder='Password'
                                onChange={(event) => setSignupForm((prev) => { return { ...prev, password: event?.target.value } })}
                                className="w-full border border-indigo py-2 px-3 focus:outline-none focus:border-primary bg-transparent rounded-xmd" autoComplete="off" />
                        </div>
                        <div className='mb-6'>
                            <button type="submit" className="bg-primary text-white font-medium rounded-xmd py-2 px-4 w-full">SIGNUP</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='border-t border-t-indigo mb-8'></div>
            <div className=''>
                <button type="submit" className="border border-primary font-medium py-2 px-4 w-full hover:bg-button-hover rounded-xmd"
                    onClick={() => routeChange('/login')}>LOGIN</button>
            </div>
        </div>
    )
}

export default SignUp