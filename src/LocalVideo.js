import React from "react";
import ReactPlayer from "react-player";
import { youFunnys, youSongs } from "./DataFile";

class LocalVideo extends React.Component {
  constructor(props) {
    super(props);
    this.randNum = null;
    this.state = { vid: [youFunnys[13]] };
  }

  onClickSubmit = (param) => {
    this.randNum = Math.floor(param.length * Math.random());
    this.setState({ vid: param[this.randNum] });
    // console.log(`Video Currently Playing ${this.state.vid}`);
  };

  render() {
    return (
      <article className="d-flex flex-column justify-content-start align-items-center videocontainer">
        <h2>Watch Videos</h2>
        <ReactPlayer
          className="bvideo"
          url={this.state.vid}
          onError={() => console.warn("juhh")}
          controls
          playing
        />
        <div className="ui small buttons mt-1">
          <button
            className="button ui red"
            onClick={() => this.onClickSubmit(youFunnys)}
          >
            Click for Funny Video
          </button>
          <div className="or"></div>
          <button
            className="button ui violet"
            onClick={() => this.onClickSubmit(youSongs)}
          >
            Click for Video Song
          </button>
        </div>
      </article>
    );
  }
}

export default LocalVideo;
