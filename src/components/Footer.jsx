import { backToTop } from "../js/footer.js";

function Footer() {
  return (
    <>
      <div id="footerContainer">
        <div id="backToTop" onClick={backToTop}>
          ⬆
        </div>

        <h1 className="center white">Stay Awesome</h1>

        <div id="idWrapper">
          <div>
            <a href="https://www.instagram.com/cadenchan.design/">
              <img
                width="50px"
                height="50px"
                src="/Icons/instagram.svg"
                alt="Instagram Icon"
              />
            </a>
          </div>

          <div>
            <a href="https://www.linkedin.com/in/caden-chan/">
              <img
                width="50px"
                height="50px"
                src="/Icons/linkedin-in.svg"
                alt="LinkedIn Icon"
              />
            </a>
          </div>
          <div>
            <a href="https://www.behance.net/cadenchan2">
              <img
                width="50px"
                height="50px"
                src="/Icons/behance.svg"
                alt="Behance Icon"
              />
            </a>
          </div>
        </div>
        <div id="captionWrapper">
          <div className="caption white">
            © Caden Chan. All Rights Reserved. All Lefts Up For Grabs.
          </div>
          <div className="caption white">
            A website made with love by yours truely{" "}
            <b>
              <i>xoxo</i>
            </b>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
