import React from "react";

class Timestamps extends React.Component{
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
