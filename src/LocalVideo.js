import React from "react";
import ReactPlayer from "react-player";
import { localVideos } from "./DataFile";

class LocalVideo extends React.Component {
  constructor(props) {
    super(props);
    this.randNum = null;
    this.state = { vid: [localVideos[1]] };
  }

  onClickSubmit = () => {
    this.randNum = Math.floor(localVideos.length * Math.random());
    localVideos[1] = localVideos[this.randNum];
    this.setState({ vid: localVideos[1] });
    console.log(`Video Local Currently Playing ${localVideos[1]}`);
  };

  render() {
    return (
      <article className="blocal">
        <h2>
          Watch To Local Funny Videos: <i>Available-{localVideos.length}</i>
        </h2>
        <ReactPlayer className="bvideo" url={this.state.vid} controls playing />
        <button className="button" onClick={this.onClickSubmit}>
          Next Video
        </button>
      </article>
    );
  }
}

export default LocalVideo;
