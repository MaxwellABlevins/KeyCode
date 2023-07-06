import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="HELM Boots" />

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
                                <h3>HELM Boots</h3>
                                
                                <p>Helm Boots is a renowned footwear brand that specializes in crafting high-quality, handcrafted boots for men and women. With a commitment to impeccable craftsmanship and timeless style, Helm Boots offers a collection of boots that seamlessly blend rugged durability with refined aesthetics. Here's an overview of what makes Helm Boots stand out:</p>

                                <p>Premium Materials: Helm Boots are made using the finest quality materials to ensure exceptional comfort and longevity. From premium full-grain leathers to durable hardware and stitching, every detail is thoughtfully chosen to create boots that will withstand the test of time.</p>
                                <p>Expert Craftsmanship: Each pair of Helm Boots is meticulously handcrafted by skilled artisans who take pride in their work. The boots undergo a meticulous construction process, resulting in superior quality and attention to detail that is evident in every stitch.</p>
                                <p>Classic and Timeless Designs: Helm Boots embraces classic and timeless designs that transcend trends. Their boot styles effortlessly blend ruggedness with sophistication, allowing them to be versatile enough for both casual and more formal occasions.</p>
                                <p>Comfort and Fit: Helm Boots prioritize comfort and fit, ensuring that each pair feels comfortable from the moment they are worn. With features such as cushioned insoles, supportive arches, and carefully designed lasts, Helm Boots provide all-day comfort without compromising on style.</p>
                                <p>Versatility: Whether you're exploring the city streets or venturing into the great outdoors, Helm Boots are designed to adapt to various environments and activities. These boots are versatile companions that can effortlessly transition from everyday wear to more rugged adventures.</p>
                                <p>Attention to Detail: From the stitching patterns to the choice of hardware and subtle branding, Helm Boots pay meticulous attention to detail. These thoughtful touches add to the overall aesthetic appeal and showcase the brand's commitment to quality.</p>
                                <p>Heritage and Authenticity: Helm Boots is a brand rooted in heritage and authenticity. With a passion for craftsmanship and a dedication to preserving traditional bootmaking techniques, Helm Boots creates footwear that embodies the spirit of true craftsmanship.</p>
                                <p>Sustainable Practices: Helm Boots is committed to sustainable practices and responsible sourcing. They strive to minimize their environmental impact by using eco-friendly materials, implementing ethical manufacturing processes, and supporting local artisans.</p>
                                <p>Customer Satisfaction: Helm Boots has earned a loyal following of satisfied customers who appreciate the brand's commitment to quality, style, and exceptional customer service. Their dedication to customer satisfaction is reflected in the long-lasting relationships they build with their clientele.</p>
                                <p>Experience the unmatched quality, timeless style, and exceptional craftsmanship of Helm Boots. Step into a pair of boots that not only elevate your style but also withstand the test of time, allowing you to venture confidently wherever your journey takes you.</p>

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