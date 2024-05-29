import React from "react";
import Nav from "./Nav/Nav";
import Banner from "./Banner.jsx/Banner.jsx";
import Home from "./Product/Product.jsx";
import Footer from "./Footer/Footer.jsx"
import Profile from "./Recommendation/Profile.jsx";
import Brand from "./Brand/Brand.jsx";

export default function HomePage() {
    return (
        <>
            <Nav />
            <Banner />
            <Profile />
            <Home />
            <Brand />
            <Footer />
        </>
    )
}