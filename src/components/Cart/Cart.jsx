import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

import girl_one from "/props/girl_one.webp"

import "./cart.css";
import { Link } from 'react-router-dom';

const Cart = ({ setisCart }) => {
    return (
        <AnimatePresence>
            <div style={{ overflowY: "hidden" }}>
                <motion.div initial={{ y: "-100vh", scale: 0 }} exit={{ y: "-100vh", scale: 0.5 }} animate={{ y: 0, scale: 1 }} transition={{ duration: 0.3 }} >
                    <Link className='remove_link' to="/Nexify/shopping/v1/homepage">
                        <div className="text_container_cart">
                            <IoMdArrowRoundBack />
                            <p>Back To Store</p>
                        </div>
                    </Link>
                    <div id="main_container_cart">
                        <div>
                            <div id="layer_one">
                                <p>Shopping Cart</p>
                                <p>3 ITEMS</p>
                            </div>
                            <div id="layer_two">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='th_style_cart'>Items</th>
                                            <th className='th_style_cart'>Size</th>
                                            <th className='th_style_cart'>Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={girl_one} alt="girl-images" className='img_cart' />
                                                <span>
                                                    <p>{`TSS Orginals: Rose Bloom`}</p>
                                                    <p>{`Proce: $1800`}</p>
                                                </span>
                                            </td>
                                            <td>
                                                <p>S</p>
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: "flex", justifyContent: "center", alignContent: "space-around", gap: "9px"
                                                }}>
                                                    < CiCircleMinus className='qty_div_cart' />
                                                    <p className='qty_num_cart' style={{ marginTop: "3px", }}>1</p>
                                                    <CiCirclePlus className='qty_div_cart' />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={girl_one} alt="girl-images" className='img_cart' />
                                                <span>
                                                    <p>{`TSS Orginals: Rose Bloom`}</p>
                                                    <p>{`Proce: $1800`}</p>
                                                </span>
                                            </td>
                                            <td>
                                                <p>L</p>
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: "flex", justifyContent: "center", alignContent: "space-around", gap: "9px"
                                                }}>
                                                    < CiCircleMinus className='qty_div_cart' />
                                                    <p style={{ marginTop: "3px", }}>1</p>
                                                    <CiCirclePlus className='qty_div_cart' />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={girl_one} alt="girl-images" className='img_cart' />
                                                <span>
                                                    <p>{`TSS Orginals: Rose Bloom`}</p>
                                                    <p>{`Proce: $1800`}</p>
                                                </span>
                                            </td>
                                            <td>
                                                <p>XL</p>
                                            </td>
                                            <td>
                                                <div style={{
                                                    display: "flex", justifyContent: "center", alignContent: "space-around", gap: "9px"
                                                }}>
                                                    < CiCircleMinus className='qty_div_cart' />
                                                    <p style={{ marginTop: "3px", }}>1</p>
                                                    <CiCirclePlus className='qty_div_cart' />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div style={{ position: "relative", height: "90vh" }}>
                            <div className='right_side_cart'>
                                <div><p className='summary_text_cart'>Summary</p></div>
                                <div className='right_side_div_cart'>
                                    <p>Subtotal</p>
                                    <p>$252</p>
                                </div>
                                <div className='right_side_div_cart'>
                                    <p>Shipping</p>
                                    <p>$0.00</p>
                                </div>
                                <div className='right_side_div_cart'>
                                    <p>GST</p>
                                    <p>$39</p>
                                </div>
                            </div>
                            <div id="bottom_container_cart">
                                <p style={{ textAlign: "center", fontFamily: "poppins", fontSize: "1rem", marginBottom: "5px" }}>TOTAL PRICE: $322</p>
                                <button className='btn_cart'>CHECKOUT</button>
                            </div>
                        </div >
                    </div>
                </motion.div>
            </div >
        </AnimatePresence>
    )
}

export default Cart