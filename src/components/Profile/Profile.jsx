import React, { useState } from 'react'
import Nav from '../HomePage.jsx/Nav/Nav'
import { motion } from 'framer-motion';

import { MdEdit } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import "./profile.css"
import EditAddress from './EditAddress';

const Profile = () => {
    const [address, setAddress] = useState(true);
    return (
        <>
            <Nav />
            <div className="profile_container">
                <div className="profile_child_one">
                    <img src="https://i.pinimg.com/736x/2f/49/92/2f4992a8695b053dfc022b7adb9ede44.jpg" className='img_cover_profile' alt="cover_profile" />
                    <div className='edit_container_'>
                        <img src="https://i.pinimg.com/564x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg" className='img_proifle_picture' alt="" />
                        <MdEdit className='edit_pen' />
                    </div>
                </div>
                <div className="profile_child_two">
                    <div>
                        {/* <p className='personal_profile'>Personal Information</p> */}
                        <p className='name_user'>GunaSheelan</p>
                        <div className='user_details'>
                            <p><MdOutlineEmail className='email-icon' />{" "}gunasheelan16@gmail.com</p>
                            <p><FiPhone className='phone-icon' />{" "}8489009293</p>
                        </div>
                    </div>
                    <div>
                        <div className="border_address_user">
                            <p className='address_user'>Saved Address</p>
                            <div className="address_container">
                                <div>
                                    <div>
                                        <p className='name_user_profile'>City</p>
                                        <p className='name_onAddress'>Coimbatore</p>
                                    </div>
                                    <div>
                                        <p className='name_user_profile'>State</p>
                                        <p className='name_onAddress'>TamilNadu</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <p className='name_user_profile'>Address</p>
                                        <p className='name_onAddress'>No:28 Sri Sankara Garden </p>
                                    </div>
                                    <div>
                                        <p className='name_user_profile'>Pincode</p>
                                        <p className='name_onAddress'>642002</p>
                                    </div>
                                </div>
                            </div>
                            <div className='container_btn_user'>
                                <motion.button whileHover={{ y: -5 }} whileTap={{ y: 0 }} className='btn_edit_user'>Edit Address</motion.button>
                            </div>

                        </div>
                    </div>
                </div>
                <div id="container_order">
                    <p className='history_profile'>Order History</p>
                    <p className='history_des'>Here you can manage your order</p>
                    <div className='input_box_user'>
                        <input type="text" placeholder={`🔍 Enter Your OrderId`} />
                    </div>
                </div>
            </div>
            <EditAddress />
        </>
    )
}

export default Profile