import React, { useState } from "react";
import "./OnboardingForm.css";

const OnboardingForm = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(false);
  const [updates, setUpdates] = useState(false);

  const [formStatus, setFormStatus] = useState("");

  const sendData = async (
    email,
    company,
    firstName,
    lastName,
    password,
    notification,
    updates
  ) => {
    try {
      const response = await fetch(`http://localhost:8000/api/onboarding/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": email,
          /** 
           *  Id should be hashed on be, not on fe
           *  Basically I should pass company here, 
           *  but server schema contains and validates 
           *  company_id, not company.
           */
          "company_id": "65860b7706fa491890dc8bf4cf0c230e",
          "first_name": firstName,
          "last_name": lastName,
          "password": password,
          "notifications.project_finish": notification,
          "notifications.updates": updates,
        }),
      });

      setFormStatus(response.status);

      return response.json();

    } catch (err) {
      console.error(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await sendData(
      email,
      company,
      firstName,
      lastName,
      password,
      notification,
      updates
    );
  };

  return (
    <div className="form__wrapper">
      {formStatus !== 200 ? (
        <>
          <h1>Onboarding application</h1>
          <form className="profile__data" onSubmit={(e) => submitHandler(e)}>
            <div className="email">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="field"
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="company">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                className="field"
                placeholder="Company"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                required
              />
            </div>
            <div className="name">
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                name="name"
                className="field"
                placeholder="First Name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </div>
            <div className="surname">
              <label htmlFor="surname">Last Name</label>
              <input
                type="text"
                name="surname"
                className="field"
                placeholder="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="field"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="notification">
              <label htmlFor="notification">
                Receive notification on project completion?
              </label>
              <input
                type="checkbox"
                name="notification"
                id=""
                value={notification}
                onChange={() => setNotification(!notification)}
              />
            </div>
            <div className="updates">
              <label htmlFor="updates">
                Receive updates about <span>services and offers</span>?
              </label>
              <input
                type="checkbox"
                name="updates"
                id=""
                value={updates}
                onChange={() => setUpdates(!updates)}
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </>
      ) : (
        <h2>You have sucessfully filled the application!</h2>
      )}
    </div>
  );
};

export default OnboardingForm;
