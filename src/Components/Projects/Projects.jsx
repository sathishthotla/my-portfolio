import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <h2>
        Featured <span>Projects</span>
      </h2>

      <div className="project-container">

        {/* Project 1 */}

        <div className="project-card">

          <div className="project-header">
            <h3>Dealer Management System (DMS)</h3>

            <span>Jan 2024 - Present</span>
          </div>

          <h4>Ascend Avenue Solutions Pvt Ltd</h4>

          <h5>Role : Full Stack Developer</h5>

          <p>
            Dealer Management System is a web application that
            streamlines dealership operations including customer,
            vehicle, finance, loyalty, service, and EVOC management.
          </p>

          <div className="tech-stack">
            <span>React.js</span>
            <span>NestJS</span>
            <span>TypeScript</span>
            <span>MySQL</span>
            <span>GraphQL</span>
            <span>JWT</span>
            <span>Tailwind</span>
            <span>Docker</span>
          </div>

          <ul>

            <li>Developed responsive UI using React.js and Tailwind CSS.</li>

            <li>Built REST & GraphQL APIs using NestJS.</li>

            <li>Implemented JWT Authentication & Role-Based Access.</li>

            <li>Integrated OpenAI GPT, Claude & Gemini APIs.</li>

            <li>Optimized database queries and API performance.</li>

          </ul>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <div className="project-header">
            <h3>T-PROCURE</h3>

            <span>Jan 2023 - Jan 2024</span>
          </div>

          <h4>Client : Toyota</h4>

          <h5>Role : Full Stack Developer</h5>

          <p>
            Procurement management platform with Admin,
            Supplier and Buyer modules for automotive
            procurement.
          </p>

          <div className="tech-stack">

            <span>React.js</span>

            <span>NestJS</span>

            <span>TypeScript</span>

            <span>MongoDB</span>

            <span>MySQL</span>

            <span>Swagger</span>

            <span>REST API</span>

          </div>

          <ul>

            <li>Developed Supplier, Buyer and Admin modules.</li>

            <li>Built scalable REST APIs & Microservices.</li>

            <li>Designed reusable React.js components.</li>

            <li>Optimized SQL queries and database performance.</li>

            <li>Worked in Agile development environment.</li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Projects;