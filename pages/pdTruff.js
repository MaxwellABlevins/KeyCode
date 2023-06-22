import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Truff" />

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
                                <h3>Truff</h3>
                                
                                <p>Truff is a gourmet hot sauce brand that combines the perfect blend of flavor and heat. With its unique and luxurious offerings, Truff has redefined the hot sauce experience. Here's what sets Truff apart from other hot sauces:</p>

                                <p>Premium Ingredients: Truff hot sauces are crafted using only the finest, high-quality ingredients. They blend ripe chili peppers, organic agave nectar, and a medley of spices to create a well-balanced and flavorful sauce that complements a variety of dishes.</p>
                                <p>Unique Flavor Profiles: Truff offers a range of hot sauces with distinctive flavor profiles. From the original Black Truffle Hot Sauce to the Truff Hotter Sauce and White Truffle Limited Release, each sauce delivers a complex combination of flavors that elevate your culinary creations.</p>
                                <p>Black Truffle Infusion: Truff is known for its use of black truffles, which add a rich and earthy flavor to their hot sauces. The infusion of truffle essence enhances the taste and aroma, giving Truff sauces a luxurious and gourmet twist.</p>
                                <p>Heat with Balance: Truff hot sauces strike a perfect balance between flavor and heat. They provide a satisfying kick without overwhelming your taste buds, allowing you to enjoy the intricate flavors of the sauce and the dish it accompanies.</p>
                                <p>Elevate Any Dish: Truff sauces are versatile and can be used to enhance a wide range of dishes. Whether you're drizzling it on pizza, tacos, eggs, or grilled meats, Truff adds a layer of complexity and depth to your favorite foods.</p>
                                <p>Premium Packaging: Truff pays attention to every detail, including its sleek and stylish packaging. The bottles come in a distinctively designed container with a signature truffle-inspired logo, making Truff not only a delicious condiment but also a visually appealing addition to your kitchen.</p>
                                <p>Thoughtful Gifting: Truff hot sauces make for an exceptional gourmet gift. They come beautifully packaged, making them an ideal present for food enthusiasts, hot sauce lovers, or anyone who appreciates culinary delights.</p>
                                <p>Social Impact: Truff is committed to making a positive impact. They support charitable organizations and initiatives focused on ending hunger and improving food security, contributing to a better and more equitable world.</p>
                                <p>Experience the unparalleled taste and luxury of Truff hot sauces. Whether you're a hot sauce aficionado or seeking to elevate your culinary adventures, Truff offers a premium and flavorful experience that will delight your taste buds.</p>

                               
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