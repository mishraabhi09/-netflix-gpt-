import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.jsx";
import { removeUser } from "../utils/userSlice.jsx";



const Body = () => {


    const dispatch = useDispatch();



    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,

        },
        {
            path: "/Browse",
            element: <Browse />,
        }
    ]);

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {


                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayname, photoURL } = user;

                // const { uid, email, displayname } = user.uid;

                dispatch(addUser({ uid: uid, email: email, displayname: displayname, photoURL: photoURL }));





            }

            else {

                dispatch(removeUser());



            }
        });
    }, []);

    return (

        <div>
            <RouterProvider router={appRouter} />
        </div>

    )
}

export default Body;