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
                                <h3>Web & App Development</h3>
                                <p>Experience the art of technology fused with innovation as we construct seamless integrations for web and app development. We strive to deliver an unparalleled experience, embracing the harmony of form and function. We provide exceptional solutions that go beyond the boundaries of the ordinary, with no exceptions.</p>

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
                                <p>We offer exclusive designs that blend aesthetics with efficiency, custom-tailored to fit your business' unique persona. Our mission is to make your web and app interfaces intuitive and engaging, keeping users captivated and ensuring they return time and again. In this digital age, visibility is paramount. Our web and app development strategies are firmly rooted in SEO-friendly practices. We meticulously embed SEO elements to ensure your platform ranks high on search engines, ultimately driving organic traffic and boosting your business reach.</p>

                                <div className="features-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    What differentiates your web and app development services from others?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Our web and app development services stand out for their dedication to innovation, user-centric design, and business-specific customization. We combine state-of-the-art technology with our vast industry experience to create solutions that are not only visually appealing but also functional and efficient. We also offer ongoing lifetime support to ensure that your digital platforms remain up-to-date and continue to deliver an optimal user experience.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do you ensure my website or app will be SEO-friendly?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Search engine optimization is deeply ingrained in our development process. We follow the best practices recommended by major search engines such as Google, including the use of meta-tags, appropriate keyword density, mobile optimization, and fast loading speeds. In addition, we ensure that your website or app has a user-friendly layout and engaging content which search engines value when ranking websites.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    Can you help us with complex web and app development issues?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Absolutely! Our team thrives on resolving complex challenges. We have extensive experience and skills in various aspects of web and app development, including complex programming, integration issues, and crafting bespoke solutions. No matter what challenges you're facing, we're confident that we can turn these obstacles into opportunities for enhancing your digital presence.
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