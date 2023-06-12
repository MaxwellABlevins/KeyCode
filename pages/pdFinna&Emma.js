import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Finn & Emma" />

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
                                <h3>Finn & Emma</h3>
                                
                                <p>Finn & Emma is a delightful baby and toddler brand that offers a range of organic and sustainably made products. With a focus on quality, style, and eco-consciousness, Finn & Emma provides parents with a thoughtful selection of clothing, toys, and accessories for their little ones. Here's an overview of what makes Finn & Emma stand out:</p>

                                <p>Organic Materials: Finn & Emma uses only the finest organic materials to create their products. From organic cotton clothing to eco-friendly wood and non-toxic dyes, every item is made with the utmost care and consideration for your child's health and well-being.</p>
                                <p>Safe and Non-Toxic: The safety of your child is a top priority for Finn & Emma. Their products are free from harmful chemicals and toxins, ensuring that your little one can play, explore, and snuggle with complete peace of mind.</p>
                                <p>Stylish Designs: Finn & Emma combines comfort and style to create adorable and trendy designs. From whimsical prints to modern patterns, their clothing and accessories are as fashionable as they are comfortable.</p>
                                <p>Gender-Neutral Options: Finn & Emma offers a range of gender-neutral options, allowing parents to choose items that break away from traditional gender stereotypes. This inclusivity ensures that all children can express themselves freely and authentically.</p>
                                <p>Handcrafted Toys: The brand's handcrafted toys are made with love and attention to detail. From plush toys to wooden rattles, these toys engage your child's senses and promote imaginative play while being safe and sustainable.</p>
                                <p>Sustainable Production: Finn & Emma is committed to sustainable production practices. They prioritize fair trade principles, work with artisans, and support ethical labor practices, ensuring that their products are not only good for your child but also for the planet.</p>
                                <p>Long-Lasting Quality: Finn & Emma creates products that are made to last. Their durable construction and high-quality materials ensure that these cherished items can be passed down from one child to another, making them sustainable in both design and longevity.</p>
                                <p>Eco-Friendly Packaging: Finn & Emma extends their commitment to sustainability to their packaging. They use recycled and recyclable materials, minimizing waste and reducing their environmental footprint.</p>
                                <p>Thoughtful Gifting: Finn & Emma products make for thoughtful and eco-friendly gifts for baby showers, birthdays, and special occasions. With their charming packaging and beautiful craftsmanship, these gifts are sure to bring joy to both children and parents alike.</p>
                                <p>Parental Satisfaction: Finn & Emma values the satisfaction of their customers. They strive to provide exceptional customer service, ensuring that parents feel supported and delighted throughout their journey with the brand.</p>
                                <p>Experience the perfect blend of comfort, style, and sustainability with Finn & Emma. Dress your little one in organic, safe, and fashionable clothing while providing them with safe and engaging toys that will inspire their imagination and leave a positive impact on the planet.</p>


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