import React from "react";
import {Routes, Route}  from 'react-router-dom';

import LandingPage from "../user-pages/LandingPage";
import UserDashboard from "../user-pages/UserDashboard";
import SignIn from "../user-pages/SignIn";
import SignUp from "../user-pages/SignUp";

const Router =()=> {
    return(
        <>
            <Routes>
            <Route path = "/" element = {<LandingPage/>}/>
            <Route path = "/sign-in" element = {<SignIn/>}/>
            <Route path = "/sign-up" element = {<SignUp/>}/>
            <Route path = "/dashboard" element = {<UserDashboard/>}/>
            </Routes>
        </>
    )
}

export default Router;