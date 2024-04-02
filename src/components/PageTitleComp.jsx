import PropTypes from "prop-types";
import bgImage from '../assets/img/hero/about.jpg'


export default function PageTitleComp({ title }) {
    return (
        <>
            <div className="slider-area ">
                <div className="single-slider section-overly slider-height2 d-flex align-items-center" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="hero-cap text-center">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

PageTitleComp.propTypes = {
    title: PropTypes.string.isRequired
}