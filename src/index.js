import React from "react"
import ReactDOM from "react-dom"
import Hello from "./Hello"
import Header from "./header"
import Footer from "./footer"

const App = () => {
    return (
        <div>
            <Header />
            <Hello />
            <Footer />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"))