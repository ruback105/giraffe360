import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscriptionStatus(!subscriptionStatus);
    }
  };

  return (
    <section className="container footer">
      <div className="footer__wrapper">
        <div className="footer__promo">
          {!subscriptionStatus ? (
            <>
              <label htmlFor="email">Onboarding will never be the same</label>
              <form onSubmit={(e) => submitHandler(e)}>
                <input
                  type="email"
                  name="emial"
                  value={newsletterEmail}
                  onChange={(event) =>
                    setNewsletterEmail(event.target.value)
                  }
                  placeholder="Your email"
                />
                <button type="submit">Join newsletter</button>
              </form>
            </>
          ) : (
            <div className="subscription-success">
              <h1>You have successfully subsribed to our newsletter!</h1>
              <h3>Check you mail for confirmation email</h3>
            </div>
          )}
        </div>
        <div className="footer__social">
          <h1 className="label">Follow us on</h1>
          <div className="footer__icons">
            <Link to="/">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-youtube"></i>
            </Link>
            <Link to="/">
              <i className="fab fa-vk"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__copyright">© Artur Pushko 2021</div>
      </div>
    </section>
  );
};

export default Footer;
