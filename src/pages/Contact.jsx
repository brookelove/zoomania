import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import "../assets/css/components/Contact.css";
import backgroundHero from "../assets/biomeBackground.mp4";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, subject, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <main className="d-c-c-flex contact-container">
      <video id="background-video" autoPlay loop muted>
        <source src={backgroundHero} type="video/mp4"></source>
      </video>
      <form id="contact-form" onSubmit={handleSubmit}>
        <hgroup>
          <h3>Questions</h3>
          <h5>Send A Message</h5>
        </hgroup>
        <div className="form-container">
          <div className="d-c-s-flex inputContainer">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Kyle"
              defaultValue={name}
              onBlur={handleChange}
              className="border"
            />
          </div>
          <div className="d-c-s-flex inputContainer">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              placeholder="kylethelion@zoo.com"
              defaultValue={email}
              onBlur={handleChange}
              className="border"
            />
          </div>
          <div className="d-c-s-flex inputContainer">
            <label htmlFor="subject">Subject</label>
            <input
              type="subject"
              name="subject"
              placeholder="Important!!!"
              defaultValue={subject}
              onBlur={handleChange}
              className="border"
            />
          </div>
          <div className="d-c-s-flex inputContainer">
            <label htmlFor="message">Message</label>
            <textarea
              name="subject"
              rows="5"
              placeholder="I would like to be able to eat more."
              defaultValue={subject}
              onBlur={handleChange}
              className="border"
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}

export default Contact;
