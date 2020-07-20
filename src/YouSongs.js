import React from "react";
import ReactPlayer from "react-player";
import { youSongs } from "./DataFile";

class LocalVideo extends React.Component {
  constructor(props) {
    super(props);
    this.randNum = null;
    this.state = { vid: [youSongs[1]] };
  }

  onClickSubmit = () => {
    this.randNum = Math.floor(youSongs.length * Math.random());
    youSongs[1] = youSongs[this.randNum];
    this.setState({ vid: youSongs[1] });
    console.log(`Video Song Currently Playing ${youSongs[1]}`);
  };

  render() {
    return (
      <article className="bsong">
        <h2>
          Songs From YouTube: <i>Available-{youSongs.length}</i>
        </h2>
        <ReactPlayer className="bvideo" url={this.state.vid} controls />
        <button className="button" onClick={this.onClickSubmit}>
          Next Song
        </button>
      </article>
    );
  }
}

export default LocalVideo;
