import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa6'
import { Avatar } from 'flowbite-react';
import proPic from "../assets/profile.jpg";

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our customers</h2>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Absolutely thrilled with my experience on this book website! As an avid reader, I'm always on the lookout for new titles, and this platform exceeded my expectations. Not only did I find the book I'd been searching for, but the transaction was seamless, and my order arrived promptly.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Shubham Jamliya</h5>
                                <p className='text-base'>Student,IPS academy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Absolutely thrilled with my experience on this book website! As an avid reader, I'm always on the lookout for new titles, and this platform exceeded my expectations. Not only did I find the book I'd been searching for, but the transaction was seamless, and my order arrived promptly.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Vivek Gupta</h5>
                                <p className='text-base'>Student,IPS academy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Absolutely thrilled with my experience on this book website! As an avid reader, I'm always on the lookout for new titles, and this platform exceeded my expectations. Not only did I find the book I'd been searching for, but the transaction was seamless, and my order arrived promptly.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Sneha Karn</h5>
                                <p className='text-base'>Student,IPS academy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Absolutely thrilled with my experience on this book website! As an avid reader, I'm always on the lookout for new titles, and this platform exceeded my expectations. Not only did I find the book I'd been searching for, but the transaction was seamless, and my order arrived promptly.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Shubham Jamliya</h5>
                                <p className='text-base'>Student,IPS academy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Absolutely thrilled with my experience on this book website! As an avid reader, I'm always on the lookout for new titles, and this platform exceeded my expectations. Not only did I find the book I'd been searching for, but the transaction was seamless, and my order arrived promptly.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Shubham Jamliya</h5>
                                <p className='text-base'>Student,IPS academy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Absolutely thrilled with my experience on this book website! As an avid reader, I'm always on the lookout for new titles, and this platform exceeded my expectations. Not only did I find the book I'd been searching for, but the transaction was seamless, and my order arrived promptly.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Shubham Jamliya</h5>
                                <p className='text-base'>Student,IPS academy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Absolutely thrilled with my experience on this book website! As an avid reader, I'm always on the lookout for new titles, and this platform exceeded my expectations. Not only did I find the book I'd been searching for, but the transaction was seamless, and my order arrived promptly.</p>
                                <Avatar img={proPic} alt="avatar of Jese" rounded className='w-10 mb-4' />
                                <h5 className='text-lg font-medium'>Shubham Jamliya</h5>
                                <p className='text-base'>Student,IPS academy</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Review
