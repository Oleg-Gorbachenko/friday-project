import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/RoutesComponent";

export const Profile = () => {
    return (
        <div>
            PROFILE<br/>
            <NavLink to={PATH.LOGIN}>Login</NavLink><br/>
            <NavLink to={PATH.REGISTRATION}>REGISTRATION</NavLink><br/>
            <NavLink to={PATH.TEST_PAGE}>TEST_PAGE</NavLink><br/>
            <NavLink to={PATH.ERROR404}>ERROR404</NavLink><br/>
        </div>
    );
};
