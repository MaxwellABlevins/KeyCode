import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Reconstruct" />

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
                                <h3>Reconstruct</h3>
                                
                                <p>Reconstruct by TRAINERIZE is a cutting-edge fitness app designed to help you achieve your fitness goals and transform your body. It combines advanced workout tracking, nutrition planning, and expert guidance to provide a comprehensive fitness experience. Here's an overview of its key features:</p>

                                <p>Customized Workout Plans: Reconstruct offers customized workout plans tailored to your fitness level, goals, and preferences. You can access a library of workouts designed by fitness professionals and select the ones that best suit your needs. The app also allows you to track your progress and make adjustments as you advance.</p>
                                <p>Workout Tracking and Analytics: With Reconstruct, you can easily track your workouts, sets, reps, and weights. The app provides detailed analytics and performance metrics to help you monitor your progress and make informed decisions about your training. You can view your strength gains, endurance improvements, and overall fitness development.</p>
                                <p>Nutrition Planning: Reconstruct includes nutrition planning tools to support your fitness journey. You can create personalized meal plans, track your calorie intake, and monitor your macronutrient distribution. The app provides nutritional guidance and recommendations to help you make healthier choices and optimize your results.</p>
                                <p>Exercise Demonstrations: The app features exercise demonstrations with video tutorials and step-by-step instructions. Whether you're new to a particular exercise or looking to refine your technique, Reconstruct provides visual guidance to ensure you perform exercises correctly and safely.</p>
                                <p>Progress Photos and Measurements: Reconstruct allows you to track your physical transformation by taking progress photos and measurements. You can compare your before and after photos, track changes in body measurements, and visually see the results of your hard work over time.</p>
                                <p>Community Support and Accountability: Reconstruct fosters a supportive community environment where you can connect with other users, share your progress, and find motivation. You can participate in challenges, engage in discussions, and receive encouragement from like-minded individuals pursuing their fitness goals.</p>
                                <p>One-on-One Coaching: The app offers one-on-one coaching options, allowing you to work directly with a certified fitness professional. You can receive personalized guidance, have your questions answered, and benefit from expert advice to optimize your training and achieve optimal results.</p>
                                <p>Integration with Wearable Devices: Reconstruct seamlessly integrates with popular wearable devices and fitness trackers, allowing you to sync your data and monitor your activity levels throughout the day. This integration provides a holistic view of your fitness journey and enables you to make data-driven decisions for continuous improvement.</p>
                                <p>Goal Tracking and Reminders: Reconstruct enables you to set specific fitness goals and track your progress towards achieving them. You can set reminders for your workouts, nutrition goals, and other activities to stay accountable and on track with your fitness routine.</p>
                                <p>With Reconstruct by TRAINERIZE, you have access to a comprehensive fitness solution that combines workout planning, tracking, nutrition guidance, and expert support. Start your fitness journey today and transform your body with the help of this powerful app.</p>
                           
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