import React from "react";
import "./Playlist.css"

function Playlist() {
    return(
        <div>
            <div>
                <h2 className="previous">Previous Song</h2>
            </div>
            <div>
                <h2 className="song">Come and Get Your Love</h2>
            </div>
            <div> 
                <h2 className="next">Next Song</h2>
            </div>
            <div>
                <h2 className="song">Hooked on a Feeling</h2>
            </div>
        </div>
    )
}

export default Playlist;