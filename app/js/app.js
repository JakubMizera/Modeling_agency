import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import {Header} from "./elements/header"
import {Content} from "./elements/content"
import {Footer} from "./elements/footer"


const App = () => {
    return (
        <div className="pageContainer">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#page"));