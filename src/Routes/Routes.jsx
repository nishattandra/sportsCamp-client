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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
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
          element:<Addclass></Addclass>
        },
        {
          path:'myclass',
          element:<Myclass></Myclass>
        },
        {
          path:'manageclass',
          element:<Manageclass></Manageclass>
        },
        {
          path:'manageusers',
          element:<Manageuser></Manageuser>
        },
        {
          path:'selectclass',
          element:<Selectedclass></Selectedclass>
        },
        {
          path:'enrollclass',
          element:<Enrolledclass></Enrolledclass>
        },
        {
          path:'paymenthistory',
          element:<Paymenthistory></Paymenthistory>
        }
      ]
    }
  ]);

  export default router;