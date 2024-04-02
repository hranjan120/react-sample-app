import { useState, useEffect } from 'react';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

import PageTitleComp from "../../components/PageTitleComp"
import DashboardPage from './DashboardPage';
import AppliedJobsPage from './AppliedJobsPage';
import DashboardError from './DashboardError';

export default function DashboardLayout() {
    return (
        <Routes>
            <Route path="/" element={<DashboardLayoutInternsl />}>
                <Route index element={<DashboardPage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="job-applied" element={<AppliedJobsPage />} />
                <Route path="*" element={<DashboardError />} />
            </Route>
        </Routes>
    );
}


function DashboardLayoutInternsl() {
    const [pageTitle, setPageTitles] = useState('Dashboard');
    const location = useLocation();
    const urls = location.pathname;
    useEffect(() => {
        if (urls === '/user/' || urls === '/user' || urls === '/user/dashboard' || urls === '/user/dashboard/') {
            setPageTitles('Dashboard')
        }
        if (urls === '/user/job-applied' || urls === '/user/job-applied/') {
            setPageTitles('Job Applied')
        }
    }, [urls]);

    return (
        <>
            <PageTitleComp title={'User / ' + pageTitle} />

            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 mb-5 mb-lg-0">
                            <div className="list-group">
                                <Link className='list-group-item list-group-item-action' to="/user/dashboard">User Dashboard</Link>
                                <Link className='list-group-item list-group-item-action' to="/user/job-applied">Job Applied</Link>
                            </div>
                        </div>

                        <div className="col-lg-9 mb-5 mb-lg-0">
                            <Outlet />
                        </div>

                    </div>
                </div>
            </section>

        </>

    );
}