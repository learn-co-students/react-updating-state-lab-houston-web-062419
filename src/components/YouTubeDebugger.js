// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component{


constructor(){
	super()
	this.state = {
	  errors: [],
	  user: null,
	  settings: {
	    bitrate: 8,
	    video: {
	      resolution: '1080p'
	    }
	  }
	}
}


	handle = () => {
		this.setState({settings: {
					    bitrate: 12,
					    video: {
					      resolution: '1080p'
					    }}})
	}
handle2 = () => {
		this.setState({settings: {
					    bitrate: this.state.settings.bitrate,
					    video: {
					      resolution: '720p'
					    }}})
	}

	render() {
	    return (
	      <div>
	        <button onClick={this.handle} 
	        className = "bitrate">
	        	Bitrate to 12
	        </button>
	        <button onClick={this.handle2} 
	        className = "resolution">
	        	resolution
	        </button>
	      </div>
	    );
	}
}

export default YouTubeDebugger;