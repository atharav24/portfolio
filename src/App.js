import React from "react";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Atharav Badade</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#courses">Courses</a></li> {/* ✅ Added */}
          <li><a href="#contact">Contact</a></li>
        </ul>

      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-left">
          <h1>
            Atharav Badade<br /> <span>Aspiring Data Engineer</span>
          </h1>
          <p>
            I am passionate about data and technology, with a strong interest in
            building efficient data pipelines and analyzing complex datasets. My
            goal is to contribute to innovative projects and continuously improve
            my skills in data engineering and software development.
          </p>
          <button className="explore-btn">Explore</button>
        </div>
        <div className="home-right">
          <div className="photo-container">
            <img src="/images/ab.jpg" alt="Atharav" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="education" id="education">
        <h2>Education</h2>
        <div className="education-cards">
          {/* Bachelor */}
          <div className="edu-card">
            <div className="edu-logo">
              <img src="/images/logo1.png" alt="MMCC" />
            </div>
            <div className="edu-info">
              <h3>Bachelor of Computer Application</h3>
              <p><strong>College:</strong> Marathwada Mitra Mandal College of Commerce</p>
              <p><strong>University:</strong> SPPU</p>
              <p><strong>Year:</strong> 2020 - 2023</p>
              <p><strong>Status:</strong> Completed</p>
              <p><strong>CGPA:</strong> 7.89</p>
            </div>
          </div>

          {/* Master */}
          <div className="edu-card">
            <div className="edu-logo">
              <img src="/images/logo2.png" alt="SPPU" />
            </div>
            <div className="edu-info">
              <h3>Master in Computer Application</h3>
              <p><strong>University:</strong> Savitribai Phule Pune University</p>
              <p><strong>Year:</strong> 2023 - Present</p>
              <p><strong>Status:</strong> Pursuing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <div className="skills-cards">
          {/* Each Skill */}
          <div className="skill-card">
            <img src="/images/java.png" alt="Java" />
            <div className="skill-info">
              <p>Java</p>
              <div className="progress"><div className="progress-bar java">80%</div></div>
            </div>
          </div>
          <div className="skill-card">
            <img src="/images/py.png" alt="Python" />
            <div className="skill-info">
              <p>Python (Basic)</p>
              <div className="progress"><div className="progress-bar python">60%</div></div>
            </div>
          </div>
          <div className="skill-card">
            <img src="/images/js logo.png" alt="JavaScript" />
            <div className="skill-info">
              <p>JavaScript (Basic)</p>
              <div className="progress"><div className="progress-bar js">55%</div></div>
            </div>
          </div>
          <div className="skill-card">
            <img src="/images/react logo.png" alt="React" />
            <div className="skill-info">
              <p>React JS (Basic)</p>
              <div className="progress"><div className="progress-bar react">50%</div></div>
            </div>
          </div>
          <div className="skill-card">
            <img src="/images/html logo.png" alt="HTML" />
            <div className="skill-info">
              <p>HTML</p>
              <div className="progress"><div className="progress-bar html">90%</div></div>
            </div>
          </div>
          <div className="skill-card">
            <img src="/images/css logo.png" alt="CSS" />
            <div className="skill-info">
              <p>CSS</p>
              <div className="progress"><div className="progress-bar css">85%</div></div>
            </div>
          </div>
          <div className="skill-card">
            <img src="/images/mysql.png" alt="MySQL" />
            <div className="skill-info">
              <p>MySQL</p>
              <div className="progress"><div className="progress-bar mysql">75%</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-left">
          <img src="/images/ab.jpg" alt="About Atharav" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Atharav Badade</strong>, an MCA student and aspiring Data Engineer. 
            I have completed my BCA and am currently pursuing MCA. I am learning AWS, Linux, MySQL, 
            S3 bucket, EC2, and Docker as part of my Data Engineering course. 
            I am looking for internship or job opportunities to apply my skills and gain practical experience.
          </p>
          <button className="about-btn">Know More</button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-img">
              <img src="/images/web logo 2.png" alt="Free Resources Website" />
            </div>
            <div className="project-info">
              <h3>Free Resources Website</h3>
              <p>A website that provides free resources like icons, images, and tools useful for developers and students.</p>
              <div className="project-buttons">
                <a href="#" className="btn">View Project</a>
                <a href="#" className="btn">Source Code</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-img">
              <img src="/images/tts.png" alt="Text to Speech Generator" />
            </div>
            <div className="project-info">
              <h3>Text to Speech Generator</h3>
              <p>A Python + Flask based app that converts text into natural-sounding speech.</p>
              <div className="project-buttons">
                <a href="#" className="btn">View Project</a>
                <a href="#" className="btn">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" id="courses">
        <h2>Data Engineering Course</h2>
        <div className="courses-grid">
          <div className="course-card">
            <div className="course-info">
              <h3>Data Engineering (Online)</h3>
              <p>Completed an online Data Engineering course where I learned:</p>
              <ul>
                <li>AWS Cloud Services</li>
                <li>S3 Bucket</li>
                <li>Linux Commands & File Management</li>
                <li>EC2 Instance Management</li>
                <li>Docker Containerization</li>
              </ul>
              <span className="status">Ongoing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Your Phone Number" />
          </div>
          <div className="form-group">
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Atharav Badade | All Rights Reserved</p>
          <div className="footer-icons">
            <a href="https://github.com/atharav24" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/atharva-badade-10b105228/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:atharavbadade24@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
