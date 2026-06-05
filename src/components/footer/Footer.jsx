import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <h2>About</h2>
          <p>
            <strong>Welcome to Explore Our Solar System Through Data!</strong>
          </p>
          <p>
            Group 12 of the Phoenix Cohort at TSA Academy comprises a team of
            Frontend Development students united by a shared passion for
            technology, creativity, and space exploration. We are committed to
            turning complex data into compelling and accessible experiences.
            Meet the team behind the data:
          </p>

          <ul>
            <li>
              <a
                href="https://amakandukwu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Amaka
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ifeoma
              </a>
            </li>
            <li>
              <a
                href="https://tsacademyonline.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TSacademy
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nebnnamdi/capstone-solar-system.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                Group 12 (Phoenix Cohort)
              </a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="footer-bottom">
          <div className="footer-left">
            <p>
              &copy; 2026 Design by Chinweike, Nnamdi and other group members.
            </p>
            <p>Built by Group 12 (Phoenix Cohort). All rights reserved</p>
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
