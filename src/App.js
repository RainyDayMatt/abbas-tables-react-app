import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import NavbarContainer from "./containers/navbar/NavbarContainer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={ `px-5 py-3` }>
                    <NavbarContainer/>
                    <main>
                        <Route path={ "/signUp" }>Lorem Ipsum</Route>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
