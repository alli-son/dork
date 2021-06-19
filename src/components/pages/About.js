import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="about-wrapper">
          <div>
            <h1>About</h1>
          </div>
          <div>
            <p>A just for fun project of mine. </p>
            <p>
              Since I'm into reading and watching a lot of things, an idea just
              popped into my head.
            </p>
            <p>
              "Why not collect all those quotable messages from books, movies,
              tv series, animes and people?", initially I wanted to write it on
              paper. But most of my time is spent in front of a computer, so I
              developed this.
            </p>
            <div>
              <img
                src="https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG9mZmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="About"
              />
            </div>

            <p className="italic">
              *Disclaimer: This is by no means a self-help or self-improvement
              application. Like I said, just a random project for me.
            </p>
          </div>
        </div>
        <footer>
          <p>Copyright &copy; 2021</p>
          <p>Developed by: Allison Feliciano</p>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default About;
