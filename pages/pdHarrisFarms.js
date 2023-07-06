import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Harris Farms" />

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
                                <h3>Harris Farms</h3>
                                
                                <p>Harris Farms is a reputable agricultural company that has been a trusted name in the farming industry for generations. With a commitment to quality, sustainability, and innovation, Harris Farms offers a wide range of agricultural products and services. Here's an overview of what makes Harris Farms stand out:</p>

                                <p>Rich Heritage: With a history that spans over 80 years, Harris Farms has built a legacy of excellence in agriculture. The company's deep-rooted experience and knowledge in farming contribute to their reputation as industry leaders.</p>
                                <p>Quality Products: Harris Farms prides itself on delivering high-quality agricultural products. From premium fruits and vegetables to top-grade eggs and poultry, their commitment to quality ensures that customers receive fresh, nutritious, and flavorful produce.</p>
                                <p>Sustainable Practices: Harris Farms is dedicated to sustainable farming practices that protect the environment and promote long-term sustainability. They prioritize responsible water usage, soil conservation, and the implementation of eco-friendly techniques throughout their operations.</p>
                                <p>Innovation and Technology: Harris Farms embraces innovation and technology to enhance productivity and efficiency. From state-of-the-art farming equipment to advanced irrigation systems, they leverage the latest tools and practices to optimize their farming processes.</p>
                                <p>Animal Welfare: As stewards of the land, Harris Farms places a strong emphasis on animal welfare. They prioritize the well-being and care of their livestock, ensuring that their animals are raised in humane conditions and provided with proper nutrition and veterinary care.</p>
                                <p>Community Engagement: Harris Farms actively engages with local communities and supports initiatives that promote education, environmental conservation, and sustainable agriculture. They believe in giving back to the communities they operate in and strive to make a positive impact.</p>
                                <p>Vertical Integration: With a vertically integrated approach, Harris Farms has control over every aspect of their operations. From farming and harvesting to processing and distribution, this streamlined approach allows them to maintain quality and traceability throughout the supply chain.</p>
                                <p>Forward-Thinking Leadership: Under the guidance of visionary leaders, Harris Farms continues to evolve and adapt to the changing landscape of agriculture. Their forward-thinking approach enables them to stay at the forefront of industry trends and meet the demands of a dynamic marketplace.</p>
                                <p>Commitment to Food Safety: Harris Farms prioritizes food safety, implementing rigorous quality control measures and adhering to strict industry standards. They have robust protocols in place to ensure that their products meet the highest safety and hygiene standards.</p>
                                <p>Customer Satisfaction: Harris Farms' dedication to excellence extends to their commitment to customer satisfaction. They strive to exceed customer expectations by consistently delivering top-quality products and providing exceptional service.</p>
                                <p>Experience the excellence, sustainability, and commitment to quality that Harris Farms brings to the agricultural industry. From farm-fresh produce to responsible farming practices, Harris Farms is dedicated to nourishing communities and shaping the future of farming.</p>

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