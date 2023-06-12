import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Negative" />

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
                                <h3>Negative</h3>
                                
                                <p>Negative Underwear is a modern lingerie brand that redefines comfort and style. With a focus on minimalism, quality materials, and exceptional fit, Negative Underwear offers a collection of undergarments designed for everyday comfort and confidence. Here's an overview of what makes Negative Underwear stand out:</p>

                                <p>Simplicity and Minimalism: Negative Underwear embraces simplicity and minimalism in their designs. Their undergarments feature clean lines, understated details, and a streamlined aesthetic that prioritizes comfort and versatility.</p>
                                <p>Exceptional Fit: Negative Underwear is committed to providing the perfect fit. Their bras, bralettes, and underwear are meticulously designed to offer optimal support, shape, and comfort. The brand recognizes that a well-fitting undergarment can make all the difference in how a person feels throughout the day.</p>
                                <p>Premium Materials: Negative Underwear uses high-quality materials that feel luxurious against the skin. From soft, breathable fabrics to delicate trims and finishes, their attention to detail ensures a comfortable and indulgent wearing experience.</p>
                                <p>Thoughtful Design: Each piece by Negative Underwear is thoughtfully designed with the modern individual in mind. They focus on creating undergarments that seamlessly blend into everyday life, offering a foundation of comfort and confidence for any outfit or occasion.</p>
                                <p>Timeless Style: Negative Underwear embraces a timeless style that transcends fleeting trends. Their pieces exude a sense of understated elegance and sophistication, making them versatile and enduring staples in any lingerie collection.</p>
                                <p>Body Positivity and Inclusivity: Negative Underwear celebrates body positivity and strives to create undergarments that cater to a diverse range of body types and sizes. Their inclusive size range and commitment to representation ensure that everyone can find their perfect fit.</p>
                                <p>Ethical and Sustainable Practices: Negative Underwear is committed to ethical and sustainable practices throughout their supply chain. They prioritize responsible sourcing, fair labor practices, and eco-friendly materials to minimize their environmental impact.</p>
                                <p>Confidence and Empowerment: Negative Underwear believes that comfortable and well-fitting undergarments can empower individuals to feel confident and comfortable in their own skin. Their designs are intended to boost self-assurance and enhance natural beauty.</p>
                                <p>Customer Satisfaction: Negative Underwear values customer satisfaction and aims to provide exceptional service. Their commitment to responsive customer support ensures that customers feel supported and valued throughout their shopping experience.</p>
                                <p>Discover a new standard of comfort and style with Negative Underwear. Experience undergarments that prioritize fit, quality, and simplicity, allowing you to embrace your individuality and feel confident from the inside out.</p>


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