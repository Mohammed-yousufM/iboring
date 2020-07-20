import React from "react";
import ReactPlayer from "react-player";
import { youFunnys } from "./DataFile";

class YouFunny extends React.Component {
  constructor(props) {
    super(props);
    this.randNum = null;
    this.state = { vid: [youFunnys[1]] };
  }

  onClickSubmit = () => {
    this.randNum = Math.floor(youFunnys.length * Math.random());
    youFunnys[1] = youFunnys[this.randNum];
    this.setState({ vid: youFunnys[1] });
    console.log(`Video Funny Currently Playing ${youFunnys[1]}`);
  };

  render() {
    return (
      <article className="bfunny">
        <h2>Funny YouTube Videos: Available-{youFunnys.length}</h2>
        <ReactPlayer className="bvideo" url={this.state.vid} controls playing />
        <button className="button" onClick={this.onClickSubmit}>
          play random
        </button>
      </article>
    );
  }
}

export default YouFunny;
