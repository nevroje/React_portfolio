import React from "react";
import ReactDOM from "react-dom";
import CitiesSlider from "./hello";
import Header from "./header";
import Footer from "./footer";
import "./css/tailwind.css";
import "./css/sliders.css";
import {BrowserRouter} from "react-router-dom";
import Projects from "./projects";
import About from "./about";
import {Switch, Route} from "react-router-dom";

const App = () => {
    const slides = [
        {
          city: 'Lorem',
          country: 'Lorem ipsum dolor sit amet.',
        },
        {
          city: 'Lorem',
        },
        {
          city: 'Lorem',
          country: 'Lorem ipsum dolor sit amet.',
        },
        {
          city: 'Lorem',
          country: 'Lorem ipsum dolor sit amet.',
        },
        {
          city: 'Lorem',
          country: 'Lorem ipsum dolor sit amet.',
        },
      ];

    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header/>
                    <div className="content-wrapper">
                        <Switch>
                            <Route exact path='/' component={() => <CitiesSlider slides={slides}/>}></Route>
                                <Route exact path='/about' component={About}></Route>
                            <Route exact path='/projects' component={Projects}></Route>
                        </Switch>
                    </div>
                <Footer/>
            </div>
        </div>
    )
};

ReactDOM.render(( <BrowserRouter><App/></BrowserRouter>), document.getElementById("app"));