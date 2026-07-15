import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2>
        Professional <span>Experience</span>
      </h2>

      <div className="timeline">

        {/* Experience 1 */}

        {/* <div className="timeline-item">

          <div className="circle"></div>

          <div className="timeline-content">

            <span className="date">
              Jan 2024 - Present
            </span>

            <h3>Associate Software Engineer</h3>

            <h4>Ascend Avenue Solutions Pvt Ltd</h4>

            <p>
              • Developed scalable web applications using
              <strong> React.js, Node.js and NestJS.</strong>
            </p>

            <p>
              • Built secure REST APIs using
              <strong> NestJS</strong> and integrated
              <strong> MongoDB & MySQL.</strong>
            </p>

            <p>
              • Worked on authentication using
              <strong> JWT</strong> and role-based authorization.
            </p>

            <p>
              • Collaborated with cross-functional teams following
              Agile methodology.
            </p>

          </div>

        </div> */}

        {/* Experience 2 */}

        {/* <div className="timeline-item">

          <div className="circle"></div>

          <div className="timeline-content">

            <span className="date">
              Jul 2023 - Jan 2024
            </span>

            <h3>Associate Software Engineer</h3>

            <h4>Recstech Technologies, Bangalore</h4>

            <p>
              • Developed responsive user interfaces using
              <strong> React.js.</strong>
            </p>

            <p>
              • Consumed REST APIs and implemented CRUD operations.
            </p>

            <p>
              • Fixed bugs, optimized performance and improved UI.
            </p>

          </div>

        </div> */}




        <div className="timeline">

        {/* Experience 1 */}

        <div className="timeline-item">

          <div className="circle"></div>

          <div className="timeline-content">

            <span className="date">
              Jan 2024 - july 2026
            </span>

            <h3>Backend Java Developer</h3>

            <h4>Ascend Avenue Solutions Pvt Ltd, Hyderabad</h4>

            <p>
              • Designed and implemented scalable
              <strong> microservices architectures</strong> for
              dealer, vehicle, and finance modules using
              <strong> Java, Spring Boot, and Hibernate.</strong>
            </p>

            <p>
              • Designed and implemented
              <strong> 15+ RESTful endpoints</strong> across
              customer, vehicle, and loyalty modules with
              standardized DTO mapping and centralized error
              responses.
            </p>

            <p>
              • Secured backend services with
              <strong> JWT and OAuth2-based authentication</strong>
              and role-based access control (RBAC), following
              security best practices across multiple user roles.
            </p>

            <p>
              • Improved API performance through query
              optimization, <strong>Redis caching,</strong> and
              lazy loading strategies on high-traffic endpoints.
            </p>

            <p>
              • Collaborated with DevOps teams on
              <strong> CI/CD pipelines</strong> and cloud
              deployments using <strong>Jenkins, Maven, and
              Docker</strong> within an Agile/Scrum workflow.
            </p>

            <p>
              • Implemented centralized global exception handling
              and request validation using Spring's
              <strong> @ControllerAdvice</strong> and Bean
              Validation, improving API error consistency.
            </p>

            <p>
              • Wrote unit and integration tests using
              <strong> JUnit and Mockito</strong> for service and
              repository layers to improve code reliability.
            </p>

            <p>
              • Led debugging and root-cause analysis for
              production issues; contributed to code reviews to
              maintain coding standards across the team.
            </p>

          </div>

        </div>

        {/* Experience 2 */}

        <div className="timeline-item">

          <div className="circle"></div>

          <div className="timeline-content">

            <span className="date">
              Jul 2022 - Jan 2024
            </span>

            <h3>Backend Java Developer</h3>

            <h4>Recstech Technologies, Bangalore (Client: Toyota)</h4>

            <p>
              • Developed backend services for a procurement
              platform using <strong>Java, Spring Boot, and
              Hibernate,</strong> supporting admin, supplier, and
              buyer workflows.
            </p>

            <p>
              • Built and integrated
              <strong> RESTful microservices</strong> for
              Dashboard, Supplier Management, User Management, and
              System Settings modules.
            </p>

            <p>
              • Optimized SQL schemas and indexing strategies to
              improve query execution time on core reporting
              tables.
            </p>

            <p>
              • Managed Git branching strategy and containerized
              deployments using <strong>Docker</strong> within an
              Agile development workflow.
            </p>

            <p>
              • Contributed to microservices architecture design,
              improving system scalability and maintainability.
            </p>

          </div>

        </div>

      </div>

        

      </div>

    </section>
  );
}

export default Experience;