import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Snooz" />

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
                                <h3>Snooz</h3>
                                
                                <p>Snooz is a smart and innovative white noise machine designed to help you get a restful and rejuvenating sleep. By providing a soothing and customizable sound environment, Snooz creates the ideal conditions for a peaceful night's sleep. Here's what makes Snooz a standout sleep companion:</p>

                                <p>Customizable Sound: Snooz offers a range of natural and calming sounds, including gentle fan noise and soothing white noise, to help mask disruptive sounds and create a tranquil sleep environment. You can adjust the tone and volume to suit your preferences and find your perfect sound combination.</p>
                                <p>Portable and Compact: Snooz is designed to be portable and travel-friendly. Its compact size allows you to take it with you wherever you go, ensuring a familiar and comforting sleep environment even when you're away from home.</p>
                                <p>Intuitive Controls: Snooz features simple and intuitive controls, making it easy to operate. With a twist of the outer shell, you can adjust the volume, while the buttons on the top allow you to switch between sound options effortlessly.</p>
                                <p>Natural Fan Sound: One of the unique features of Snooz is its real fan inside, which generates a natural and non-looping fan sound. This creates a realistic and soothing experience, reminiscent of a gentle breeze, without the actual air movement.</p>
                                <p>Sleep Timer and Night Light: Snooz offers a built-in sleep timer, allowing you to set the duration of operation before it automatically turns off. Additionally, it includes a soft night light feature that provides a subtle glow to help you navigate in the dark.</p>
                                <p>Sound Conditioner: Snooz acts as a sound conditioner by creating a consistent and steady ambient sound that masks disruptive noises and promotes a more peaceful sleep environment. It can be particularly beneficial for light sleepers, shift workers, or those living in noisy environments.</p>
                                <p>Quality Construction: Snooz is constructed with high-quality materials, ensuring its durability and longevity. It's designed to be energy-efficient, emitting minimal electromagnetic radiation, and is built to meet stringent safety standards.</p>
                                <p>Enhanced Sleep Experience: Snooz helps promote better sleep by creating a calming and familiar environment. By blocking out disturbing noises and creating a soothing background sound, it enhances relaxation and helps you drift off into a deep and restorative sleep.</p>
                                <p>Thoughtful Design: Snooz boasts a sleek and modern design that blends seamlessly with any bedroom decor. Its minimalist appearance and muted colors create a calming visual aesthetic, adding to the overall sleep experience.</p>
                                <p>Improve your sleep quality and experience with Snooz. Whether you struggle with noisy surroundings, have difficulty falling asleep, or simply want to enhance your sleep environment, Snooz provides the soothing sounds and peaceful atmosphere you need for a rejuvenating night's rest.</p>

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