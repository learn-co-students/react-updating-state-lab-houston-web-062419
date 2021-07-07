// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    state = {
        timesClicked:0
    }

    onClick = () => {
        let x = this.state.timesClicked +1
        this.setState({
            timesClicked : x
        })
    }
    render() {
        return (
            <div>
                <button onClick ={this.onClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
