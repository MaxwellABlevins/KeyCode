import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="XWard Pay" />

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
                                <h3>XWard Pay</h3>
                                
                                <p>Xward Pay is a cutting-edge payment solution that revolutionizes the way businesses and individuals send and receive money. With its secure and convenient platform, Xward Pay offers a wide range of features and benefits. Here's what makes Xward Pay stand out:</p>
                                
                                <p>Seamless Transactions: Xward Pay ensures seamless transactions for businesses and customers alike. With its user-friendly interface and intuitive navigation, users can easily send and receive payments with just a few clicks.</p>
                                <p>Global Reach: Xward Pay allows businesses to expand their reach globally by accepting payments from customers around the world. It supports multiple currencies, making it convenient for international transactions.</p>
                                <p>Security and Privacy: Xward Pay prioritizes the security and privacy of users' financial information. It employs robust encryption technology to safeguard sensitive data, providing peace of mind to both businesses and customers.</p>
                                <p>Multiple Payment Options: Xward Pay supports a variety of payment options, including credit cards, debit cards, and digital wallets. It provides flexibility for customers to choose their preferred payment method, enhancing the convenience of transactions.</p>
                                <p>Payment Gateway Integration: Xward Pay seamlessly integrates with various e-commerce platforms and payment gateways, making it easy for businesses to incorporate the payment solution into their existing systems and processes.</p>
                                <p>Transaction Analytics: Xward Pay provides comprehensive transaction analytics and reporting features. Businesses can gain valuable insights into their sales performance, customer behavior, and revenue trends, empowering them to make data-driven decisions.</p>
                                <p>Customer Support: Xward Pay offers reliable customer support to assist businesses and customers with their inquiries and concerns. Their dedicated support team is available to provide prompt assistance and ensure a smooth payment experience.</p>
                                <p>Recurring Billing: Xward Pay includes a recurring billing feature that enables businesses to set up automatic and scheduled payments for subscription-based services or recurring purchases. This streamlines the billing process and improves customer retention.</p>
                                <p>Mobile-Friendly: Xward Pay is optimized for mobile devices, allowing users to make payments on the go. The responsive design ensures a seamless experience across smartphones and tablets, enhancing accessibility and convenience.</p>
                                <p>Cost-Effective Solutions: Xward Pay offers competitive pricing plans tailored to meet the needs of businesses of all sizes. With transparent pricing and no hidden fees, businesses can optimize their payment processing costs and maximize their revenue.</p>
                                <p>Experience the future of payments with Xward Pay. Whether you're a business owner seeking a reliable payment solution or a customer looking for a secure and convenient way to make transactions, Xward Pay has you covered.</p>

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