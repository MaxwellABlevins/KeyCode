import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Viber" />

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
                                <h3>Viber</h3>
                                
                                <p>Viber is a popular messaging and calling app that connects people around the world. With its extensive features and user-friendly interface, Viber provides a convenient platform for staying connected with friends, family, and colleagues. Here's an overview of what makes Viber stand out:</p>

                                <p>Instant Messaging: Viber allows users to send instant messages to individuals and groups. Users can share text, photos, videos, voice messages, and even stickers to express themselves and engage in lively conversations.</p>
                                <p>HD Voice and Video Calls: Viber enables high-quality voice and video calls, allowing users to connect with their loved ones with crystal-clear audio and smooth video performance. Whether it's a one-on-one call or a group call, Viber ensures a seamless communication experience.</p>
                                <p>End-to-End Encryption: Privacy and security are paramount on Viber. All messages, calls, and shared media are protected by end-to-end encryption, ensuring that only the intended recipients can access the content and providing users with peace of mind.</p>
                                <p>Sticker Market: Viber offers a vast collection of fun and expressive stickers in its sticker market. Users can choose from a wide range of stickers to add a touch of creativity and emotion to their conversations.</p>
                                <p>Public Chats: Viber's Public Chats feature allows users to follow and engage with their favorite celebrities, brands, and influencers. Users can explore and participate in public discussions, stay updated with the latest news, and connect with like-minded individuals.</p>
                                <p>Community Engagement: Viber encourages community engagement through its Communities feature. Users can create or join communities based on shared interests, hobbies, or causes, fostering connections and conversations around specific topics.</p>
                                <p>Group Chats and Calls: Viber facilitates group chats and calls, making it easy for users to communicate with multiple people simultaneously. Whether it's planning an event, coordinating a project, or catching up with a group of friends, Viber keeps everyone connected.</p>
                                <p>File Sharing: Viber allows users to share various types of files, including documents, photos, and videos. Users can send files directly within the app, making it convenient for collaborating or sharing important information with others.</p>
                                <p>Integration with Contacts: Viber seamlessly integrates with users' existing contact lists, making it easy to find and connect with friends who are already using the app. Users can see which contacts are on Viber and initiate conversations with just a few taps.</p>
                                <p>Cross-Platform Compatibility: Viber is available on multiple platforms, including smartphones, tablets, and desktop computers. Users can sync their conversations and contacts across devices, ensuring they can stay connected no matter which device they're using.</p>
                                <p>Discover the power of instant communication with Viber. Stay connected with loved ones, engage in vibrant communities, and enjoy secure and convenient messaging and calling features—all in one app.</p>
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