import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Bottle Jump 3D" />

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
                                <h3>Bottle Jump 3D</h3>
                                
                                <p>Bottle Jump 3D is a fun and addictive game that challenges your precision and timing skills. It offers a simple yet captivating gameplay experience that will keep you entertained for hours. Here's an overview of the game's key features:</p>

                                <p>Exciting Bottle Flipping Action: Bottle Jump 3D brings the popular trend of bottle flipping to your mobile device. The objective is to flip and land the bottle successfully on various platforms and objects. The game provides a physics-based simulation that mimics the real-world bottle flipping sensation.</p>
                                <p>Challenging Levels: The game offers a wide range of challenging levels with different environments and obstacles. You'll encounter moving platforms, narrow gaps, and other tricky elements that test your accuracy and timing. Each level presents a new and exciting challenge to overcome.</p>
                                <p>Simple Controls: Bottle Jump 3D features intuitive and easy-to-use controls. You can control the flip of the bottle with a simple tap on the screen. The controls are responsive, allowing for precise adjustments and ensuring an enjoyable gameplay experience.</p>
                                <p>Progressive Difficulty: As you advance through the game, the levels become more challenging and complex. You'll need to master your bottle flipping skills to conquer the increasingly difficult obstacles. The game gradually ramps up the difficulty to keep you engaged and motivated to improve.</p>
                                <p>Unlockable Bottles: Bottle Jump 3D offers a collection of unique and colorful bottles to unlock. Each bottle has its own distinct design and style, allowing you to customize your gameplay experience. Unlocking new bottles adds a sense of achievement and provides visual variety to the game.</p>
                                <p>Addictive Gameplay: Bottle Jump 3D's addictive gameplay will keep you coming back for more. The simple mechanics, combined with the satisfying feeling of landing a successful bottle flip, create an addictive loop that makes the game hard to put down.</p>
                                <p>High Score Challenge: The game features a high score system that tracks your best performances. You can compete against yourself and aim to beat your own records, pushing your skills to the limit. Compare your scores with friends and challenge them to beat your high scores.</p>
                                <p>Stunning Graphics: Bottle Jump 3D offers vibrant and colorful graphics that enhance the overall gaming experience. The visually appealing environments and smooth animations create an immersive and enjoyable gameplay atmosphere.</p>
                                <p>Free to Play: The game is free to download and play, making it accessible to a wide range of players. You can enjoy the bottle flipping fun without any upfront cost and explore the game's features at your own pace.</p>
                                <p>Bottle Jump 3D is a thrilling and entertaining game that puts your bottle flipping skills to the test. Flip and land bottles with precision, conquer challenging levels, and strive for high scores in this addictive gaming experience.</p>
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