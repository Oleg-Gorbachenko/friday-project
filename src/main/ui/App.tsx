import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../bll/store";
import {RoutesComponent} from "./components/routes/RoutesComponent";

export function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                {/*<Header/>*/}
                <RoutesComponent/>
            </HashRouter>
        </Provider>
    );
}

