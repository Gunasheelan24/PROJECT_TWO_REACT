import React from 'react'
import "./profile.css";
import { motion } from "framer-motion";

const Profile = () => {

    return (
        <div className='topSectionProfile'>
            <div className='first_profile'>
                <motion.img className='imgHomePageProfile' src="https://images.unsplash.com/photo-1492633397843-92adffad3d1c?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div>
                    <p className='user_profile_name'>Hi, GunaSheelan</p>
                    <p className='user_recomend_profile'>Recommendation For</p>
                    <p className='user_recomend_profile'>You!</p>
                </div>
            </div>
            <div className='second_profile'>
                <img className='imgHomeShirtProfile' src="https://plus.unsplash.com/premium_photo-1661627681947-4431c8c97659?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div>
                    <p className='shirt_category_one'>Formal Shirt</p>
                    <p className='price_category_one'>under $1000</p>
                </div>
            </div>
            <div className='third_profile'>
                <img className='imgHomeShirtProfile' src="https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div>
                    <p className='shirt_category_one'>Jeans Pant</p>
                    <p className='price_category_one'>under $800</p>
                </div>
            </div>
            <div className='four_profile'>
                <img className='imgHomeShirtProfile' src="https://godevil.in/cdn/shop/files/Devil-March8938.jpg?v=1711843159" alt="" />
                <div>
                    <p className='shirt_category_one'>T-Shirt</p>
                    <p className='price_category_one'>under $1000</p>
                </div>
            </div>
        </div>
    )
}

export default Profile