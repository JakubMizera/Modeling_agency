import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import {Header} from "./elements/header"
import {Casting} from "./elements/casting_box"
import {Footer} from "./elements/footer"


const App = () => {
    return (
        <div className="pageContainer">
            <Header/>
            <Casting/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#page"));