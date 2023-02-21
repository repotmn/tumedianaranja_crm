import { createBrowserRouter } from "react-router-dom";
import Menu from "../Pages/Menu";
import Login from "../components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export const router = createBrowserRouter(  
    [     
    {
        index: true,
        element: <Login/>,
    },
    {
        path: "/prospeccion",
        element: <Menu/>,
    },
]);
