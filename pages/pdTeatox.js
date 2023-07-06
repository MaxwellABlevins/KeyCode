import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Teatox" />

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
                                <h3>Teatox</h3>
                                
                                <p>Teatox Australia offers a range of premium and all-natural tea blends designed to support your wellness journey. With a focus on promoting detoxification, weight management, and overall health, Teatox Australia provides high-quality tea products that are made with the finest ingredients. Here's what makes Teatox Australia stand out:</p>

                                <p>Premium Tea Blends: Teatox Australia carefully curates tea blends using a combination of traditional herbal wisdom and modern wellness practices. Each blend is crafted with premium tea leaves, herbs, and botanicals, ensuring a delightful and beneficial tea-drinking experience.</p>
                                <p>All-Natural Ingredients: Teatox Australia is committed to using only the highest quality and all-natural ingredients. Their teas are free from artificial additives, preservatives, and artificial flavors, allowing you to enjoy the pure goodness of nature in every cup.</p>
                                <p>Detox and Cleansing: Teatox Australia offers tea blends specifically formulated to support detoxification and cleansing. These blends help to flush out toxins, support digestion, and promote a healthy metabolism, providing a refreshing boost to your wellness routine.</p>
                                <p>Weight Management: Teatox Australia provides tea blends that can assist in achieving your weight management goals. These blends are carefully crafted to boost metabolism, control appetite, and support healthy digestion, helping you maintain a balanced and healthy weight.</p>
                                <p>Wellness and Relaxation: Teatox Australia recognizes the importance of self-care and relaxation. They offer blends infused with calming herbs and botanicals that can help promote relaxation, reduce stress, and support overall well-being.</p>
                                <p>Supportive Community: Teatox Australia fosters a supportive and inclusive community centered around wellness. They provide educational resources, tips, and inspiration to help you on your wellness journey, and encourage you to share your experiences and connect with like-minded individuals.</p>
                                <p>Sustainable Practices: Teatox Australia is committed to sustainability and environmental stewardship. They strive to minimize their ecological footprint by using eco-friendly packaging materials and promoting responsible sourcing practices.</p>
                                <p>Easy Online Ordering: Teatox Australia offers a user-friendly website that allows for easy and convenient online ordering. You can explore their range of teas, read detailed product descriptions, and make your selection with just a few clicks.</p>
                                <p>Customer Satisfaction: Teatox Australia prioritizes customer satisfaction and aims to provide exceptional service. Their dedicated customer support team is available to assist with any inquiries or concerns, ensuring a positive and enjoyable tea experience.</p>
                                <p>Experience the goodness of natural tea blends with Teatox Australia. Whether you're seeking a refreshing detox, support in weight management, or simply a moment of relaxation, their premium teas are crafted to enhance your well-being and nourish your body and mind.</p>

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