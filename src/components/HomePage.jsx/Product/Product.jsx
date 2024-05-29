import react, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "./product.css";

// Girl Section
import girl_one from "/props/girl_one.webp";
import girl_two from "/props/girl_two.webp";
import girl_three from "/props/girl_three.webp";
import girl_four from "/props/girl_four.webp";

// Bottom Section
import bottom_one from "/props/bottom_one.webp";
import bottom_two from "/props/bottom_two.webp";
import bottom_three from "/props/bottom_three.webp";
import bottom_four from "/props/bottom_fourwebp.webp";

// Banner For Product
import BannerShop from "/ShowCase/Frame 1.png";
import BannerTwo from "/ShowCase/Frame 2.png";

//Thrid For Banner
import MenOne from "/props/men_one.webp"
import MenTwo from "/props/men_two.webp"
import MenThree from "/props/men_three.webp"
import Menfour from "/props/Menfour.webp"
import axios from "axios";

const girlSection = [
    { id: 0, name: "TSS Originals: Rose Bloom", price: 1800, image: girl_one, description: "" },
    { id: 1, name: "TSS Originals: Tropical Birds", price: 1500, image: girl_two, description: "" },
    { id: 2, name: "Looney Tunes: Nervous Bugs", price: 1899, image: girl_three, description: "" },
    { id: 3, name: "Solids: Aurora", price: 1899, image: girl_four, description: "" },
]

const bottomSection = [
    { id: 0, name: "Solids: Light Olive", price: 1899, image: bottom_one },
    { id: 1, name: "TSS Originals: Candy Stripes", price: 1699, image: bottom_two },
    { id: 2, name: "Solids Skater Dress: Rustic Diva", price: 899, image: bottom_three },
    { id: 3, name: "Mickey Mouse: Pattern", price: 1299, image: bottom_four },
]

const menSection = [
    { id: 0, name: "TSS Originals: Brunet", price: 2300, image: MenOne },
    { id: 1, name: "Solids: Ebony", price: 2500, image: MenTwo },
    { id: 2, name: "TSS Originals: Navy", price: 2900, image: MenThree },
    { id: 3, name: "Black Panther", price: 1700, image: Menfour },
]

export default function Product() {
    const getProduct = async () => {
        try {
            const response = (await axios.get(`http://localhost:3000/api/v1/product/getProduct/filter?gender=men`)).data;
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            {/* Trending Text */}
            <section className="section_product_container">
                <motion.p className="Trending_product">Trending Now</motion.p>
            </section>

            {/* First Card For Trending Image */}
            <section className="section_trending_card">
                <ProductCard product={girlSection} />
            </section>

            {/* Best Selling */}
            <section className="bestSelling_product">
                <motion.p className="Trending_product">Best Selling</motion.p>
            </section>

            {/* Second Card For Best Selling Image */}
            <section className="section_BestSelling_card">
                <ProductCard product={bottomSection} />
            </section>

            {/* Banner For HomePage */}
            <div className="banner_Product_card">
                <div>
                    <img src={BannerShop} alt="banner_images" className="left_banner_image_Product" />
                </div>
                <div>
                    <img src={BannerTwo} alt="banner_images" className="right_banner_image" />
                </div>
            </div>

            {/* Third Card Image */}
            <section className="section_BestSelling_card">
                <ProductCard product={menSection} />
            </section>
        </>
    )
}