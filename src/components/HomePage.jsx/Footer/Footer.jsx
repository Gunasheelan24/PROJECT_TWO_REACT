import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
    return (
        <>
            <div id="footer_header_container">
                <div className="inner_first_footer_main">
                    <div id="top_footer_container">
                        <p className="text_sub_footer">SUBSCRIBE TO OUR NEWSLETTER</p>
                        <div className="container_top_inner_footer">
                            <input type="text" placeholder="Enter your email address here" className="input_footer" />
                            <button className="btn_footer_sub">SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="top_footer_container_right">
                        <p className="text_sub_footer text-text_footer">FOLLOW Sophia.</p>
                        <div className="inner_icons_footer">
                            <FaFacebookF className="icons_footer" />
                            <CiTwitter className="icons_footer" />
                            <FaInstagram className="icons_footer" />
                        </div>
                    </div>
                </div>
                <div id="bottom_id_footer">
                    <div>
                        <p className="logo_brand_footer">Sophia.</p>
                        <p className="brand_slogan_footer">Shop Smart, Shop Easy, Shop Nexify</p>
                    </div>
                    <div>
                        <p className="contact_customer_Care_footer">contact customer care: 1234567(12123)</p>
                        <p className="contact_customer_Care_footer">WhatsApp customer care: +91123456789</p>
                    </div>
                    <div>
                        <p className="right_footer">Sophia. Group LLC.2024. All Right Reserved</p>
                        <p className="none_user_footer">.</p>
                    </div>
                </div>
            </div>
        </>
    )
}