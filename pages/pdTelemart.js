import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Telemart - Online Shopping App" />

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
                                <h3>Telemart - Online Shopping App</h3>
                                
                                <p>Telemart is an online shopping app that offers a wide range of products for users to browse, select, and purchase conveniently from the comfort of their own homes. Here's a description of the Telemart online shopping app and its key features:</p>

                                <p>Extensive Product Catalog: Telemart provides a vast catalog of products across various categories, including electronics, fashion, home appliances, beauty, and more. Users can explore an extensive range of items, ensuring they find what they need.</p>
                                <p>User-Friendly Interface: The app offers a user-friendly interface that makes navigation and browsing products effortless. Users can easily search for specific items, filter results, and access detailed product information.</p>
                                <p>Secure Purchasing: Telemart ensures a secure and reliable shopping experience. Users can make purchases through multiple payment options, including credit cards, debit cards, net banking, and digital wallets, with encrypted transactions for data protection.</p>
                                <p>Deals and Discounts: The app features exclusive deals, discounts, and seasonal offers to provide users with cost-effective shopping experiences. Users can stay updated on the latest promotions and save money on their purchases.</p>
                                <p>Personalized Recommendations: Telemart utilizes personalized recommendation algorithms to suggest products tailored to each user's preferences and browsing history. This feature enhances the shopping experience by showcasing relevant items that match the user's interests.</p>
                                <p>Wishlist and Favorites: Users can create a wishlist or mark items as favorites within the app. This allows users to save products they are interested in for future reference and quick access, making it easier to track and purchase desired items.</p>
                                <p>Order Tracking: Telemart provides real-time order tracking, enabling users to stay informed about the status and location of their packages. Users can track their orders from the time of purchase until delivery, ensuring transparency throughout the process.</p>
                                <p>Customer Support: The app offers reliable customer support to assist users with their queries, concerns, and order-related issues. Users can reach out to customer support through various channels, such as phone, email, or live chat, ensuring a smooth shopping experience.</p>
                                <p>Ratings and Reviews: Telemart incorporates ratings and reviews for products, allowing users to make informed decisions based on the experiences and opinions of other shoppers. Users can read and contribute to the community by providing feedback and reviews for purchased items.</p>
                                <p>Seamless Returns and Refunds: In case of any dissatisfaction or issues with the received products, Telemart provides a hassle-free return and refund process. Users can initiate return requests and track the progress of their returns through the app.</p>
                           
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