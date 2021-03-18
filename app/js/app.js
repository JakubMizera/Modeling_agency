import React from "react";
import ReactDOM from "react-dom";
import "../scss/main.scss";

import {Header} from "./main_page/header"
import {Content} from "./main_page/content"
import {Footer} from "./main_page/footer"


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