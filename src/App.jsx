import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import "./app.scss"
import Rooms_suits from "./pages/Rooms/Rooms_suits";
import Restaurant from "./pages/Restaurant/Restaurant";
import Spa from "./pages/Spa/Spa";
import Contact from "./pages/Contact/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  const Layout =()=>{

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2500);
    }, [])
    return(
      <div className="app">
        {loading ? <Loader/>:
        <>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </>
        }
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/rooms",
          element:<Rooms_suits/>,
        },
        {
          path:"/restaurant",
          element:<Restaurant/>,
        },
        {
          path:"/spa",
          element:<Spa/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
      ]
    },
  ]);
  return (

    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
