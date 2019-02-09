import React, {Component} from "react"
import axios from "axios"
import ProjectCard from "./projectcard"

class Projects extends Component {
    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }

    constructor() {
        super();
        this.state = {
            projects: []
        };
    }

    render() {
        const projects = this.state.projects
        let projectsList 

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div key={project.id} className="min-h-900 my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <ProjectCard project={project} />
                    </div>
                )
            })
        }

        return (
            <div className="cover-image">
                <h1 className="content-text">My Projects</h1>
                <br></br>
                {projectsList}
                <ul className="menu">       
                    <ul><a href="https://github.com/nevroje/address-book" target="_blank">Address-Book in JS</a></ul>
                    <br></br>
                    <ul><a href="https://github.com/nevroje/fizzbuzz_js_joakim" target="_blank">FizzBuzz in JS</a></ul>
                    <br></br>
                    <ul><a href="https://github.com/nevroje/2019-bmi-challenge" target="_blank">BMI Calculator in JS</a></ul>
                    <br></br>
                    <ul><a href="https://github.com/nevroje/ATM_Challenge" target="_blank">ATM-challenge in Ruby</a></ul>
                    <br></br>
                    <p>More to come..</p>
            </ul>
            </div>
        )
    }
};

export default Projects