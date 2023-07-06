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
                                <h3>SEO & Content</h3>
                                <p>Empower your digital presence with our tailored SEO and content strategies. We craft engaging content that speaks to your audience and optimized SEO tactics that enhance your online visibility. Together, they form a robust strategy that drives organic traffic, boosts engagement, and fuels your business growth.</p>

                                <ul className="features-details-list">
                                    <li>Lifetime Support</li>
                                    <li>High Volume Keyword Indexing</li>
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
                                <p>The world of SEO and content can seem labyrinthine. Our team of experts is equipped to handle these complexities. Whether it's understanding search engine algorithms, creating compelling content, or identifying your audience's preferences, we convert these challenges into strategic opportunities that propel your brand's online presence. As your trusted SEO and content partner, we are committed to delivering services that shape your digital success. We craft engaging content that informs, captivates, and converts your audience, while our strategic SEO techniques ensure that your message reaches your target audience effectively. We believe your brand deserves nothing but the best. </p>

                                <div className="features-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    What makes your SEO and content services unique?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Our SEO and content services stand out due to our personalized approach, lifetime support, and focus on superior service delivery. We tailor our strategies to align with your unique brand voice and business goals. We provide ongoing support, adapting your SEO and content strategies to match the ever-evolving digital landscape. Additionally, we leverage our expertise to turn challenges into opportunities, helping your brand stand out in the digital realm.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How can you ensure my content will reach the right audience?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                We use a strategic, SEO-friendly approach to ensure your content reaches its intended audience. This involves a mix of keyword optimization, meta tag improvements, and structuring content for search engine crawlers. These practices help your content rank higher on search engine result pages, increasing its visibility and driving more organic traffic to your site. Additionally, we focus on creating engaging, relevant content that resonates with your target audience.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    Can you assist with the complexities of SEO and content creation?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Absolutely! We understand the complexities involved in SEO and content creation. Whether it's understanding search engine algorithms, creating compelling content, or identifying your audience's content preferences, our team is equipped to handle these challenges. We transform these complexities into strategic opportunities that elevate your brand's online presence and drive engagement.
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