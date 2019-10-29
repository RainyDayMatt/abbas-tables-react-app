import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";

import "./App.css";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import SignUpContainer from "./containers/signUp/SignUpContainer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div className={ `px-5 py-3` }>
                        <NavbarContainer/>
                        <main>
                            <Route path={ "/signUp" } component={SignUpContainer}/>
                        </main>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
