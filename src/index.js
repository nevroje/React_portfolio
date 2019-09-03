import React from "react";
import ReactDOM from "react-dom";
import CitiesSlider from "./hello";
import Header from "./header";
import Footer from "./footer";
import "./css/tailwind.css";
import "./css/sliders.css";
import { BrowserRouter } from "react-router-dom";
import Projects from "./projects";
import About from "./about";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const slides = [
    {
      city: "Project",
      country: "FizzBuzz in JavaScript",
      img:
        "https://anckor.cdn.prismic.io/anckor/c2dd9dec68360fec6156124e62f0f6e7041c8359_forest.jpg"
    },
    {
      city: "Project",
      country: "Address-Book in JavaScript",
      img:
        "https://anckor.cdn.prismic.io/anckor/c413486a042000e79a6f0fb4b3e74ad381989be7_1-beach.jpg"
    },
    {
      city: "Project",
      country: "BMI-Calculator in JavaScript",
      img:
        "https://anckor.cdn.prismic.io/anckor/255231e801a040e2a4f72aaa69a1edea5bc9a152_13-work-session.jpg"
    },
    {
      city: "Project",
      country: "ATM-challenge in ruby",
      img:
        "https://anckor.cdn.prismic.io/anckor/8e8b1f4dd1f84cc6dbfa533692476a93f0d60d26_dsc00871.jpg"
    },
    {
      city: "Skills",
      country:
        "React, Ruby on Rails, CSS, JavaScript, HTML5, React-native, Ansible, Various css frameworks, AWS",
      img:
        "https://anckor.cdn.prismic.io/anckor/9ad25b1cf35d5689980979dde6ae35184890ad43_9-dark.jpg"
    },
    {
      city: "",
      country: '“Talk is cheap. Show me the code.” ― Linus Torvalds"',
      img:
        "https://anckor.cdn.prismic.io/anckor/ca738ba7ac0c5947226af3b0c3f58d374bba67a2_dsc00735.jpg"
    }
  ];

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Header />
        <div className="content-wrapper">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <CitiesSlider slides={slides} />}
            ></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/projects" component={Projects}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
