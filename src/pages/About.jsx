import ShowcaseCard from "../components/ShowcaseCard.jsx";
import WorkCard from "../components/WorkCard.jsx";

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

          <div id="websiteSectionContainer" className="showreelSection">
            <WorkCard 
              title="Showreel 2025"
              tag1="Video"
              tag2="Motion Graphics"
              tag3="3D"
              ytLink="https://www.youtube.com/embed/CJAkoo-nidw?si=5HWdZHNaqTJTxwjC"
              videoOrientation="H"
              vid="showreel_2025_preview.mp4"
              alt="test"
              id="0"
            />
          </div>

          <div id="aboutMeExperience">
            <h1>Experience</h1>
            <div id="experienceList">
              <div className="experienceListItem">
                <h3>Freelance Filmmaker</h3>
                <p>2025 - Present</p>
              </div>

              <div className="experienceListItem">
                <h3>Marketing Specialist Intern @ Big Blue Bubble &<br></br> My Singing Monsters</h3>
                <p>2024 Summer</p>
              </div>

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
                  <a href="/Caden_Chan_Resume_2025.pdf" rel="noreferrer" target="_blank">
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
