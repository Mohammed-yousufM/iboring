import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import LocalVideo from "./LocalVideo";
import Quote from "./Quote";
import YouSongs from "./YouSongs";
import YouFunny from "./YouFunny";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="header">
          <header className="hcontent">
            <h1>TO BORING AND BEYOND..</h1>
            <nav className="navbar">
              i intentionally made it smaller so you won't read &#9872;
            </nav>
          </header>
        </section>

        <section className="bbody">
          <Quote />
          <LocalVideo />
          <YouSongs />
          <YouFunny />
        </section>

        <section className="footer">
          <footer className="fcontent">
            <p>
              Thanks for coming-This website is in developement-Explore-Enjoy:-)
              <br />
              -Ideas and suggestions are most welcome- <br />
              -write to me at &nbsp;
              <a href="mailto: contact@iboring.xyz">contact@iboring.xyz-</a>
            </p>
          </footer>
        </section>
      </div>
    );
  }
}
export default App;
