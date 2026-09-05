import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">RY.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="small-title">HELLO, I'M</p>

          <h1>
            Yadlapalli <span>Roshini</span>
          </h1>

          <p className="reg-no">
            Reg No: 23MIC7154
          </p>

          <h2>
            Computer Science Engineer
          </h2>

          <p className="hero-description">
            Passionate about software development, problem solving,
            Artificial Intelligence, and building practical technology
            solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="profile-box">

            <div className="bracket">
              &lt;/&gt;
            </div>

            <h3>
              Software Developer
            </h3>

            <p>
              Java • React • Node.js
            </p>

          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <p className="small-title">
          ABOUT ME
        </p>

        <h2 className="section-heading">
          Who I Am
        </h2>

        <div className="about-container">

          <div className="about-text">

            <p>
              I'm <strong>Yadlapalli Roshini</strong>, an Integrated
              M.Tech Computer Science and Engineering student at
              VIT-AP University.
            </p>

            <p>
              I enjoy learning new technologies, solving programming
              problems and developing software applications. Currently,
              I am strengthening my Data Structures and Algorithms
              skills using Java while improving my development skills.
            </p>

            <p>
              My interests include software development, Artificial
              Intelligence, computer vision and creating useful
              technology solutions.
            </p>

          </div>

          <div className="about-card">

            <div>
              <h3>Education</h3>
              <p>Integrated M.Tech CSE</p>
            </div>

            <div>
              <h3>University</h3>
              <p>VIT-AP University</p>
            </div>

            <div>
              <h3>Registration No.</h3>
              <p>23MIC7154</p>
            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <p className="small-title">
          MY SKILLS
        </p>

        <h2 className="section-heading">
          Technologies & Skills
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">☕</div>
            <h3>Java</h3>
            <p>Programming & DSA</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">JS</div>
            <h3>JavaScript</h3>
            <p>Web Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">R</div>
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">N</div>
            <h3>Node.js</h3>
            <p>Backend Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">&lt;/&gt;</div>
            <h3>HTML & CSS</h3>
            <p>Web Technologies</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">GH</div>
            <h3>GitHub</h3>
            <p>Version Control</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">DS</div>
            <h3>Data Structures</h3>
            <p>Problem Solving</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">AI</div>
            <h3>AI & Computer Vision</h3>
            <p>Python • OpenCV</p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <p className="small-title">
          MY WORK
        </p>

        <h2 className="section-heading">
          Featured Projects
        </h2>

        <div className="projects-grid">

          <div className="project-card">

            <span className="project-number">
              01
            </span>

            <h3>
              Real-Time Sign Language Detection
            </h3>

            <p>
              An AI-based computer vision system that detects hand
              gestures through a webcam and recognizes sign language
              in real time.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>OpenCV</span>
              <span>TensorFlow</span>
              <span>SSD MobileNet</span>
            </div>

          </div>

          <div className="project-card">

            <span className="project-number">
              02
            </span>

            <h3>
              Smart Helmet
            </h3>

            <p>
              A smart safety system designed to improve rider safety
              using sensors and automated technology.
            </p>

            <div className="tags">
              <span>IoT</span>
              <span>Sensors</span>
              <span>Programming</span>
            </div>

          </div>

          <div className="project-card">

            <span className="project-number">
              03
            </span>

            <h3>
              Handwritten Text Detection
            </h3>

            <p>
              A computer vision project focused on detecting and
              processing handwritten text from images.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Computer Vision</span>
            </div>

          </div>

          <div className="project-card">

            <span className="project-number">
              04
            </span>

            <h3>
              Rain Detection
            </h3>

            <p>
              A project that focuses on detecting rainfall conditions
              using sensors and automated processing.
            </p>

            <div className="tags">
              <span>IoT</span>
              <span>Sensors</span>
            </div>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
      <section id="education" className="section">

        <p className="small-title">
          EDUCATION
        </p>

        <h2 className="section-heading">
          My Education
        </h2>

        <div className="education-card">

          <div className="education-year">
            2023 — 2028
          </div>

          <div>

            <h3>
              Integrated M.Tech in Computer Science & Engineering
            </h3>

            <p>
              VIT-AP University
            </p>

            <span>
              Andhra Pradesh, India
            </span>

            <div className="education-reg">
              Registration No: 23MIC7154
            </div>

          </div>

        </div>

      </section>

      {/* DSA */}
      <section className="section dsa-section">

        <p className="small-title">
          CODING JOURNEY
        </p>

        <h2 className="section-heading">
          DSA & Problem Solving
        </h2>

        <p className="dsa-text">
          Currently strengthening my Data Structures and Algorithms
          knowledge using Java and practicing programming problems
          regularly.
        </p>

        <div className="dsa-topics">

          <span>Java</span>
          <span>Recursion</span>
          <span>Hashing</span>
          <span>Sorting</span>
          <span>Searching</span>
          <span>Algorithms</span>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <p className="small-title">
          CONTACT
        </p>

        <h2 className="section-heading">
          Let's Connect
        </h2>

        <p className="contact-description">
          I'm open to internships, collaborations and opportunities
          where I can learn, contribute and grow.
        </p>

        <div className="contact-info">

          <div className="contact-card">

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h3>Email</h3>

              <a href="mailto:yroshini999@gmail.com">
                yroshini999@gmail.com
              </a>
            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              GH
            </div>

            <div>
              <h3>GitHub</h3>

              <a
                href="https://github.com/yroshini999"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yroshini999
              </a>
            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              ID
            </div>

            <div>
              <h3>Registration No.</h3>
              <p>23MIC7154</p>
            </div>

          </div>

        </div>

        <div className="contact-buttons">

          <a
            href="mailto:yroshini999@gmail.com"
            className="btn primary-btn"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yroshini999"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            GitHub
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Yadlapalli Roshini
        </p>

        <p>
          Reg No: 23MIC7154
        </p>

        <p>
          Built with React
        </p>

      </footer>

    </div>
  );
}

export default App;