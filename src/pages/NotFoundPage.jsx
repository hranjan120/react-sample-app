import PageTitleComp from "../components/PageTitleComp"
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <>
            <PageTitleComp title={'404'} />

            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0 text-center">
                            <h2>404, Page not Found...</h2>
                            <Link style={anchorCss} to="/">
                                Go to Home
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

const anchorCss = {
    color: "blue",
    textDecoration: "none",
    fontSize: "20px"
}; 