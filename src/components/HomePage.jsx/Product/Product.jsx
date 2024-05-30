import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import "./product.css";

// Banner For Product
import BannerShop from "/ShowCase/Frame 1.png";
import BannerTwo from "/ShowCase/Frame 2.png";

import axios from "axios";

export default function Product() {
  const [girlSection, setgirlSection] = useState([]);
  const [bottomSection, setbottomSection] = useState([]);
  const [menSection, setmenSection] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const url = [
        "http://localhost:3000/api/v1/product/getProduct/filter?limit=1&gender=women",
        "http://localhost:3000/api/v1/product/getProduct/filter?limit=1&gender=women&&offset=1",
        "http://localhost:3000/api/v1/product/getProduct/filter?limit=1&gender=men",
      ];
      const request = url.map((req) => axios.get(req));
      try {
        const response = await Promise.all(request);
        response.forEach((response, index) => {
          if (index === 0) {
            setgirlSection(response.data.response);
          } else if (index === 1) {
            setbottomSection(response.data.response);
          } else if (index === 2) {
            setmenSection(response.data.response);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
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
          <img
            src={BannerShop}
            alt="banner_images"
            className="left_banner_image_Product"
          />
        </div>
        <div>
          <img
            src={BannerTwo}
            alt="banner_images"
            className="right_banner_image"
          />
        </div>
      </div>

      {/* Third Card Image */}
      <section className="section_BestSelling_card">
        <ProductCard product={menSection} />
      </section>
    </>
  );
}
