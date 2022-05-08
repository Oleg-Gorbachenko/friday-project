import React from 'react'
import {Route, Routes} from "react-router-dom";
import {Profile} from "../profile/Profile";
import {Login} from "../login/Login";
import {Registration} from "../registration/Registration";
import {RecoveryPassword} from "../recovery_password/RecoveryPassword";
import {EnterNewPassword} from "../enter_new_password/EnterNewPassword";
import {Error404} from "../error404/Error404";
import {TestPage} from "../test_page/TestPage";

export const PATH = {
    PROFILE: "/",
    LOGIN: "/login",
    REGISTRATION: "/registration",
    RECOVERY_PASSWORD: "/recovery-password",
    ENTER_NEW_PASSWORD: "/enter-new-password",
    TEST_PAGE: "/test-page",
    ERROR404: "*",
}

export function RoutesComponent() {
    return (
        <Routes>
            <Route path={PATH.PROFILE} element={<Profile/>}/>
            <Route path={PATH.LOGIN} element={<Login/>}/>
            <Route path={PATH.REGISTRATION} element={<Registration/>}/>
            <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
            <Route path={PATH.ENTER_NEW_PASSWORD} element={<EnterNewPassword/>}/>
            <Route path={PATH.ERROR404} element={<Error404/>}/>
            <Route path={PATH.TEST_PAGE} element={<TestPage/>}/>
        </Routes>
    )
}