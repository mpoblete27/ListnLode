import React from "react";

class Timestamps extends React.Component{
	convertTime = (timestamp) =>{
		let minutes = Math.floor(timestamp / 60);
		let seconds = timestamp - (minutes * 60);
		if (seconds < 10) { seconds = '0' + seconds; }
		timestamp = minutes + ':' + seconds;
		return timestamp;
	};
	render() {
		return (
			<div className="Timestamps">
				<div className="Time Time--current">{this.props.currentTime}</div>
				<div className="Time Time--total">{this.props.duration}</div>
			</div>
		)
	}
};


export default Timestamps;
