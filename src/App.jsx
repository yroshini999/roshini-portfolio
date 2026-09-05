import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Roshini</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Roshini</h1>

          <h2>Student & Technology Enthusiast</h2>

          <p className="hero-text">
            Passionate about technology, programming and building
            practical solutions to real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              View My Projects
            </a>

            <a href="#contact" className="button secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>
            I am a passionate student interested in technology,
            programming and developing innovative solutions.
            I enjoy learning new technologies and applying my
            knowledge through practical projects.
          </p>

          <p>
            I am continuously improving my technical and problem-solving
            skills while exploring opportunities to work on real-world
            projects.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Programming</h3>
            <p>Python</p>
            <p>C</p>
            <p>C++</p>
            <p>Java</p>
          </div>

          <div className="skill-card">
            <h3>Web Technologies</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git & GitHub</p>
            <p>VS Code</p>
            <p>Google Colab</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>Project 1</h3>
            <p>
              Add your project description here. Explain the problem,
              your solution and the technologies used.
            </p>
            <span>Python</span>
          </div>

          <div className="project-card">
            <h3>Project 2</h3>
            <p>
              Add your second project description here along with
              the important features and technologies.
            </p>
            <span>Technology</span>
          </div>

          <div className="project-card">
            <h3>Project 3</h3>
            <p>
              Add your third project description here and explain
              what you developed.
            </p>
            <span>Development</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact Me</h2>

        <p>
          Interested in connecting or collaborating? Feel free to reach out.
        </p>

        <div className="contact-links">
          <a href="mailto:YOUR_EMAIL@gmail.com">
            Email
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Roshini. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;