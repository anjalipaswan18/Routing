import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-list">
        <h1>Contact</h1>
        <form>
          <input type="name" id="name" placeholder="Enter your First Name " />
          <input
            type="namelast"
            id="last"
            placeholder="Enter your Last Name "
          />
          <input type="nameid" id="email" placeholder="Enter your Email id " />
          <input type="namephone" id="phone" placeholder="Enter your Phone " />
        </form>
      </div>
    </div>
  );
}

export default Contact;
