import PageTitleComp from "../../components/PageTitleComp"
import imgData from '../../assets/img/blog/home-blog2.jpg'

export default function SignInPage() {
    return (
        <>
            <PageTitleComp title={'Sign In'} />


            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src={imgData} alt="Img" className="img-fluid" />
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <form>
                                <div className="mt-2">
                                    <label htmlFor="userEmail" className="form-label">Email:</label>
                                    <input type="text" className="form-control" name="userEmail" id="userEmail" />
                                </div>
                                <div className="mt-2">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input type="text" className="form-control" name="password" id="password" />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-block mt-5">Submit</button>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );
}