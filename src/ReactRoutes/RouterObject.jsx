import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomePage.jsx/Home";
import Men from "../components/Section/Men/Men";
import Cart from "../components/Cart/Cart";
import Wise from "../components/Wiselist/Wise";
import Profile from "../components/Profile/Profile";
import ProductView from "../components/HomePage.jsx/ProductShow/ProductView"

let routerObject = createBrowserRouter([
    { path: '/Sophia/Shopping/v1/homepage', caseSensitive: true, element: <Home /> },
    { path: "/Sophia/Shopping/v1/MenSection", caseSensitive: true, element: <Men /> },
    { path: "/Sophia/Shopping/v1/cart", caseSensitive: true, element: <Cart /> },
    { path: "/Sophia/Shopping/v1/wiseList", caseSensitive: true, element: <Wise /> },
    { path: "/Sophia/Shopping/v1/profile", caseSensitive: true, element: <Profile /> },
    { path: "/Sophia/Shopping/v1/productView/:ProductName/:ProductPrice/:ProductDescription/:ProductImages/:Section/:Categorys", caseSensitive: true, element: <ProductView /> }
]);

export default routerObject;