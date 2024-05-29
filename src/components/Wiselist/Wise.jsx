import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import ProductCard from '../HomePage.jsx/Product/ProductCard';

import HeaderLogo from "/Header/woman.png";
import girl_one from "/props/girl_one.webp"
import girl_two from "/props/girl_two.webp"
import girl_three from "/props/girl_three.webp"
import girl_four from "/props/girl_four.webp"
import "./wise.css";
import Footer from '../HomePage.jsx/Footer/Footer';

const Wise = () => {
    const [isWiseList, setisWiseList] = React.useState(true);
    const girlSection = [
        { id: 0, name: "TSS Originals: Rose Bloom", price: 1800, image: girl_one },
        { id: 1, name: "TSS Originals: Tropical Birds Pattern", price: 1500, image: girl_two },
        { id: 2, name: "Looney Tunes: Nervous Bugs", price: 1899, image: girl_three },
        { id: 3, name: "Solids: Aurora", price: 1899, image: girl_four },
    ]
    return (
        <>
            <div className="backToTop">
                <Link className='remove_link' to="/Nexify/shopping/v1/homepage">
                    <div className="text_container_cart">
                        <IoMdArrowRoundBack />
                        <Link className='remove_link' to={"/Sophia/Shopping/v1/homepage"}  >
                            <p>Back To Store</p>
                        </Link>
                    </div>
                </Link>
            </div>
            {isWiseList ?
                <>
                    <div id='empty_wiseList'>
                        <img src={HeaderLogo} alt="website-logo" className='img_girl_wise' />
                        <p className='hey_wise_list' style={{ fontFamily: "Inter", fontSize: "0.9rem", fontWeight: 400, marginTop: "10px" }}>Hey there! It looks like your wishlist is currently empty.</p>
                        <p className='not-only-mobile' style={{ fontFamily: "Inter", fontSize: "0.9rem", fontWeight: 400, marginTop: "4px" }}>If there's anything you'd like to add, feel free to browse our selection andadd items to your wishlist anytime!</p>
                        <button className="btn-collection">Our Collection</button>
                    </div>
                    <div id="">
                        <p id='container_recomendation'>Start Shopping Now</p>
                        <motion.div viewport={{ once: true }} whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }} initial={{ opacity: 0, scale: 0.5 }} id="img_container_showcard">
                            <ProductCard product={girlSection} />
                        </motion.div>
                    </div>
                </>
                :
                <p id='wiseList_container'>
                    <table>
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </p>
            }
            <Footer />
        </>
    )
};

export default Wise