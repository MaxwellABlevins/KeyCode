import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Cricrush" />

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
                                <h3>Cricrush</h3>
                                
                                <p>Cricrush is an innovative mobile app designed for cricket enthusiasts, providing a comprehensive platform for all things cricket. Whether you're a passionate fan, a player, or a fantasy league participant, Cricrush offers a range of features to enhance your cricketing experience. Here's what makes Cricrush stand out:</p>

                                <p>Live Match Updates: Cricrush keeps you updated with real-time match scores, ball-by-ball commentary, and detailed statistics. You can stay informed about ongoing matches and follow your favorite teams and players with ease.</p>
                                <p>Fantasy Cricket: Cricrush provides an exciting fantasy cricket feature, allowing you to create your dream team and compete with friends or other cricket enthusiasts. Test your cricketing knowledge and strategic skills by managing your team and earning points based on player performances.</p>
                                <p>Player Profiles and Statistics: Cricrush offers in-depth player profiles and comprehensive statistics, allowing you to delve into the performance history of your favorite players. Explore batting averages, bowling figures, and other key metrics to gain insights into player performances.</p>
                                <p>News and Articles: Stay updated with the latest cricket news, match previews, post-match analysis, and expert opinions through Cricrush's news and articles section. Get access to engaging cricket content that enriches your understanding of the game.</p>
                                <p>Match Highlights: Relive the most exciting moments of cricket matches with Cricrush's match highlights. Catch up on the key events, boundaries, wickets, and game-changing moments to stay connected to the game, even if you missed the live action.</p>
                                <p>Upcoming Fixtures and Series: Cricrush provides a comprehensive calendar of upcoming cricket fixtures, including international matches, domestic tournaments, and series. Plan your cricket viewing schedule in advance and never miss an important match.</p>
                                <p>Social Engagement: Connect with fellow cricket fans through Cricrush's social engagement features. Share your thoughts, predictions, and reactions to matches with a vibrant community of cricket enthusiasts, fostering discussions and camaraderie.</p>
                                <p>Player Rankings: Explore the official ICC player rankings and keep track of the top-ranked players in various cricket formats. Stay informed about the best performers across batting, bowling, and all-rounder categories.</p>
                                <p>Notifications and Alerts: Customize your preferences to receive match notifications, score updates, and other cricket-related alerts. Cricrush ensures that you never miss a crucial match or a noteworthy performance.</p>
                                <p>User-Friendly Interface: Cricrush offers a user-friendly interface with intuitive navigation, making it easy for cricket fans of all ages to navigate through the app and access the desired features and information.</p>
                                <p>Download Cricrush and immerse yourself in the world of cricket. Whether you're following live matches, managing your fantasy team, or exploring player statistics, Cricrush caters to your cricketing needs and keeps you engaged with the sport you love.</p>

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