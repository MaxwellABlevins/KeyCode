import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="WEBGi Jewelry" />

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
                                <h3>WEBGi Jewelry</h3>
                                
                                <p>Webgi Jewelry is a premier online destination for exquisite and fashionable jewelry pieces. With a focus on elegance, quality, and craftsmanship, Webgi Jewelry offers a wide selection of jewelry that caters to diverse tastes and occasions. Here's what sets Webgi Jewelry apart:</p>

                                <p>Stunning Designs: Webgi Jewelry showcases stunning and unique designs that capture the essence of elegance and style. From classic and timeless pieces to modern and trendy designs, their collection offers something for everyone.</p>
                                <p>Premium Materials: Webgi Jewelry uses high-quality materials in their creations. Each piece is crafted with precision using precious metals such as sterling silver, gold, and platinum, and adorned with sparkling gemstones, diamonds, pearls, and other precious and semi-precious stones.</p>
                                <p>Exceptional Craftsmanship: Every piece of jewelry from Webgi Jewelry is meticulously crafted by skilled artisans. Their attention to detail ensures the creation of exquisite jewelry that reflects superior craftsmanship and a commitment to excellence.</p>
                                <p>Wide Range of Collections: Webgi Jewelry offers a wide range of collections to suit different preferences and occasions. Whether you're looking for engagement rings, wedding bands, necklaces, bracelets, earrings, or personalized jewelry, you'll find a vast selection to choose from.</p>
                                <p>Customization Options: Webgi Jewelry provides customization options, allowing you to create personalized jewelry pieces that reflect your unique style and sentiments. From engraving initials to selecting birthstones, you can add a personal touch to make your jewelry even more special.</p>
                                <p>Quality Assurance: Webgi Jewelry maintains strict quality standards to ensure that each piece meets the highest level of excellence. Their commitment to quality extends to the sourcing of materials, the crafting process, and the final inspection of every piece of jewelry.</p>
                                <p>Secure Online Shopping: Webgi Jewelry provides a secure and user-friendly online shopping experience. With their encrypted website and secure payment options, you can shop with confidence and have your jewelry delivered right to your doorstep.</p>
                                <p>Customer Satisfaction: Webgi Jewelry values customer satisfaction and strives to provide exceptional service. Their friendly and knowledgeable customer support team is available to assist you with any inquiries, ensuring a smooth and enjoyable shopping experience.</p>
                                <p>Whether you're looking for the perfect engagement ring, a meaningful gift for a loved one, or a stunning piece of jewelry to elevate your style, Webgi Jewelry offers an exquisite selection that combines elegance, quality, and artistry. Explore their collections and indulge in the beauty of finely crafted jewelry.</p>
                           
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