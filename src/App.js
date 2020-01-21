import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import SignUpContainer from "./containers/signUp/SignUpContainer";

import "./App.css";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div className={ `container p-3` }>
                        <NavbarContainer />
                        <main className={ "p-3" }>
                            <Route path={ "/signUp" } component={ SignUpContainer } />
                        </main>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
