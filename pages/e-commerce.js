import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
const FeatureDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Feature Details" />

            <div className="features-details-area ptb-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/feature1.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>

                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <h3>E-Commerce Solutions</h3>
                                <p>Venture into the world of online selling with our comprehensive e-commerce solutions. We transform your retail vision into a thriving digital storefront. Our team ensures your e-commerce platform is user-friendly, secure, and perfectly aligned with your business objectives.</p>

                                <ul className="features-details-list">
                                    <li>Lifetime Support</li>
                                    <li>Cutting-Edge Design</li>
                                    <li>Resolve Complexities With Us</li>
                                    <li>Delivering Superior Services</li>
                                    <li>SEO-Friendly Approach</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <p>In the competitive world of online retail, standing out is key. We offer exclusive designs tailored to reflect your brand ethos and captivate your target customers. From intuitive navigation to engaging product displays, we ensure your e-commerce platform is a visual delight that boosts conversions. E-commerce comes with its unique set of challenges. Whether it's integrating payment gateways, managing inventory, or optimizing page load times, our experienced team is here to tackle these challenges. We transform obstacles into strategic opportunities, driving your online business towards success.</p>

                                <div className="features-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do your e-commerce solutions stand out from others?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Our e-commerce solutions are distinguished by our personalized approach, comprehensive support, and commitment to excellence. We customize our solutions to align with your specific business goals and brand ethos. Additionally, we provide lifetime support, ensuring your e-commerce platform stays updated and scalable to meet evolving business needs. With our exclusive design approach and SEO-friendly practices, we enhance the user experience and increase your online visibility.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do you ensure my e-commerce platform will have high visibility and reach the intended audience?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                We employ SEO-friendly practices in designing your e-commerce platform. This includes using appropriate keywords, optimizing site architecture, ensuring quick page load times, and crafting engaging product descriptions. These elements improve your site's ranking on search engines, thereby increasing visibility and organic traffic. Alongside this, we create a user-friendly and visually appealing platform to engage and retain your target audience.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    Can you assist with the complexities of setting up and maintaining an e-commerce platform?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Absolutely! Our team is well-versed in the unique challenges of e-commerce, such as payment gateway integration, inventory management, and website optimization. We tackle these complexities head-on and transform them into opportunities for enhancing your online store. With our robust and efficient e-commerce solutions, we ensure a smooth and hassle-free shopping experience for your customers.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 features-details-image">
                            <img 
                                src="/images/features-details-image/feature2.png" 
                                className="animate__animated animate__fadeInUp" 
                                alt="image" 
                            />
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default FeatureDetails;