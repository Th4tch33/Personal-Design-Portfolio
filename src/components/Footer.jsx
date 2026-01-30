import { backToTop } from "../js/footer.js";
import { loadImages } from "../js/logoLoader.js";

import Lottie from "lottie-react";
import animationData from "../assets/personalLogoIdleAnim.json";

import ArrowLink from "../assets/arrow-link.jsx";
import CarouselCard from "./CrouselCard.jsx";

import IGButton from "../assets/IGButton.jsx";
import YTButton from "../assets/YTButton.jsx";
import MailButton from "../assets/MailButton.jsx";
import LinkedInButton from "../assets/LinkedInButton.jsx";

function Footer() {
  const images = loadImages();

  return (
    <>
    <div id="footer-motto">
      Telling Stories With Each And Every Frame
    </div>

    <div id="flare-section-carousel-wrapper">
      <div class="flare-section-card-group">
        {images.map((src, i) => (
          <CarouselCard key={i} src={src} alt="" />
        ))}
      </div>
      <div class="flare-section-card-group">
        {images.map((src, i) => (
          <CarouselCard key={i} src={src} alt="" />
        ))}
      </div>
    </div>

      <div id="footerContainer" className="grid">

        <div className="footer-pages-wrapper">
            <a href="/" className="footer-page"><ArrowLink />Home</a>
            <a href="/work" className="footer-page"><ArrowLink />Work</a>
            <a href="/about" className="footer-page"><ArrowLink />About</a>
            <a href="/contact" className="footer-page"><ArrowLink />Contact</a>
            <a href="https://studioflashpoint.com/" target="_blank" className="footer-page"><ArrowLink />Weddings</a>
        </div>

        <img
          id="footer-logo"
          src="/assets/logo-white.svg"
        />

        <div className="footer-contacts-wrapper">
            <a href="https://www.instagram.com/cadenchan.design" target="_blank" className="footer-contact-button"><IGButton /></a>
            <a href="https://www.youtube.com/@cadenchandesign" target="_blank" className="footer-contact-button"><YTButton /></a>
            <a href="https://www.linkedin.com/in/caden-chan/" target="_blank" className="footer-contact-button"><LinkedInButton /></a>
            <a href="mailto:caden.perry.chan@gmail.com" className="footer-contact-button"><MailButton /></a>
        </div>

        <div id="captionWrapper">
          <div className="caption white caption-left">
            © Caden Chan. All Rights Reserved. All Lefts Up For Grabs.
          </div>

           <div className="footer-up-button-wrapper">
            <img className="footer-star-group" src="/Icons/star_group_left.svg" />
            
            <div id="backToTop" onClick={backToTop}>
              ⬆
            </div>

            <img className="footer-star-group" src="/Icons/star_group_right.svg" />
          </div>

          <div className="caption white caption-right">
            A website made with love by yours truely{" "}
            <b>
              <i>xoxo</i>
            </b>
          </div>
        </div>
        
        {/*

        <h1 className="center white">All Things Design</h1>

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
        
        */}
      </div>
    </>
  );
}

export default Footer;
