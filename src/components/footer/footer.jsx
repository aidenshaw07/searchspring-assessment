import herboutique from "../../assets/herboutique.svg";
import locationIcon from "../../assets/location-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-logo">
        <img src={herboutique} alt="site-logo" />
        <div>© 2023 Her Boutique</div>
      </div>
      <div className="footer-contact-info">
        <img src={locationIcon} alt="location-icon" />
        <div>1234 Main St, Anywhere, USA</div>
        <img src={phoneIcon} alt="phone-icon" />
        <div>(123) 456-7890</div>
        <img src={emailIcon} alt="email-icon" />
        <a href="mailto:support@herboutique.com">support@herboutique.com</a>
      </div>
      <div className="footer-about">
        <div>About The Company</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit sapiente tempora, dolore rem recusandae velit excepturi
          veniam deleniti sit perferendis iste reiciendis, omnis facilis cumque
          beatae alias provident, repellat pariatur!
        </p>
        <a href="https://www.linkedin.com/in/aidenshaw/">
          <img src={linkedinIcon} alt="linkedin-icon" />
        </a>
        <a href="https://github.com/aidenshaw07/searchspring-assessment">
          <img src={githubIcon} alt="github-icon" />
        </a>
      </div>
    </div>
  );
};
