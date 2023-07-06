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
                                <h3>Data Analytics</h3>
                                <p>Unleash the power of data with our comprehensive data analytics solutions. We analyze your complex data sets to generate actionable insights that fuel your business strategies. With our data analytics services, make more informed decisions, optimize operations, and drive growth.</p>

                                <ul className="features-details-list">
                                    <li>Lifetime Support</li>
                                    <li>Keytrend Analysis</li>
                                    <li>Resolve Complexities With Us</li>
                                    <li>Delivering Superior Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="separate"></div>

                    <div className="row align-items-center">
                        <div className="col-lg-6 features-details">
                            <div className="features-details-desc">
                                <p>Navigating the world of data can be overwhelming. Our team is here to tackle the complexities of data analytics, be it data cleaning, interpretation, or predictive modelling. We transform these challenges into strategic opportunities, driving your business towards success. As your data analytics partner, we're committed to delivering services that drive your business success. We focus on turning your raw data into actionable insights that inform decision making, optimize operations, and enhance customer experiences. Your business deserves the best, and that's what we're here to deliver. </p>

                                <div className="features-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do your data analytics services stand out from others?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                A1: Our data analytics services stand out due to our comprehensive approach, lifetime support, and commitment to excellence. We turn complex data into simple, actionable insights that empower your decision-making process and business strategies. We provide ongoing support, ensuring your data analytics strategies remain relevant and effective in the face of evolving business and market dynamics.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do you handle the complexities of data analytics?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Our team is equipped to handle the complexities of data analytics, from data cleaning and interpretation to predictive modelling. We use cutting-edge tools and methodologies to analyze your data and derive valuable insights. Moreover, we transform these complexities into strategic opportunities that contribute to your business growth.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How does your SEO-friendly approach work in the context of data analytics?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                In addition to generating valuable insights from your data, we also ensure that your online data content is SEO-optimized. This involves using appropriate keywords, optimizing content structure, and making the data content easily discoverable by search engines. By enhancing your digital visibility, we help drive more organic traffic to your site, extending your business reach and influence.
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