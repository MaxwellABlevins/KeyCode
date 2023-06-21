import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Krave Mart - Grocery Delivery" />

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
                                <h3>Krave Mart - Grocery Delivery</h3>
                                
                                <p>Krave Mart is a convenient and reliable grocery delivery app that brings groceries right to your doorstep. With a wide selection of fresh produce, pantry staples, household essentials, and more, Krave Mart offers a seamless shopping experience. Here's an overview of its key features:</p>

                                <p>Extensive Product Range: Krave Mart provides an extensive range of grocery items to cater to all your needs. From fresh fruits and vegetables to dairy products, meats, beverages, snacks, and cleaning supplies, you can find everything you need for your kitchen and home.</p>
                                <p>User-Friendly Interface: The app offers a user-friendly interface that makes grocery shopping effortless. You can easily search for specific items, browse different categories, and access detailed product information. The intuitive design ensures a smooth and convenient shopping experience.</p>
                                <p>Flexible Delivery Options: Krave Mart provides flexible delivery options to fit your schedule. You can choose a convenient time slot for your groceries to be delivered, allowing you to plan your day accordingly. Whether you need same-day or next-day delivery, Krave Mart has got you covered.</p>
                                <p>Quick Reorder: The app offers a quick reorder feature that allows you to easily repurchase your frequently bought items. You can save time by accessing your order history and adding items directly to your cart for a swift checkout process.</p>
                                <p>Special Offers and Discounts: Krave Mart features special offers, discounts, and deals on various products, helping you save money on your grocery purchases. You can stay updated on the latest promotions and avail of exciting discounts to make the most of your shopping.</p>
                                <p>Personalized Recommendations: The app uses personalized recommendation algorithms to suggest grocery items based on your preferences and purchase history. This feature helps you discover new products and conveniently find items that match your tastes and dietary requirements.</p>
                                <p>Secure and Reliable Payments: Krave Mart ensures secure and reliable payment options for your grocery orders. You can make payments through various methods, including credit cards, debit cards, mobile wallets, and online banking, with encrypted transactions for enhanced security.</p>
                                <p>Customer Support: Krave Mart provides dedicated customer support to assist you with any queries or concerns. If you have any questions regarding your order, delivery, or product availability, you can reach out to the customer support team through the app for prompt assistance.</p>
                                <p>Freshness and Quality Assurance: Krave Mart is committed to delivering fresh and high-quality groceries. The app works closely with trusted suppliers and ensures that products are carefully selected, stored, and delivered to maintain their freshness and quality.</p>
                                <p>Efficient Order Tracking: You can easily track the status of your grocery order with Krave Mart. From the moment you place your order to its delivery, you can stay informed about its progress, estimated arrival time, and any updates through the app.</p>
                                <p>With Krave Mart, grocery shopping becomes convenient, time-saving, and hassle-free. Experience the ease of getting your groceries delivered right to your doorstep with just a few taps on your phone.</p>
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