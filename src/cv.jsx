import React, { Component } from "react"
import axios from "axios"

//WIP COMPONENT

class Cv extends Component {

    constructor() {
        super();
        this.state = {
            cv: []
        };
    }

    componentDidMount() {
        axios.get('./src/data/cv.json')
            .then(response => {
                this.setState({
                    cv: response.data
                })
            })
    }

    render() {
        const cv = this.state.cv
        let cvText 

        if (cv.length > 0) {
            cvText = cv.map(cv => {
                return (
                    <div key={cv.id}>
                        <h3 className="content-cv">
                            {cv.name}
                        </h3>
                    </div>
                )
            })
        }


        return (
            <div>
                <h1 className="content-cv">My CV</h1>
                {cvText}
                <p>my cv details will go here</p>
            </div>
        )
    }
};

export default Cv