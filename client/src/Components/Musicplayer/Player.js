import React from "react";
import "./Player.css"
// import { FontAwesomeIcon } from 'fortawesome/react-fontawesome';
// import { fa-play } from 'fortawesome/free-solid-svg-icons';
import TrackInformation from "./Trackinformation";
import Scrubber from "./Scrubber";
import Controls from "./Controls";
import Timestamps from "./Timestamps";

class Player extends React.Component{
	state = {
			playStatus: 'play',
			currentTime: 0,
			name: "The Buzz",
			artist: "Hermitude",
			album: "Dark Night Sweet Light",
			year: 2015,
			artwork: "./testpic.jpeg",
			duration: 223,
			source: "./test.mp3"
	};

	render() {
		return (
			<div className="Player">
				<div className="Header"><div className="Title">Here's yo Music</div></div>
				<TrackInformation 
					name={this.state.name} 
					artist={this.state.artist}
					album={this.state.album}
					year={this.state.year}
				/>
				<Scrubber />
				<Controls 
					playStatus={this.state.playStatus}	
				/>
				<Timestamps duration={this.state.duration} currentTime={this.state.currentTime} />
				<audio>
					<source src={this.state.source} />
				</audio>
			</div>
		)
	}
};

export default Player;
