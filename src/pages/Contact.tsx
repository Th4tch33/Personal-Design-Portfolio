function Contact() {
  return (
    <>
      <div id="websiteSectionContainer">
        <div id="contactHead">OPEN TO CHAT</div>

        <div id="contactSubHead">
          Hit me up if you like what I’m about!
          <br />
          I’m currently seeking work and internship opportunities.
        </div>

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

        <div id="contactMail">
          Mail To: <a href="mailto:caden.perry.chan@gmail.com" />
          caden.perry.chan@gmail.com
        </div>
      </div>
    </>
  );
}

export default Contact;
