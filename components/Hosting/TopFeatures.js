import React from 'react';
import * as Icon from 'react-feather';
import Link from 'next/link';

const TopFeatures = () => {
    return (
        <>
            <div className="boxes-area hosting-boxes-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-box">
                                <div className="icon">
                                    <Icon.DollarSign />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                        Money-back Guarantee
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-f78acb">
                                <div className="icon">
                                    <Icon.Database />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                        Big Data Transfer
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-c679e3">
                                <div className="icon">
                                    <Icon.BarChart />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                        99.9% Server Uptime
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-box bg-eb6b3d">
                                <div className="icon">
                                    <Icon.Tablet />
                                </div>
                                <h3>
                                    <Link href="/feature-details">
                                        Live 24/7 Support
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopFeatures;
