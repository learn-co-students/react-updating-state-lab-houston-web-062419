// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        } 
    }

    onClick = () => {
        this.setState ({
        settings: Object.assign({}, this.state.settings, {
            bitrate: 12
          })
        })
        
    }

    handleClick = () => {
        this.setState ({
        settings: Object.assign({}, this.state.settings, {
            bitrate: 8,
            video: Object.assign({}, this.state.settings.video, {
                resolution:'720p'
            })
          })
        })
        
    }



    render() {
        return (
            <div>
                <button onClick = {this.onClick} className='bitrate'></button>
                <button onClick = {this.handleClick} className='resolution'></button>
            </div>
        )
    }
}

