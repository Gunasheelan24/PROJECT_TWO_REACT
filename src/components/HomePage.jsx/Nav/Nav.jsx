import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import "./nav.css";

// 3rd Div
import { IoBagHandleOutline } from "react-icons/io5";
import { LiaHeartSolid } from "react-icons/lia";

const Nav = () => {
    const myLogoName = "Sophia.".split("");
    return (
        <>
            <div className="container_mobile_nav">
                <div>
                    <h1 className='eb-garamond'>
                        {myLogoName.map((eachWord, index) => (
                            <span key={index}>{eachWord}</span>
                        ))}
                    </h1>
                </div>
                <div className="container_icons">
                    <LiaHeartSolid className='heart_icons' />
                    <IoBagHandleOutline className='cart_icons' />
                    <motion.button whileHover={{ y: -3, transition: { duration: 0.1, ease: "linear" } }} whileTap={{ y: 0, transition: { duration: 0.1, ease: "linear" } }} className='btn_nav'>Login</motion.button>
                </div>
            </div>
            <div className="container_navigation">
                <div className='nav_left'>
                    <motion.ul className='unorder_nav'>
                        <motion.li whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeInOut" } }} whileTap={{ y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} className='list_nav'><Link to={`/Sophia/Shopping/v1/homepage`} className='Link'>Home</Link></motion.li>
                        <motion.li whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeInOut" } }} whileTap={{ y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} className='list_nav'><Link to={`/Sophia/Shopping/v1/MenSection`} className='Link'>Men</Link></motion.li>
                        <motion.li whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeInOut" } }} whileTap={{ y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} className='list_nav'>Search</motion.li>
                        <motion.li whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeInOut" } }} whileTap={{ y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} className='list_nav'>Women</motion.li>
                        <motion.li whileHover={{ y: -4, transition: { duration: 0.3, ease: "easeInOut" } }} whileTap={{ y: 0, transition: { duration: 0.3, ease: "easeInOut" } }} className='list_nav'>Kids</motion.li>
                    </motion.ul>
                </div>
                <div className='nav_center'>
                    <h1 className='eb-garamond'>
                        {myLogoName.map((eachWord, index) => (
                            <span key={index} className={`logo_span${index}`}>{eachWord}</span>
                        ))}
                    </h1>
                </div>
                <div className='nav_right'>
                    <div className="container_icons">
                        <Link className='list_nav' to={"/Sophia/Shopping/v1/wiseList"}>
                            <LiaHeartSolid className='heart_icons' />
                        </Link>
                        <Link>
                            <IoBagHandleOutline className='cart_icons' />
                        </Link>
                        <Link>
                            <motion.button whileHover={{ y: -3, transition: { duration: 0.1, ease: "linear" } }} whileTap={{ y: 0, transition: { duration: 0.1, ease: "linear" } }} className='btn_nav'>Login</motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav