import { FilloutStandardEmbed } from "@fillout/react";

function Contact() {
  return (
    <>
      <div id="websiteSectionContainer">
        <h1 id="contactHead">Let's Connect!</h1>

        <div id="contactSubHead">
          Got a project coming up and need a hand? Send me an email or fillout the <br/>form below and I'll get back to you ASAP.
        </div>

        <div id="contactMail">
          <a href="mailto:caden.perry.chan@gmail.com" rel="noreferrer" target="_blank">caden.perry.chan@gmail.com</a>
        </div>

        <FilloutStandardEmbed dynamicResize filloutId="7EAWcQk3c7us" />

        {/*
        <div id="socialAnimIconContainer">
          <div id="animIconWrapper">
            <a href="https://www.instagram.com/cadenchan.design/">
              <video
                src="/Images/Contact/ig-logo.mp4"
                autoPlay
                loop
                preload="auto"
                muted
                id="ig"
              ></video>
            </a>
          </div>

          <div id="animIconWrapper">
            <a href="https://www.linkedin.com/in/caden-chan/">
              <video
                src="/Images/Contact/linkedin-logo.mp4"
                autoPlay
                loop
                preload="auto"
                muted
                id="linkedin"
              ></video>
            </a>
          </div>

          <div id="animIconWrapper">
            <a href="https://www.behance.net/cadenchan2">
              <video
                src="/Images/Contact/behance-logo.mp4"
                autoPlay
                loop
                preload="auto"
                muted
                id="behance"
              ></video>
            </a>
          </div>
        </div>

        */}
      </div>
    </>
  );
}

export default Contact;
