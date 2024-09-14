function About() {
  return (
    <>
      <div id="aboutIconGroup"></div>

      <div id="websiteSectionContainer">
        <div id="aboutMeWrapper">
          <img src="/Images/Hella_Gear_Facing_Cam_Straight.jpg" />
          <h1>A Little About Me</h1>

          <div id="aboutMeText">
            <p>
              <b>Hey!</b> I'm Caden, a digital art student exploring the need
              for good design in our world and understanding how to apply it at
              the highest level.
            </p>
            <p>
              Over the last few years, it's been amazing coming across so much
              professional work that is practically useful and visually
              stunning. These types of work have expanded what I thought the
              design could be and continue to fuel my eagerness to learn. In the
              future, I hope to move people worldwide with meaningful messages
              that also look pretty.
            </p>
          </div>

          <div id="aboutMeExperience">
            <h1>Experience</h1>
            <div id="experienceList">
              <div className="experienceListItem">
                <h3>Motion Design Freelancer @ SJC</h3>
                <p>2022 Winter</p>
              </div>
              <div className="experienceListItem">
                <h3>Motion Design Intern @ SJC</h3>
                <p>2022 Summer</p>
              </div>
              <div className="experienceListItem">
                <h3>Full Resume 📄</h3>
                <a href="/Caden_Chan_Resume_2024_3D.pdf" rel="noreferrer" target="_blank">
                  <div className="button">Click to View</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
