import { useState } from "react"
import Header from "./Header.jsx";

const Login = () => {

    const [IsSignInForm, SetIsSignInForm] = useState(true);

    const toggleSignIn = () => {
        SetIsSignInForm(!IsSignInForm);
    }


    return (

        <div className="">

            <Header />

            <div className="absolute  w-fit bg-gradient-to-b from-black">

                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg" alt="Main_Image" />

            </div>

            <form className=" w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-75 rounded-md">

                <p className="text-white text-4xl font-bold mx-8">

                    {IsSignInForm ? "SignIn" : "Signup"}

                </p>

                <input className="w-4/5 px-8 py-5 my-8 mx-9 rounded-md" type="text" placeholder="Enter your Email address" />

                <input className="w-4/5 px-8 py-5 my-2 mx-9 rounded-md" type="text" placeholder="Enter Password" />

                <button className="w-4/5 px-8 py-3 my-2 mx-9 rounded-md bg-red-600" onClick = {handlesigninbutton}>

                    {IsSignInForm ? "SignIn" : "Signup"}

                </button>

                <p className="text-gray-400 pl-48 pt-3 pb-3 text-xl font-semibold">OR</p>

                <button className="w-4/5 px-8 py-3 my-2 mx-9 rounded-md bg-white text-white font-semibold bg-opacity-25">

                    Use sign-in code

                </button>

                <p className="text-white text-lg px-32 pb-8">Forget password? </p>

                <div className="signup_now flex px-9">





                    {IsSignInForm


                        ? <p className="text-gray-400 hover:cursor-pointer hover:underline" onClick={toggleSignIn} > New to Netflix ? Sign up now </p>

                        : <p className="text-white font-semibold px-1 hover:cursor-pointer hover:underline"

                            onClick={toggleSignIn}>Already registered?Sign up now</p>

                    }

                </div>

            </form>

        </div>
    )
}

export default Login;