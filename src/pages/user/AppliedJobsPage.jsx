import iccon from '../../assets/img/icon/job-list3.png'


export default function AppliedJobsPage() {
    return (
        <>
            <section className="featured-job-area">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-xl-10">

                            <div className="single-job-items single-job-items1 mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="job_details.html"><img src={iccon} alt="Img" /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                        <ul>
                                            <li>Creative Agency</li>
                                            <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                            <li>$3500 - $4000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="items-link f-right">
                                    <span>7 hours ago</span>
                                </div>
                            </div>

                            <div className="single-job-items single-job-items1 mb-30">
                                <div className="job-items">
                                    <div className="company-img">
                                        <a href="job_details.html"><img src={iccon} alt="Img" /></a>
                                    </div>
                                    <div className="job-tittle">
                                        <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                        <ul>
                                            <li>Creative Agency</li>
                                            <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                            <li>$3500 - $4000</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="items-link f-right">
                                    <span>7 hours ago</span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}