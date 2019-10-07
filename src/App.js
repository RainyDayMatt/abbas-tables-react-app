import React, { Component } from "react";
import { Provider } from "react-redux"
import logo from "./logo.svg";
import "./App.css";
import NavbarContainer from "./containers/navbar/NavbarContainer";

class App extends Component {
    render() {
        return (
            <div className="px-5">
                <NavbarContainer/>
            </div>
        );
    }
}

export default App;
