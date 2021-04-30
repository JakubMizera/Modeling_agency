import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import {Header} from "./elements/header"
import {Tita} from "./elements/tita_page"
import {Footer} from "./elements/footer"


const App = () => {
    return (
        <div className="pageContainer">
            <Header/>
            <Tita/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#page"));