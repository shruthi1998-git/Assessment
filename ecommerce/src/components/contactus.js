import React from "react";
import "./contact.css";

function ContactUs() {
  return (
    <div>
      <form action="/action_page.php">
        <h1 style={{ padding: "3px", textAlign: "center" }}>Contact Us</h1>
        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Message : </label>
        <input type="text" placeholder="Type a message here..." />
         {/* < input type="textarea">Some text...</textarea>  */}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default ContactUs;
