import React from "react";
import { motion } from "framer-motion";

import BannerImg from "/Banner/banner-fotor-bg-remover-2024042585053.png";
import bg from "/Banner/graph (6).png";
import "./banner.css";

export default function Banner() {
    return (
        <>
            <div id="banner_container">
                <div className="left_side_banner">
                    <div className="inner_left_banner">
                        <motion.p className="text_banner_font first_left_banner">The New Cloth</motion.p>
                        <p className="text_banner_font second_left_banner">Collection Made</p>
                        <p className="text_banner_font third_left_banner">For You</p>
                        <p className="para_banner_text">A digital fashion house that mixes technology and creativity to take fashion</p>
                        <p className="para_banner_text second_banner_text">beyond only-physical experiences</p>
                        <div className="btn_container_banner">
                            <motion.button whileTap={{ y: 0, transition: { duration: 0.1 } }} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="btn_banner">View Our Colleactions</motion.button>
                        </div>
                    </div>
                </div>
                <div className="remove_right_mobile_banner">
                    <div className="right_side_banner">
                        <img src={BannerImg} className="img_girl_banner" alt="banner_img" width={"520px"} />
                        <motion.img animate={{ rotate: 360, transition: { repeat: Infinity, duration: 10, ease: "linear" } }} initial={{ rotate: 0 }} className="img_background_pink" src={bg} />
                    </div>
                </div>
            </div>

        </>
    )
}