import herboutique from "../../assets/herboutique.svg";
import locationIcon from "../../assets/location-icon.svg";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-logo-container">
        <img src={herboutique} alt="site-logo" />
        <div>© 2023 Her Boutique</div>
      </div>
      <div className="footer-contact-info-container">
        <img src={locationIcon} alt="location-icon" />
        <div>1234 Main St, NY, USA 10001</div>
        <img src={phoneIcon} alt="phone-icon" />
        <div>+1 (123) 456-7890</div>
        <img src={emailIcon} alt="email-icon" />
        <a href="mailto:support@herboutique.com">support@herboutique.com</a>
      </div>
      <div className="footer-about-container">
        <div>About The Company</div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit sapiente tempora, dolore rem recusandae velit excepturi
          veniam deleniti sit perferendis iste reiciendis, omnis facilis cumque
          beatae alias provident, repellat pariatur!
        </p>
        <a href="https://www.linkedin.com/in/aidenshaw/" target="_blank">
          <img src={linkedinIcon} alt="linkedin-icon" />
        </a>
        <a
          href="https://github.com/aidenshaw07/searchspring-assessment"
          target="_blank"
        >
          <img src={githubIcon} alt="github-icon" />
        </a>
      </div>
    </div>
  );
};
