import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import ContactUs from "../components/ContactUs";
import EventDetails from "../pages/EventDetails";
import MyBoking from "../pages/MyBoking";
import FrequentQues from "../pages/FrequentQues";
import UserProfile from "../pages/UserProfile";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter(


    [

        {

            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [

                {

                    index: true,
                    path: "/",
                    loader: () => fetch('/event.json'),
                    hydrateFallbackElement:<Loading></Loading>,
                    element: <Home></Home>

                },





            ]

        },


        {
            path: '/eventDetails/:id',
            loader: () => fetch('/event.json'),
            hydrateFallbackElement:<Loading></Loading>,
            element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>
        },

        {
            path: '/contactUs',
            element: <ContactUs></ContactUs>

        },



        {
            path: '/my-bookings',
            element: <MyBoking></MyBoking>

        },

        {
            path: '/contactUs',
            element: <ContactUs></ContactUs>

        },

        {
            path: '/qNa',
             loader:()=>fetch('/FAQ.json'),
             hydrateFallbackElement:<Loading></Loading>,
            element:<PrivateRoute><FrequentQues></FrequentQues></PrivateRoute> 
            

        },

        {

            path: '/profile',
            element:  <PrivateRoute><UserProfile></UserProfile></PrivateRoute> 

        },



        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [

                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                },
                {
                    path: "/auth/forgetPass",
                    element: <ForgetPassword></ForgetPassword>
                }

            ],
        },


        {

            path: "/*",
            element: <h2>Error-404</h2>,

        }

    ]);


export default router;