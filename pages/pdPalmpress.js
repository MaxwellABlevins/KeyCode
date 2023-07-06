import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Projects Details" />

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
                                <h3>Palmpress</h3>
                                
                                <p>Palmpress is a portable coffee press that empowers coffee lovers to brew their favorite cup of coffee wherever they go. With its innovative design and user-friendly features, Palmpress offers a unique and convenient coffee brewing experience. Here's what sets Palmpress apart:</p>

                                <p>Compact and Portable: Palmpress is designed for coffee lovers on the move. It's compact, lightweight, and easily fits into your bag or backpack, making it perfect for travel, camping, or brewing coffee on the go.</p>
                                <p>Simple and Intuitive: Brewing coffee with Palmpress is a breeze. Its user-friendly design allows you to make a single cup of coffee with minimal effort. Just add your coffee grounds, hot water, and let the magic happen.</p>
                                <p>Full Immersion Brewing: Palmpress utilizes full immersion brewing, ensuring a rich and flavorful cup of coffee. The coffee grounds steep in hot water, extracting all the delicious flavors and aromas for a satisfying brew.</p>
                                <p>Adjustable Strength: With Palmpress, you have control over the strength of your coffee. By adjusting the steeping time and water-to-coffee ratio, you can customize your brew to suit your taste preferences.</p>
                                <p>Easy to Clean: Palmpress is designed for hassle-free cleaning. After brewing, simply rinse it with water and it's ready to use again. No complicated parts or filters to deal with, making it a convenient choice for coffee enthusiasts.</p>
                                <p>Durable and Reusable: Palmpress is made from high-quality materials, ensuring its durability and longevity. It's a reusable coffee press that eliminates the need for disposable filters or pods, making it an eco-friendly alternative.</p>
                                <p>Versatile and Compatible: Palmpress is compatible with various grind sizes, allowing you to use your favorite coffee beans or grounds. It works well with medium-coarse to medium-fine grinds, giving you the flexibility to brew coffee to your liking.</p>
                                <p>Designed for Enjoyment: Palmpress is not only functional but also aesthetically pleasing. Its sleek and modern design adds style to your coffee brewing ritual, making it a delightful experience from start to finish.</p>
                                <p>Community and Education: Palmpress fosters a community of coffee enthusiasts. They provide educational resources, tips, and recipes to help you elevate your coffee brewing skills and explore the world of specialty coffee.</p>
                                <p>Experience the joy of brewing coffee on your terms with Palmpress. Whether you're at home, in the office, or out in nature, Palmpress empowers you to enjoy a delicious cup of coffee anytime, anywhere.</p>

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