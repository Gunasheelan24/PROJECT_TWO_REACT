import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Nav from '../../HomePage.jsx/Nav/Nav';
import axios from "axios";
import "./men.css";

const Men = () => {
    const [sort, setSort] = useState(false);
    const [filter, setFilter] = useState(false);
    const [data, setData] = useState([]);

    // Api Call
    useEffect(() => {
        (async () => {
            const getProduct = await axios.get(`http://localhost:3000/api/v1/product/getProduct/filter?gender=${"men"}`);
            if (getProduct.status === 200) {
                setData(getProduct.data.response);
            }
        })()
    }, []);
    return (
        <section>
            <Nav />
            <header className='mobile_filter'>
                <div>
                    <motion.button onClick={() => { setSort(prev => !prev ? true : false) }} className='sort_men_mobile'>Sort By<IoIosArrowDown className='icon_inside_btn' /></motion.button>
                </div>
                <div>
                    <button onClick={() => { setFilter(prev => !prev ? true : false) }} className='btn_filter_mobile'>Filter <IoIosArrowDown className='icon_inside_btn' /></button>
                </div>
            </header>
            <main className='main-men-mobile'>
                <div>
                    <AnimatePresence>
                        {sort &&
                            <motion.div exit={{ y: "100vh", transition: { duration: 0.5 } }} animate={{ y: "0", transition: { duration: 0.3 } }} initial={{ y: "100vh" }} className='mobile_men_sort'>
                                <p className='filter_sort'>SORT BY</p>
                                <hr className='hr_mobile_men' />
                                <p className='para_btn_mobile_filter'>Best Selling</p>
                                <p className='para_btn_mobile_filter'>Price: High To Low</p>
                                <p className='para_btn_mobile_filter'>Price: Low To Hight</p>
                                <p className='para_btn_mobile_filter'>New Arrival</p>
                            </motion.div>
                        }
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {filter &&
                        <motion.div exit={{ y: "100vh", transition: { duration: 0.5 } }} animate={{ y: "0", transition: { duration: 0.3 } }} initial={{ y: "100vh" }} className='mobile_men_sort'>
                            <p className='filter_sort'>FILTER</p>
                            <hr className='hr_mobile_men' />
                            <p className='para_btn_mobile_filter'>Tshirt</p>
                            <p className='para_btn_mobile_filter'>Formal's Shirt</p>
                            <p className='para_btn_mobile_filter'>Casual Shirt</p>
                            <p className='para_btn_mobile_filter'>MEN PANT</p>
                        </motion.div>
                    }
                </AnimatePresence>

            </main>
            <div className='home_second_div'>
                <p>Home</p>
                <MdOutlineKeyboardArrowRight className='icons-right-arrow' />
                <p>Men</p>
            </div>
            <p className='men-text-decoration'>Clothing For Men</p>
            <section className='men_grid_system'>
                <div className='filter_Section'>
                    <div className="top_filter_section">
                        <p>Men Collection</p>
                        <p>Showing 21-40 out of 100 Products</p>
                        <hr />
                        <p>Filter Products</p>
                    </div>
                    <div className='btn-men-clear-container'>
                        <button className='btn-clear_men'>Clear Filter</button>
                    </div>
                    <div className="byPrice_filter">
                        <p className='price_by_filter'>By Price</p>
                        <div className='content_filter'>
                            <button className='btn_price_below'>below 899</button>
                            <button className='btn_price_below'>899 to 1000</button>
                        </div>
                        <div className='right_content_filter'>
                            <button className='btn_price_below'>1000 to 1500</button>
                            <button className='btn_price_below'>above 1500</button>
                        </div>
                    </div>
                    <div className="byPrice_filter">
                        <p className='price_by_filter'>By Top Wear</p>
                        <div className='content_filter'>
                            <button className='btn_price_below'>Casual Shirt</button>
                            <button className='btn_price_below'>Formal Shirt</button>
                        </div>
                        <div className='right_content_filter'>
                            <button className='btn_price_below'>Tshirt For Men</button>
                            <button className='btn_price_below'>Mixed</button>
                        </div>
                    </div>
                    <div className="byPrice_filter">
                        <p className='price_by_filter'>By Bottom Wear</p>
                        <div className='content_filter'>
                            <button className='btn_price_below'>Jeans Pant</button>
                            <button className='btn_price_below'>Shorts</button>
                        </div>
                        <div className='right_content'>
                            <button className='btn_price_below'>Cotton Pant</button>
                        </div>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </section>
        </section >
    )
}

export default Men