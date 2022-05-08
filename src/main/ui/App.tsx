import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

export function App() {
    return (
      <HashRouter>
          {/*<Provider store={store}>*/}
          {/*    <Header/>*/}
          {/*</Provider>*/}
      </HashRouter>
    );
}

