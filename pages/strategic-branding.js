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
                                <h3>Strategic Branding & Marketing</h3>
                                <p>Discover the power of compelling storytelling combined with data-driven strategy. Our strategic branding and marketing solutions are customized to reflect your brand's unique narrative and positioning. We amplify your message, engage your audience, and ultimately drive growth and brand loyalty.</p>

                                <ul className="features-details-list">
                                    <li>Lifetime Support</li>
                                    <li>Exclusive Design</li>
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
                                <p>Your brand essence encapsulated through unique designs. We create distinctive design elements, from logos to marketing collateral, that mirror your brand identity and make you stand out in a crowded market. Every visual detail is crafted to resonate with your brand story and captivate your target audience. Branding and marketing are complex domains filled with challenges. Whether it's defining your brand positioning, understanding customer behavior, or navigating through digital marketing platforms, we're here to simplify the process. We turn challenges into strategic opportunities, steering your brand towards success.</p>

                                <div className="features-details-accordion">
                                    <Accordion preExpanded={['a']}>
                                        <AccordionItem uuid="a">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do your strategic branding and marketing services differ from others?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Our strategic branding and marketing services differentiate by combining compelling storytelling with data-driven strategy. We customize our approach to reflect your brand's unique identity and market position. In addition, we provide ongoing support to ensure your brand stays relevant and competitive, adapting to market trends and customer preferences. Our exclusive designs encapsulate your brand message, while our SEO-optimized strategies increase your brand visibility and engagement.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="b">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    How do you ensure my brand's visibility in a competitive marketplace?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Visibility is an integral part of our branding and marketing strategies. We use SEO-friendly practices to enhance your brand's online presence. This includes optimizing your website and digital content for search engines, using appropriate keywords, meta tags, and user-friendly designs. In addition, we devise comprehensive marketing campaigns to make sure your brand message reaches the right audience, boosting engagement and conversion rates.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>

                                        <AccordionItem uuid="c">
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>
                                                    Can you help resolve the complexities involved in strategic branding and marketing?
                                                    </span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                Absolutely! We understand the challenges and complexities involved in branding and marketing. Our team is adept at defining brand positioning, interpreting consumer behavior, and navigating various digital marketing platforms. We turn these challenges into strategic opportunities, providing solutions that help your brand succeed in the competitive marketplace.
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