import "./Skills.css";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaTools,
  FaBrain,
  FaUsers,
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>
        Technical <span>Skills</span>
      </h2>

      <div className="skills-container">


<div className="skill-card">
          <FaServer className="icon" />
          <h3>Backend Technologies</h3>

          <p>
            Java (8/11), Spring Boot, Spring MVC, Spring Security,
            Hibernate, JPA, RESTful APIs, Microservices,Node.js Nest js
          </p>
        </div>



        <div className="skill-card">
          <FaReact className="icon" />
          <h3>Frontend Technologies</h3>

          <p>
            React.js, Next.js, TypeScript, JavaScript (ES6+),
            HTML5, CSS3, Tailwind CSS, Redux,
            Context API
          </p>
        </div>

        

        <div className="skill-card">
          <FaServer className="icon" />
          <h3>Integration & APIs</h3>

          <p>
            GraphQL APIs,
            Authentication & Authorization
            (OAuth2, JWT, SSO)
          </p>
        </div>

        <div className="skill-card">
          <FaBrain className="icon" />
          <h3>AI & Modern Web</h3>

          <p>
            Generative AI Applications,
            AI Agents,
            Agentic Workflows,
            Prompt Engineering,
            Data-Rich Web Applications
          </p>
        </div>

        <div className="skill-card">
          <FaDatabase className="icon" />
          <h3>Databases</h3>

          <p>
            MongoDB,
            MySQL,
            Redis,
            TypeORM
          </p>
        </div>

        <div className="skill-card">
          <FaTools className="icon" />
          <h3>Development Tools</h3>

          <p>
            Git,
            GitHub,
            Bitbucket,
            Jira,
            Confluence,
            VS Code,
            Postman,
            Vercel
          </p>
        </div>

        <div className="skill-card">
          <FaUsers className="icon" />
          <h3>Soft Skills</h3>

          <p>
            Cross-Functional Collaboration,
            Agile/Scrum,
            Product-Focused Development,
            Performance Optimization
          </p>
        </div>

      </div>
    </section>
  );
}

export default Skills;