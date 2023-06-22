import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Crabtree & Evelyn" />

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
                                <h3>Crabtree & Evelyn</h3>
                                
                                <p>Crabtree & Evelyn is a renowned luxury brand that offers a wide range of bath, body, and home products crafted with exquisite ingredients and inspired by nature. With a rich heritage dating back to 1972, Crabtree & Evelyn is synonymous with quality, elegance, and indulgence. Here's an overview of what sets Crabtree & Evelyn apart:</p>

                                <p>Nature-Inspired Formulations: At the heart of Crabtree & Evelyn's products are thoughtfully curated ingredients sourced from nature. From fragrant botanical extracts to nourishing plant-based oils, each formulation is carefully crafted to deliver a luxurious and sensorial experience.</p>
                                <p>Skincare and Bodycare: Crabtree & Evelyn offers a comprehensive range of skincare and bodycare products designed to pamper and rejuvenate the skin. From cleansers, moisturizers, and serums to body lotions, hand creams, and bath gels, their products are tailored to provide effective and indulgent care for all skin types.</p>
                                <p>Fragrances for Every Occasion: Discover a diverse collection of captivating fragrances that evoke different moods and suit various preferences. From fresh and floral scents to warm and spicy aromas, Crabtree & Evelyn's perfumes and colognes are crafted to leave a lasting impression.</p>
                                <p>Home Fragrances and Candles: Create an inviting and cozy ambiance in your home with Crabtree & Evelyn's range of home fragrances and candles. From scented diffusers and room sprays to beautifully scented candles, these products add a touch of luxury and serenity to any space.</p>
                                <p>Beautiful Packaging: The attention to detail extends to Crabtree & Evelyn's elegant and distinctive packaging. Each product is thoughtfully presented, making it a delight to use, display, or give as a gift. The brand's commitment to aesthetics ensures that every item feels like a luxurious treat.</p>
                                <p>Commitment to Sustainability: Crabtree & Evelyn is dedicated to sustainable practices, striving to reduce its environmental footprint. They prioritize responsibly sourced ingredients, eco-friendly packaging, and support ethical practices throughout their supply chain, aligning with the values of conscious consumers.</p>
                                <p>Timeless Elegance: With a blend of classic and modern influences, Crabtree & Evelyn products exude a timeless elegance. Whether it's the delicate patterns on their packaging or the sophisticated scents, the brand captures a sense of refined luxury that resonates with those who appreciate the finer things in life.</p>
                                <p>Global Recognition: Over the years, Crabtree & Evelyn has garnered global recognition for its exceptional products. The brand's commitment to quality and innovation has earned a loyal following, making it a trusted choice for those seeking luxurious skincare, fragrances, and home products.</p>
                                <p>Indulge your senses and elevate your everyday rituals with Crabtree & Evelyn. Immerse yourself in the world of nature-inspired luxury, where exquisite formulations, captivating scents, and elegant packaging come together to create a truly unforgettable experience.</p>

                               
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