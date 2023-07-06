import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Once Upon a Tower" />

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
                                <h3>Once Upon a Tower</h3>
                                
                                <p>Once Upon a Tower is an exciting and enchanting game that takes you on a thrilling adventure. It combines elements of action, puzzle-solving, and strategy to deliver a captivating gameplay experience. Here's an overview of the game's key features:</p>

                                <p>Escape from the Tower: In Once Upon a Tower, you play as a brave princess trapped at the top of a tower. Your goal is to escape the tower by descending through its treacherous levels. Face various challenges, overcome obstacles, and unravel the mysteries of the tower as you progress.</p>
                                <p>Dynamic Gameplay: The game features dynamic gameplay that keeps you engaged and on your toes. Each level presents unique challenges and hazards, requiring quick reflexes, precise timing, and strategic decision-making to navigate safely.</p>
                                <p>Upgrade and Unlock Abilities: As you progress, you can collect coins and unlock powerful abilities to aid in your escape. Upgrade your princess's skills, unlock new abilities, and use them strategically to overcome obstacles and defeat enemies in your path.</p>
                                <p>Environmental Interaction: The tower is filled with interactive elements that you can utilize to your advantage. Swing from ropes, break through obstacles, and trigger mechanisms to clear your path. The environment itself becomes an integral part of your escape strategy.</p>
                                <p>Unlock Story Fragments: Discover story fragments scattered throughout the tower that provide glimpses into the princess's past and the mysteries surrounding the tower. Unravel the narrative as you collect these fragments and piece together the princess's history.</p>
                                <p>Beautiful Visuals and Sound: Once Upon a Tower boasts stunning visuals that bring the tower and its surroundings to life. The detailed graphics, vibrant colors, and atmospheric sound effects immerse you in the game's enchanting world, enhancing the overall gaming experience.</p>
                                <p>Multiple Endings: The choices you make throughout the game influence the outcome and lead to multiple possible endings. Your decisions shape the princess's fate, adding replay value and encouraging different playthroughs to uncover all the story's nuances.</p>
                                <p>Easy-to-Learn Controls: The game features intuitive and easy-to-learn controls, allowing players of all skill levels to enjoy the experience. Swipe, tap, and perform gestures to control the princess's movements and interact with the environment effortlessly.</p>
                                <p>Engaging Challenges: Once Upon a Tower offers a variety of challenges, including unique boss encounters and puzzle-solving elements. The diverse gameplay ensures that each level presents new and exciting obstacles to overcome, keeping the gameplay fresh and engaging.</p>
                                <p>Once Upon a Tower offers a captivating and immersive experience filled with action, adventure, and mystery. Join the princess on her quest for freedom, overcome the tower's challenges, and unravel the secrets within in this thrilling gaming journey.</p>
                           
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