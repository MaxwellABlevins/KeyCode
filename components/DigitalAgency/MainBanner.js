import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <>
            <div className="agency-main-banner">
            <div>
            <img src="/images/map2.png" alt="image" />
            </div>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-banner-content">
                                <span className="sub-title">WE PROVIDE CREATIVE &</span>
                                <h1>Innovative IT Solutions for a Digitally Progressive World</h1>
                                <p>Keycode Syntax is a full-service digital agency that specializes in creating beautiful and functional websites, mobile applications, game developments, and digital marketing campaigns. We have a team of experienced and highly skilled professionals who are dedicated to helping our clients achieve their business goals.</p>

                                <Link href="/contact" className="btn btn-secondary">
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-banner-image">
                                <img src="/images/banner-image/main-pic.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
            </div>
        </>
    );
}

export default MainBanner;