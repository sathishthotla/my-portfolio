import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        Get In <span>Touch</span>
      </h2>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always open to discussing new opportunities,
            freelance projects, or full-time Full Stack Developer
            roles. Feel free to contact me anytime.
          </p>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />

            <div>
              <h4>Location</h4>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />

            <div>
              <h4>Email Address</h4>
              <p>sathishthotla@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />

            <div>
              <h4>Mobile Number</h4>
              <p>+91 9618369674</p>
            </div>
          </div>

          <a
            href="https://wa.me/919618369674"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp />
            Chat via WhatsApp
          </a>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <form>

            <div className="input-row">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="8"
              placeholder="Type Your Message Here..."
            ></textarea>

            <button type="submit">
              Send Message
              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;