import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="True Links Wear" />

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
                                <h3>True Links Wear</h3>
                                
                                <p>True Links Wear is a premium golf shoe brand that combines style, comfort, and performance. Designed specifically for golf enthusiasts, True Links Wear offers a range of golf shoes that provide a perfect blend of functionality and fashion. Here's an overview of the key features and benefits of True Links Wear:</p>

                                <p>Comfortable Fit: True Links Wear golf shoes are crafted with utmost care to ensure a comfortable fit. With features like anatomical design, cushioned insoles, and breathable materials, these shoes provide exceptional comfort even during long hours on the golf course.</p>
                                <p>Stylish Design: True Links Wear understands that golfers not only seek comfort but also want to look stylish on the greens. The brand offers a variety of contemporary designs and color options that allow golfers to express their personal style while maintaining a professional appearance.</p>
                                <p>Premium Materials: The golf shoes from True Links Wear are made from high-quality materials that are built to last. From premium leather uppers to durable outsoles, these shoes are designed to withstand the rigors of the golf course and provide long-lasting performance.</p>
                                <p>Excellent Traction: Traction is crucial for golfers to maintain stability and grip during swings. True Links Wear golf shoes feature innovative sole designs and traction technologies that provide excellent grip on various terrains, ensuring stability and confident footwork during the game.</p>
                                <p>Waterproof Construction: Golfers often encounter wet conditions on the course, and True Links Wear understands the importance of keeping feet dry. Many of their golf shoe models feature waterproof construction, keeping your feet protected and comfortable, even in rainy or dewy conditions.</p>
                                <p>Versatile Performance: True Links Wear golf shoes are not just limited to the golf course. With their stylish designs and exceptional comfort, these shoes can be worn off the course as well, making them a versatile footwear option for golfers who appreciate both performance and style.</p>
                                <p>Customizable Fit: True Links Wear offers shoes with adjustable lacing systems and innovative closure technologies that allow golfers to customize the fit according to their preferences. This ensures a secure and personalized fit for maximum comfort and support.</p>
                                <p>Proven Performance: True Links Wear golf shoes have been trusted by professional golfers and amateurs alike. With a reputation for delivering high-quality footwear, True Links Wear has established itself as a brand that offers performance-driven shoes that enhance the overall golfing experience.</p>
                                <p>Whether you're a professional golfer or an avid enthusiast, True Links Wear golf shoes provide the perfect combination of comfort, style, and performance. Step onto the course with confidence and style, knowing that your feet are supported by top-quality footwear from True Links Wear.</p>

                               
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