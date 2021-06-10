import React from "react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <React.Fragment>
      <h1>DORK - Dose Of Random Kwōts</h1>
      <p>
        A compilation of random quotes from people I've read and watched, movies
        I've seen, books I've read, tv series and animes I've binged watched.
      </p>
      <Link to="/main">
        <span>GO</span>
      </Link>
    </React.Fragment>
  );
};

export default IntroSection;
