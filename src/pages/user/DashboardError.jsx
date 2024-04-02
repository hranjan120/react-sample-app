import { Link } from 'react-router-dom';

export default function DashboardError() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Somthing Wrong in Dashboard...</h2>
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