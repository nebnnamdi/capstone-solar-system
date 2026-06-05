import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h2>About</h2>
          <p>Chinweike-https://dozman.netlify.app/</p>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-left">
            <p>©2026 Design by Chinweike,Nnamdi and other group members.</p>
            <p>Built by Group 12. All rights reserved</p>
          </div>

          <div className="footer-right">
            <h3>TSAcademy</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;