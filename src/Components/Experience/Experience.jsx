import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2>
        Professional <span>Experience</span>
      </h2>

      <div className="timeline">

        {/* Experience 1 */}

        <div className="timeline-item">

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

        </div>

        {/* Experience 2 */}

        <div className="timeline-item">

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

        </div>

        {/* Experience 3 */}

        <div className="timeline-item">

          <div className="circle"></div>

          <div className="timeline-content">

            <span className="date">
              Jul 2022 - Jan 2024
            </span>

            <h3>Associate Software Engineer</h3>

            <h4>Simbiotik Technologies Sdn. Bhd.</h4>

            <p>
              • Developed backend services using
              <strong> NestJS & Node.js.</strong>
            </p>

            <p>
              • Worked with MongoDB, PostgreSQL and TypeORM.
            </p>

            <p>
              • Integrated REST APIs and authentication modules.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;