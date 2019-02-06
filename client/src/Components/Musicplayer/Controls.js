import React from "react";

class Controls extends React.Component{

	state = {
		playStatus: "",
		source: "./test.mp3"
	}

	componentDidMount(){
		this.setState({
			playStatus: this.props.playStatus
		})
	}

	playPause() {
		let status = this.state.playStatus;
		let audio = this.state.source;
		if(status === 'play') {
		  this.setState.playStatus = 'pause'; 
		  audio.pause();
		} else {
		  this.setState.playStatus = 'play'; 
		  audio.play();
		}
	  }
	render() {
		return (
			<div className="Controls">
				<button onClick={this.playPause} className="Button">
					<i className="fa fa-fw fa-play"></i>
				</button>
			</div>
		)
	}
};

export default Controls;
