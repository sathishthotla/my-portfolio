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
        Hi, I'm <span>Sathish</span>
        <br />
        Thotla
      </h1>

      <h2>React.js Developer / Full Stack Developer</h2>

      <p>
        React.js | JavaScript | TypeScript | Node.js | NestJS | MongoDB
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