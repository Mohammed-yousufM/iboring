import React from "react";
import { quotesList } from "./DataFile";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.randNum = 13;
    this.state = { aquote: quotesList[this.randNum] };
  }

  componentDidMount() {
    this.interval = setInterval(this.fqlist, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  fqlist = () => {
    this.randNum = Math.floor(quotesList.length * Math.random());
    this.setState({ aquote: quotesList[this.randNum] });
  };

  render() {
    return (
      <article className="bquote align-self-center my-2 py-3">
        <p>{this.state.aquote}</p>
      </article>
    );
  }
}

export default Quote;
