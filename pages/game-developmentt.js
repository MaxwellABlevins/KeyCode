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
                                <h3>Game Development</h3>
                                <p>Embark on a journey where imagination meets technology. Our game development solutions are custom-tailored, bringing your unique ideas to life while providing immersive and thrilling gaming experiences. With a relentless pursuit for perfection, we push boundaries to create games that captivate and fascinate.</p>

                                <ul className="features-details-list">
                                    <li>Lifetime Support</li>
                                    <li>Exclusive design</li>
                                    <li>Overcome Challenges with Us</li>
                                    <li>Providing Superior Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <p>Game development comes with its own set of complex challenges. Whether it's optimizing performance or crafting intricate gaming algorithms, our experienced team is here to tackle these challenges. We turn obstacles into opportunities, ensuring your game is smooth, robust, and ready for action. As your game development partner, we commit to delivering top-notch services that drive your game's success. We focus on creating high-quality, engaging games that cater to your target audience's tastes and preferences. We believe your game deserves nothing less than the best.</p>

                                <div className="features-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do your game development services differentiate from others?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Our game development services are distinguished by our unique blend of creativity, technological expertise, and deep understanding of the gaming industry. We create immersive gaming experiences that reflect your unique vision, while our exclusive designs and strong technical support ensure a seamless, engaging experience for players. Additionally, our commitment to SEO-friendly practices helps your game gain increased visibility in a competitive marketplace.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do you ensure that my game will be visible and reach the intended audience?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Visibility is a key aspect of our development strategy. We employ SEO-friendly practices and app store optimization techniques to increase your game's discoverability. This includes choosing the right keywords, creating engaging game descriptions, and optimizing images and video trailers. Additionally, we aim to create games that not only attract but also retain players through engaging gameplay, compelling design, and constant updates and improvements.                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    Can you assist with complex game development issues?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Certainly! Our team is well-versed in all aspects of game development, from coding complex game mechanics to designing intricate in-game systems. No challenge is too big or too small for us. We leverage our vast experience and technical knowledge to solve any issues that arise, ensuring your game delivers a smooth and captivating experience to all players.
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