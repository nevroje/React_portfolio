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
          city: '',
          country: 'FizzBuzz in JavaScript',
          img: 'https://anckor.cdn.prismic.io/anckor/cda974367bd7caffa2165b3805378d12167e9935_7-waves.jpg',
        },
        {
          city: '',
          country: 'Address-Book in JavaScript',
          img: 'https://anckor.cdn.prismic.io/anckor/c413486a042000e79a6f0fb4b3e74ad381989be7_1-beach.jpg',
        },
        {
          city: '',
          country: 'BMI-Calculator in JavaScript',
          img: 'https://anckor.cdn.prismic.io/anckor/255231e801a040e2a4f72aaa69a1edea5bc9a152_13-work-session.jpg',
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