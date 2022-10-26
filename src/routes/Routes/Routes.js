import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Detailse from "../../Pages/Course-Detailse/Detailse";
import Courses from "../../Pages/Courses/Course-home/Courses";
import CourseHome from "../../Pages/Courses/Course-large/CourseHome";
import Left from "../../Pages/Courses/Left-Side/Left";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Shared/Login/Login";
import Registration from "../../Pages/Shared/Registration/Registration";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/left/:id',
                element: <Left></Left>
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/detailse/:id',
                element: <Detailse></Detailse>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path: '/coursedetails/:id',
                element: <CourseHome></CourseHome>,

            },
            {
                path: '/checkout/:id',
                element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)

            },
            {
                path: '/registration',
                element: <Registration></Registration>

            },
            {
                path: '/login',
                element: <Login></Login>

            }


        ]
    }
])