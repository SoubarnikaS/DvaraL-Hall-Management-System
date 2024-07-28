import React from "react";
import {Routes, Route}  from 'react-router-dom';

import LandingPage from "../user-pages/LandingPage";
import UserDashboard from "../user-pages/UserDashboard";
import SignIn from "../user-pages/SignIn";
import SignUp from "../user-pages/SignUp";
import ExplorePage from "../user-pages/ExplorePage";
import ExplorepageSample from "../user-pages/ExplorePageSample";

const Router =()=> {
    return(
        <>
            <Routes>
            <Route path = "/" element = {<LandingPage/>}/>
            <Route path = "/sign-in" element = {<SignIn/>}/>
            <Route path = "/sign-up" element = {<SignUp/>}/>
            <Route path = "/dashboard" element = {<UserDashboard/>}/>
            <Route path = "/explore-page" element = {<ExplorePage/>}/>
            <Route path = "/explore-page-sample" element = {<ExplorepageSample/>}/>
            </Routes>
        </>
    )
}

export default Router;