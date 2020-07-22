import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import LocalVideo from "./LocalVideo";
import Quote from "./Quote";
import CovidTrack from "./CovidTrack";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="header">
          <header className="hcontent">
            <h1 className="m-0 pt-2">Restore yourself when you're Alone..</h1>
            <span className="caption pt-0 mt-0">
              From Boring to Beyond <i className="coffee icon"></i>
            </span>
          </header>
        </section>

        <section className="d-flex flex-column justify-content-start align-items-center">
          <Quote />
          <LocalVideo />
          <CovidTrack />
        </section>

        <section className="footer mb-2">
          <footer className="fcontent">
            <p>
              -Thanks for coming-
              <br />
              -This website is in developement-
              <br />
              -Explore-Enjoy-
              <br />
              -Ideas and suggestions are most welcome- <br />
              <a href="mailto: contact@iboring.xyz">
                write to me at &nbsp;
                <i className="envelope icon"></i>contact@iboring.xyz
              </a>
            </p>
          </footer>
        </section>
      </React.Fragment>
    );
  }
}
export default App;
