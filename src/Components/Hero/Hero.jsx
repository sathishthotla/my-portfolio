// import "./Hero.css";
// import { FaDownload } from "react-icons/fa";

// function Hero() {
//   return (
//     <section className="hero">

//       <h1>
//         Hi, I'm <span>Sathish</span>
//         <br />
//         Thotla
//       </h1>

//       <h2>React.js Developer / Full Stack Developer</h2>

//       <p>
//         React.js | JavaScript | TypeScript | Node.js | NestJS | MongoDB
//       </p>

//       <button className="resume-btn">
//         <FaDownload />
//         Download Resume
//       </button>

//     </section>
//   );
// }

// export default Hero;


import "./Hero.css";
import { FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <h1>
        Hi, I'm <span>Sateesh</span>
        <br />
        Thotla
      </h1>

      <h2>4+ years of experience as a Java Full-Stack Developer</h2>

      <p>
       Java (8/11)| SpringBoot | SpringMVC | Hibernate | JPA | REST API | Microservices | React.js | Node.js| MongoDB | MySQL <br/>

       RESTfulAPIs| JWTAuthentication | OAuth2 |Role-BasedAccessControl |Swagger/OpenAPI <br/>
        Agile/Scrum | Git | GitHub | CI/CD | Docker | Kubernetes | AWS(EC2,S3, RDS)
       
      </p>

      <a
        href="/Sathish_Thotla_Resume.pdf"
        download="Sathish_Thotla_Resume.pdf"
        className="resume-btn"
      >
        <FaDownload />
        Download Resume
      </a>

    </section>
  );
}

export default Hero;