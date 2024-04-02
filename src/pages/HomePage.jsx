import mainImage from '../assets/img/hero/h1_hero.jpg'
import howItWork from '../assets/img/gallery/how-applybg.png'


export default function HomePage() {
    return (
        <>
            <div className="slider-area ">
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center" style={{ backgroundImage: `url(${mainImage})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="hero__caption">
                                        <h1>Find the most exciting startup jobs</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-8">
                                    <form action="#" className="search-box">
                                        <div className="input-form">
                                            <input type="text" placeholder="Job Tittle or keyword" />
                                        </div>
                                        <div className="select-form">
                                            <div className="select-itms">
                                                <select name="select" id="select1" className='job_search_sel'>
                                                    <option value="">Location BD</option>
                                                    <option value="">Location PK</option>
                                                    <option value="">Location US</option>
                                                    <option value="">Location UK</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="search-form">
                                            <a href="#">Find job</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="our-services section-pad-t30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle text-center">
                                <span>FEATURED TOURS Packages</span>
                                <h2>Browse Top Categories </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-contnet-center">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-tour"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Design & Creative</a></h5>
                                    <span>(653)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-cms"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Design & Development</a></h5>
                                    <span>(658)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-report"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Sales & Marketing</a></h5>
                                    <span>(658)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-app"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Mobile Application</a></h5>
                                    <span>(658)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-helmet"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Construction</a></h5>
                                    <span>(658)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-high-tech"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Information Technology</a></h5>
                                    <span>(658)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-real-estate"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Real Estate</a></h5>
                                    <span>(658)</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-services text-center mb-30">
                                <div className="services-ion">
                                    <span className="flaticon-content"></span>
                                </div>
                                <div className="services-cap">
                                    <h5><a href="job_listing.html">Content Writer</a></h5>
                                    <span>(658)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="browse-btn2 text-center mt-50">
                                <a href="job_listing.html" className="border-btn2">Browse All Sectors</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="apply-process-area apply-bg pt-150 pb-150" style={{ backgroundImage: `url(${howItWork})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle white-text text-center">
                                <span>Apply process</span>
                                <h2> How it works</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-process text-center mb-30">
                                <div className="process-ion">
                                    <span className="flaticon-search"></span>
                                </div>
                                <div className="process-cap">
                                    <h5>1. Search a job</h5>
                                    <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-process text-center mb-30">
                                <div className="process-ion">
                                    <span className="flaticon-curriculum-vitae"></span>
                                </div>
                                <div className="process-cap">
                                    <h5>2. Apply for job</h5>
                                    <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-process text-center mb-30">
                                <div className="process-ion">
                                    <span className="flaticon-tour"></span>
                                </div>
                                <div className="process-cap">
                                    <h5>3. Get your job</h5>
                                    <p>Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}