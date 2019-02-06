import React from "react";

class Trackinformation extends React.Component{
	render() {
		return (
			<div className="TrackInformation">
				<div className="Name">{this.props.track.name}</div>
				<div className="Artist">{this.props.track.artist}</div>
				<div className="Album">{this.props.track.album} ({this.props.track.year})</div>
			</div>
		)
	}
};


export default Trackinformation;
