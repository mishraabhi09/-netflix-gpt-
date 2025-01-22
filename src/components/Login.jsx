import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { checkValidEmail } from "../utils/validate.jsx"
import { checkValidPassword } from "../utils/validate.jsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import Header from "./Header.jsx";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice.jsx";
import { useDispatch } from "react-redux";


const Login = () => {

    const [IsSignInForm, SetIsSignInForm] = useState(true);

    const [emailerrmsg, setEmailErrorMsg] = useState();

    const [passworderrmsg, setPasswordErrorMsg] = useState();

    const navigate = useNavigate();

    const email = useRef(null);

    const password = useRef(null);

    const name = useRef(null);

    const dispatch = useDispatch();



    const handlesigninbutton = () => {


        // validate the form data 

        // These consoles only giving us the address of the email and password which fetched by useRef hook.
        // // console.log(email);
        // console.log(password);

        // "email.current" -->> gives us the input data entered by the person and ".value" -->> gives the value of input box
        // console.log(email.current.value);
        // console.log(password.current.value);

        const msgfrvalidEmail = checkValidEmail(email.current.value);
        setEmailErrorMsg(msgfrvalidEmail ? null : "Please Enter a valid email");


        const msgfrvalidPassword = checkValidPassword(password.current.value);
        setPasswordErrorMsg(msgfrvalidPassword ? null : "please Enter correct password");

        if (!msgfrvalidEmail || !msgfrvalidPassword) return;

        if (!IsSignInForm) {
            // Sign up logic

            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {

                        displayName: name.current.value,
                        photoURL: "https://example.com/jane-q-user/profile.jpg",
                    })
                        .then(() => {

                            const { uid, email, displayname, photoURL } = auth.currentUser;

                            dispatch(

                                addUser(

                                    {
                                        uid: uid,
                                        email: email,
                                        displayname: displayname,
                                        photoURL: photoURL

                                    }));


                            navigate("/Browse");



                        })

                        .catch((error) => {
                            // An error occurred
                            // ...
                        });


                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);



                });

        }

        else {
            // sign in logic 

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    navigate("/Browse");

                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(error.Code + "-" + error.Message);
                });
        }

    }

    const toggleSignIn = () => {
        SetIsSignInForm(!IsSignInForm);
    }


    return (

        <div className="">

            <Header />

            <div className="absolute w-fit ">

                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg" alt="Main_Image" />

            </div>




            <form onSubmit={(e) => e.preventDefault()}

                className=" w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-75 rounded-md">

                <p className="text-white text-4xl font-bold mx-8">

                    {IsSignInForm ? "SignIn" : "Signup"}

                </p>

                {!IsSignInForm && (<input

                    ref={name}
                    className="w-4/5 px-5 py-5 my-2 mx-9 rounded-md bg-black bg-opacity-50 text-white border border-zinc-600"
                    type="text"
                    placeholder="Enter your name"


                />
                )}


                <input


                    ref={email}
                    className="w-4/5 px-5 py-5 my-8 mx-9 rounded-md bg-black bg-opacity-50 text-white border border-zinc-600"
                    type="text"
                    placeholder="Enter your Email address"

                />


                <p className="text-red-600 mx-9"> {emailerrmsg} </p>



                <input

                    ref={password}
                    className="w-4/5 px-5 py-5 my-2 mx-9 rounded-md bg-black bg-opacity-50 text-white border border-zinc-600"
                    type="text"
                    placeholder="Enter Password"

                />

                <p className="text-red-600 mx-9" >{passworderrmsg}</p>


                <button

                    className="w-4/5 px-8 py-3 my-2 mx-9 rounded-md bg-red-600"

                    onClick={handlesigninbutton}>

                    {IsSignInForm ? "SignIn" : "Signup"}

                </button>

                <p

                    className="text-gray-400 pl-48 pt-3 pb-3 text-xl font-semibold">

                    OR

                </p>

                <button

                    className="w-4/5 px-8 py-3 my-2 mx-9 rounded-md bg-white text-white font-semibold bg-opacity-25">

                    Use sign-in code

                </button>

                <p

                    className="text-white text-lg px-32 pb-8">

                    Forget password?

                </p>

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