import React from "react";

class Controls extends React.Component{
	playPause() {
		let status = this.state.playStatus;
		let audio = document.getElementById('audio');
		if(status === 'play') {
		  status = 'pause'; audio.play();
		} else {
		  status = 'play'; audio.pause();
		}
		this.setState({ playStatus: status });
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
