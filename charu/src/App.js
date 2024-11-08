
import './App.css';

function App() {
  
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome - Charulakshana's Portfolio</title>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="style.css" />

      <body className="brown-background">
        <div className="front-page">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi! I'm Charulakshana, a final-year Computer Science Engineering student.</p>
          <p>Explore my projects, skills, and journey in the world of technology.</p>
          <a href="portfolio.html" className="button">View My Work</a>
        </div>

        <nav>
          <h1>Charulakshana</h1>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <section id="about" className="page">
          <h2>About Me</h2>
          <p>Highly motivated and detail-oriented final-year Computer Science Engineering
            student with a strong foundation in software development, data structures,
            algorithms, and problem-solving. Eager to contribute to dynamic teams and
            drive technological advancements in a professional setting.</p>
        </section>

        <section id="education" className="page">
          <h2>Education</h2>
          <p><strong>BE in Computer Science</strong><br />Bharathiyar Institute of Engineering (2021-2025) - CGPA: 8.3/10</p>
          <p><strong>HSC</strong><br />St. John's Matric Higher Secondary School (2020-2021) - 89%</p>
        </section>

        <section id="projects" className="page">
          <h2>Projects</h2>
          <div className="project">
            <h3>Grocery Store Application</h3>
            <p>Developed using Python and SQL, featuring Product Management, Order Management, and Database Integration.</p>
          </div>
          <div className="project">
            <h3>E-commerce Website</h3>
            <p>Online platform with user authentication, product management, shopping cart, and order management.</p>
          </div>
        </section>

        <section id="skills" className="page">
          <h2>Skills</h2>
          <div className="skills">
            <span>Java</span>
            <span>C++</span>
            <span>C</span>
            <span>Python</span>
            <span>SQL</span>
            <span>Networking</span>
            <span>OOP</span>
          </div>
        </section>

        <section id="contact" className="page">
          <h2>Contact Me</h2>
          <p><strong>Phone:</strong> 9363685563</p>
          <p><strong>Email:</strong> lakshana192k4@gmail.com</p>
          <p><strong>Location:</strong> Chennai, India</p>
        </section>
      </body>
    </>

}
