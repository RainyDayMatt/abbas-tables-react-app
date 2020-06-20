import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import NavbarContainer from "./containers/navbar/NavbarContainer";
import InfoBarContainer from "./containers/infoBar/InfoBarContainer";
import SignUpContainer from "./containers/signUp/SignUpContainer";
import MissionStatementContainer from "./containers/missionStatement/MissionStatementContainer";
import MeetTheStaffContainer from "./containers/meetTheStaff/MeetTheStaffContainer";

import "./App.css";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <BrowserRouter>
                    <div className={ "container" }>
                        <NavbarContainer />
                        <InfoBarContainer />
                        <main className={ "px-3" }>
                            <Route path={ "/signUp" } component={ SignUpContainer } />
                            <Route path={ "/missionStatement" } component={ MissionStatementContainer } />
                            <Route path={ "/meetTheStaff" } component={ MeetTheStaffContainer } />
                        </main>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
