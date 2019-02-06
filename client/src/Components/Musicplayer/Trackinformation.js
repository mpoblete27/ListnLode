import React from "react";

class Trackinformation extends React.Component{
	render() {
		return (
			<div className="TrackInformation">
				<div className="Name">{this.props.name}</div>
				<div className="Artist">{this.props.artist}</div>
				<div className="Album">{this.props.album} ({this.props.year})</div>
			</div>
		)
	}
};


export default Trackinformation;
