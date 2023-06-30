import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Projects = () => {
    return (
        <>
            <div className="ml-projects-area pt-0 ptb-80">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <h2>Proud Projects That Make Us Stand Out</h2>
                        <div className="bar"></div>
                        <p>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <h2 className="section-title-small ">Apps</h2>

                <div className="container-fluid">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                        modules={[Pagination, Autoplay]}
                        className="ml-projects-slides"
                    >


                        <SwiperSlide>
                            <div className="single-ml-projects-box AppIMG">
                                <img src="/images/Dawaii.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdDawaii">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box AppIMG">
                                <img src="/images/Telemart.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdTelemart">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box AppIMG">
                                <img src="/images/Krave.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdKrave">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box AppIMG">
                                <img src="/images/Reconstruct.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdReconstruct">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

                <h2 className="section-title-small">Games</h2>

                <div className="container-fluid">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 6000,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                        modules={[Pagination, Autoplay]}
                        className="ml-projects-slides"
                    >
                        <SwiperSlide>
                            <div className="single-ml-projects-box">

                                <img src="/images/BridgeRace.png" alt="image" />

                                <img src="/images/Dawaai1.webp" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdBridgeRace">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/Bottle.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdBottle">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/OnceUpon.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdTower">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/GiantRush.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdGiantRush">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-ml-projects-box">
                                <img src="/images/HungryHearts.png" alt="image" />
                                <div className="plus-icon">
                                    <Link href="/pdHungryHearts">
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <h2 className="section-title-small">Websites</h2>

<div className="container-fluid">
    <Swiper
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
        }}
        breakpoints={{
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            }
        }}
        modules={[Pagination, Autoplay]}
        className="ml-projects-slides"
    >
        <SwiperSlide>
            <div className="single-ml-projects-box">
                <img src="/images/RawGear.png" alt="image" />
                <div className="plus-icon">
                    <Link href="/pdRawGear">
                        <span></span>
                    </Link>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="single-ml-projects-box">
                <img src="/images/TeaTox.png" alt="image" />
                <div className="plus-icon">
                    <Link href="/pdTeaTox">
                        <span></span>
                    </Link>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="single-ml-projects-box">
                <img src="/images/Truelink.png" alt="image" />
                <div className="plus-icon">
                    <Link href="/pdTrueLink">
                        <span></span>
                    </Link>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="single-ml-projects-box">
                <img src="/images/Weom.png" alt="image" />
                <div className="plus-icon">
                    <Link href="/pdWeom">
                        <span></span>
                    </Link>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="single-ml-projects-box">
                <img src="/images/Truff.png" alt="image" />
                <div className="plus-icon">
                    <Link href="/pdTruff">
                        <span></span>
                    </Link>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
</div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default Projects;