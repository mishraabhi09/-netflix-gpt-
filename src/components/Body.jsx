import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./Login.jsx";
import Browse from "./Browse.jsx";


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,

        },
        {
            path: "/Browse",
            element: <Browse />,
        }
    ])


    return (

        <div>
            <RouterProvider router={appRouter} />
        </div>

    )
}

export default Body;