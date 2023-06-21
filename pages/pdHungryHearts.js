import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Hungry Hearts Diner Neo" />

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
                                <h3>Hungry Hearts Diner Neo</h3>
                                
                                <p>Hungry Hearts Diner Neo is a heartwarming and immersive restaurant management game that invites you to create delicious dishes and connect with a diverse cast of customers. Step into the role of a diner owner and embark on a culinary journey filled with heartfelt stories. Here's an overview of the game's key features:</p>

                                <p>Restaurant Management: In Hungry Hearts Diner Neo, you'll manage your very own diner. From seating customers to taking orders, preparing meals, and serving hungry patrons, you'll oversee all aspects of running a successful restaurant.</p>
                                <p>Heartfelt Stories: Get to know the customers of your diner and discover their unique backgrounds, dreams, and aspirations. Engage in heartfelt conversations as you serve them, and learn their stories to deepen your connection with each character.</p>
                                <p>Delicious Recipes: Create a wide variety of mouthwatering dishes using the game's extensive recipe book. Experiment with different ingredients and cooking techniques to craft delectable meals that will leave your customers craving for more.</p>
                                <p>Special Requests: Customers may have special requests or dietary preferences. Accommodate their needs by customizing dishes and ensuring their dining experience is enjoyable. Pay attention to their feedback to improve your skills and earn their loyalty.</p>
                                <p>Decorate and Customize: Give your diner a personal touch by decorating and customizing it to reflect your style. Choose from a range of furniture, decorations, and themes to create a cozy and inviting atmosphere that will keep customers coming back for more.</p>
                                <p>Expand Your Menu: As you progress, unlock new recipes and ingredients to expand your menu offerings. Introduce seasonal specialties, daily specials, and unique dishes to keep your customers excited and satisfied with the culinary delights you serve.</p>
                                <p>Time Management: Efficient time management is crucial to keep your customers happy and your diner running smoothly. Juggle multiple tasks, prioritize orders, and handle rush hours to ensure everyone receives prompt and excellent service.</p>
                                <p>Challenge and Achievements: Take on various challenges and earn achievements as you build and grow your diner. From reaching specific sales targets to mastering new recipes, these challenges provide additional goals to strive for and enhance your overall gameplay experience.</p>
                                <p>Engaging Visuals and Soundtrack: Immerse yourself in the charming world of Hungry Hearts Diner Neo. The game features captivating visuals with adorable character designs and a delightful soundtrack that complements the cozy atmosphere of the diner.</p>
                                <p>Relaxing Gameplay: Hungry Hearts Diner Neo offers a relaxing and enjoyable gameplay experience. Take a break from the hectic outside world and lose yourself in the comforting ambiance of the diner as you serve delicious food and forge meaningful connections.</p>
                                <p>Hungry Hearts Diner Neo invites you to create culinary delights, build relationships, and experience heartfelt stories in a charming diner setting. Embark on this delightful journey and serve up happiness, one dish at a time.</p>
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