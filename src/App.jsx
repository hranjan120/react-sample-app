import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AnimationLayout from './utils/RouteAnimation';

import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const JobListPage = React.lazy(() => import("./pages/JobListPage"));
const JobDetailPage = React.lazy(() => import("./pages/JobDetailPage"));
const SignInPage = React.lazy(() => import("./pages/user/SignInPage"));
const SignUpPage = React.lazy(() => import("./pages/user/SignUpPage"));
const DashboardLayout = React.lazy(() => import("./pages/user/DashboardLayout"));

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComp themeColor={'light'} />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route exact path="/" element={<HomePage />} />

            <Route
              path="about-us"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <AboutUsPage /> </React.Suspense>}
            />
            <Route
              path="contact-us"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <ContactPage /> </React.Suspense>}
            />
            <Route
              path="job-list"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <JobListPage /> </React.Suspense>}
            />
            <Route
              path="job-detail/:jobSlug/:jobId"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <JobDetailPage /> </React.Suspense>}
            />
            <Route
              path="sign-in"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <SignInPage /> </React.Suspense>}
            />
            <Route
              path="sign-up"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <SignUpPage /> </React.Suspense>}
            />

            <Route
              path="user/*"
              element={<React.Suspense fallback={<><h4>Loading...</h4></>}> <DashboardLayout /></React.Suspense>}
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  )
}

export default App
