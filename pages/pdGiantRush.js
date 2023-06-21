import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Giant Rush!" />

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
                                <h3>Giant Rush!</h3>
                                
                                <p>Giant Rush is an exhilarating and fast-paced game that takes you on an epic adventure of epic proportions. Get ready to run, dodge, and smash your way through a world filled with giant obstacles and challenges. Here's an overview of the game's key features:</p>

                                <p>Thrilling Endless Runner: In Giant Rush, you play as a daring hero on a mission to conquer towering obstacles. The game offers an endless runner experience, where you must navigate through a dynamically generated environment that becomes more challenging as you progress.</p>
                                <p>Fast-Paced Gameplay: The game's fast-paced gameplay keeps you on the edge of your seat. You'll need quick reflexes and precise timing to jump, slide, and smash your way through the colossal barriers and avoid obstacles that stand in your path.</p>
                                <p>Unique Power-ups: Giant Rush features a variety of power-ups to enhance your abilities and help you overcome the massive obstacles. Collect power-ups such as speed boosts, shields, and magnets to gain an advantage and reach new distances.</p>
                                <p>Collectible Characters: Unlock and collect a diverse roster of characters with unique abilities and appearances. Each character brings their own style and personality to the game, allowing you to customize your gameplay experience.</p>
                                <p>Upgradeable Abilities: Improve your hero's skills by collecting coins and upgrading their abilities. Enhance attributes like speed, jumping ability, and smashing power to increase your chances of success and achieve even greater distances.</p>
                                <p>Unlockable Worlds: Giant Rush offers a variety of unlockable worlds with distinct themes and challenges. From bustling cities to treacherous jungles, each world presents its own set of towering obstacles and surprises, keeping the gameplay fresh and exciting.</p>
                                <p>Compete and Challenge Friends: Challenge your friends and compete for high scores on the global leaderboards. Show off your running skills and see who can conquer the tallest obstacles and achieve the longest distances.</p>
                                <p>Vibrant Visuals and Sound Effects: Immerse yourself in the visually stunning world of Giant Rush. The game features vibrant and colorful graphics, accompanied by immersive sound effects that bring the larger-than-life obstacles to life.</p>
                                <p>Free-to-Play: Giant Rush is free to download and play, offering an accessible and enjoyable experience for players of all ages. Jump into the action-packed world of giant obstacles and embark on an unforgettable adventure without any upfront cost.</p>
                                <p>Giant Rush delivers an adrenaline-pumping and action-packed running experience like no other. Dodge towering obstacles, unleash power-ups, and race against your friends as you strive to conquer the giant world in this epic endless runner game.</p>
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