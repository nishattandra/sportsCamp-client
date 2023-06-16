import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import Instructors from "../pages/Instructors/Instructors";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import Addclass from "../pages/Dashboard/Instructor/Addclass";
import Myclass from "../pages/Dashboard/Instructor/Myclass";
import Manageclass from "../pages/Dashboard/Admin/Manageclass";
import Manageuser from "../pages/Dashboard/Admin/Manageuser";
import Selectedclass from "../pages/Dashboard/Student/Selectedclass";
import Enrolledclass from "../pages/Dashboard/Student/Enrolledclass";
import Paymenthistory from "../pages/Dashboard/Student/Paymenthistory";
import Privateroute from "./Privateroute";
import Classes from "../Classes/Classes";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=> fetch('https://assignment-12-server-sand-kappa.vercel.app/populars')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Privateroute><Dashboard></Dashboard></Privateroute>,
      children:[
        {
          path:'',
          element:<DashboardHome></DashboardHome>
        },
        {
          path:'addclass',
          element:<InstructorRoute><Addclass></Addclass></InstructorRoute>
        },
        {
          path:'myclass',
          element:<InstructorRoute><Myclass></Myclass></InstructorRoute>
        },
        {
          path:'manageclass',
          element:<AdminRoute><Manageclass></Manageclass></AdminRoute>
        },
        {
          path:'manageusers',
          element:<AdminRoute><Manageuser></Manageuser></AdminRoute>
        },
        {
          path:'selectclass',
          element:<StudentRoute><Selectedclass></Selectedclass></StudentRoute>
        },
        {
          path:'enrollclass',
          element:<StudentRoute><Enrolledclass></Enrolledclass></StudentRoute>
        },
        {
          path:'paymenthistory',
          element:<StudentRoute><Paymenthistory></Paymenthistory></StudentRoute>
        },
        {
          path: 'payment/:id',
          element: <Payment></Payment>,
          loader: ({params})=>fetch(`https://assignment-12-server-sand-kappa.vercel.app/student/payment/${params.id}`)
      }
      ]
    }
  ]);

  export default router;