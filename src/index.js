import React from "react";
import ReactDOM from "react-dom";
import Hello from "./Hello";
import Header from "./header";
import Footer from "./footer";
import './css/tailwind.css';

const App = () => {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col w-full fixed pin-l pin-y">
                <Header/>
                    <div className="px-4 pt-4 flex-1 overflow-y-scrol">
                        <Hello/>
                    </div>
                <Footer/>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("app"))