import React from 'react';
import Navbar from "@/components/_App/NavbarStyleFive";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';  
import * as Icon from 'react-feather';

const ProjectsDetails = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Dawaai - Medicine & Healthcare" />

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
                                <h3>Dawaai - Medicine & Healthcare</h3>
                                
                                <p>Dawaai is a popular mobile application designed to facilitate access to medicines and healthcare services. It aims to make the process of purchasing medicines and managing healthcare needs more convenient and efficient for users. Here's a description of the app's key features and functionality:</p>

                                <p>Medicine Ordering: Users can browse through a comprehensive database of medicines, including prescription drugs and over-the-counter medications. They can search for specific medicines, view detailed information about them, and place orders for home delivery.</p>
                                <p>Medicine Reminders: Dawaai offers a built-in medicine reminder system to help users stay on track with their medication schedules. Users can set reminders for taking medicines, and the app will send notifications at the specified times.</p>
                                <p>Prescription Upload: Users can upload their prescriptions directly in the app, allowing them to order prescription medicines with ease. The app ensures the privacy and security of the uploaded prescriptions.</p>
                                <p>Healthcare Consultations: Dawaai provides a platform for users to consult with qualified healthcare professionals remotely. Users can schedule video or audio consultations with doctors, specialists, and other healthcare providers for medical advice, diagnosis, and treatment.</p>
                                <p>Health Records: The app allows users to maintain their health records digitally. They can store and manage medical reports, test results, and other health-related documents securely in one place, making it convenient for future reference and sharing with healthcare providers.</p>
                                <p>Medicine Information and Side Effects: Dawaai provides comprehensive information about medicines, including their uses, dosage instructions, precautions, and possible side effects. Users can access this information to make informed decisions about their medication.</p>
                                <p>Pill Identification: The app features a pill identification tool that helps users identify unknown pills. Users can take a photo of a pill, and the app will analyze its appearance to provide relevant information about the medication.</p>
                                <p>Nearby Pharmacies: Dawaai includes a feature that allows users to locate nearby pharmacies based on their current location. This makes it easier to find the nearest pharmacy for quick medicine purchases.</p>

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