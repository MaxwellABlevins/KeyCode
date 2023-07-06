import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Bridge Race" />

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
                                <h3>Bridge Race</h3>
                                
                                <p>Bridge Race is an exciting and challenging game that tests your strategic thinking and problem-solving skills. It offers a unique gameplay experience that keeps you engaged and entertained. Here's an overview of the game's key features:</p>
                                
                                <p>Multiple Game Modes: Bridge Race provides various game modes to keep the gameplay fresh and exciting. Whether you prefer solo challenges or multiplayer competitions, the game offers different modes to suit your preferences and provide endless entertainment.</p>
                                <p>Strategic Bridge Building: The core gameplay revolves around constructing bridges to overcome obstacles and reach the finish line. You'll need to carefully plan and build sturdy bridges using limited resources while considering factors like length, stability, and weight distribution.</p>
                                <p>Physics-Based Challenges: Bridge Race incorporates realistic physics simulations, adding a layer of complexity to the gameplay. You'll encounter dynamic elements, such as moving platforms and swinging pendulums, that require precise bridge construction to navigate successfully.</p>
                                <p>Unique Environments: The game features a variety of unique and visually stunning environments for you to explore and conquer. Each environment presents its own set of challenges, from icy terrains to floating islands, providing a diverse and engaging gaming experience.</p>
                                <p>Customization Options: Bridge Race offers customization options to personalize your gameplay. You can customize the appearance of your bridge and character, allowing you to showcase your creativity and unique style as you compete against other players.</p>
                                <p>Leaderboards and Rankings: Compete against players from around the world and climb the global leaderboards. Bridge Race ranks your performance based on completion time, bridge efficiency, and other criteria, providing a competitive atmosphere that motivates you to improve and strive for the top.</p>
                                <p>Social Interaction: Engage with friends and other players through in-game chat, challenges, and competitions. You can invite friends to play together or join multiplayer races to test your bridge-building skills against real opponents, fostering a sense of community and friendly competition.</p>
                                <p>Regular Updates: The game developers consistently provide updates, introducing new challenges, game modes, and features to keep the gameplay fresh and exciting. You can expect a continuous stream of content and improvements to enhance your gaming experience.</p>
                                <p>Intuitive Controls: Bridge Race offers intuitive touch controls that make building bridges and navigating the game's obstacles easy and enjoyable. The user-friendly interface ensures a smooth and responsive gameplay experience on both mobile devices and tablets.</p>
                                <p>Bridge Race is a thrilling and addictive game that offers a unique blend of strategy, physics, and competition. Challenge yourself, construct amazing bridges, and race to victory in this captivating gaming experience.</p>
                           
                                <div className="project-details-information">
                                    <div className="single-info-box">
                                        <h4>Happy Client</h4>
                                        <p>John Doe</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Category</h4>
                                        <p>Portfolio, Personal</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Date</h4>
                                        <p>February 28, 2022</p>
                                    </div>

                                    <div className="single-info-box">
                                        <h4>Share</h4>
                                        <ul>
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <Icon.Facebook />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.twitter.com/" target="_blank">
                                                    <Icon.Twitter />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                    <Icon.Instagram />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank"> 
                                                    <Icon.Linkedin />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="single-info-box">
                                        <a href="#" className="btn btn-primary" target="_blank">Live Preview</a>
                                    </div>
                                </div>
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