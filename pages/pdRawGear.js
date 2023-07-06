import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Raw Gear" />

            <div className="project-details-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="project-details-image">
                                <img src="/images/works-image/works-image1.jpg" alt="work" /> 
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="project-details-image">
                                <img src="/images/Dawaai1.webp" alt="work" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="project-details-image">
                                <img src="/images/works-image/works-image4.jpg" alt="work" /> 
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="project-details-image">
                                <img src="/images/works-image/works-image3.jpg" alt="work" /> 
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="project-details-desc">
                                <h3>Raw Gear</h3>
                                
                                <p>Raw Gear is a premium fitness apparel brand that combines style, functionality, and durability. Designed for athletes and fitness enthusiasts, Raw Gear offers a range of high-performance activewear and accessories. Here's an overview of what sets Raw Gear apart:</p>

                                <p>Quality Materials: Raw Gear uses top-quality materials to ensure long-lasting performance. From moisture-wicking fabrics to breathable and stretchable blends, their activewear is designed to keep you comfortable during intense workouts.</p>
                                <p>Functional Design: Raw Gear's apparel is carefully designed with functionality in mind. Their clothing features ergonomic cuts, strategic ventilation, and reinforced stitching to enhance your range of motion and provide maximum support where you need it most.</p>
                                <p>Performance Enhancement: With Raw Gear, you can experience improved performance. Their compression gear offers muscle support and reduces muscle fatigue, allowing you to push your limits and reach new heights in your fitness journey.</p>
                                <p>Stylish Aesthetics: Raw Gear combines functionality with style. Their apparel features sleek designs, bold colors, and modern patterns that will make you look and feel confident both inside and outside the gym.</p>
                                <p>Versatile Options: Raw Gear offers a versatile range of activewear for various types of workouts and activities. From lightweight shorts and leggings to moisture-wicking tops and jackets, you can find the perfect gear for any exercise routine.</p>
                                <p>Comfortable Fit: Raw Gear prioritizes comfort in their designs. With their attention to detail and use of stretchable materials, their apparel offers a snug and comfortable fit that moves with your body during workouts.</p>
                                <p>Durable Construction: Raw Gear is committed to delivering products that withstand rigorous training. Their gear is built to last, with reinforced seams and high-quality construction that can handle the demands of intense workouts.</p>
                                <p>Accessory Selection: Raw Gear also offers a range of fitness accessories to complement your workout routine. From gym bags and water bottles to resistance bands and training gloves, their accessories are designed to enhance your fitness experience.</p>
                                <p>Active Lifestyle Support: Raw Gear is more than just an apparel brand. They inspire and support an active lifestyle, providing resources, tips, and motivation to help you achieve your fitness goals and maintain a healthy lifestyle.</p>
                                <p>Customer Satisfaction: Raw Gear is dedicated to ensuring customer satisfaction. They strive to provide exceptional service, from the quality of their products to their responsive customer support, ensuring that you have a positive experience with the brand.</p>
                                <p>Elevate your fitness journey with Raw Gear's premium activewear and accessories. Experience the perfect blend of style, functionality, and durability, allowing you to perform at your best and look great while doing it.</p>

                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Happy Client</h4>
                                        <p>John Doe</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Portfolio, Personal</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <p>February 28, 2022</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <Icon.Facebook />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.twitter.com/" target="_blank">
                                                    <Icon.Twitter />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                    <Icon.Instagram />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank"> 
                                                    <Icon.Linkedin />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <a href="#" className="btn btn-primary" target="_blank">Live Preview</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
            <Footer />
        </>
    )
}

export default ProjectsDetails;