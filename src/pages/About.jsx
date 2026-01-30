import ShowcaseCard from "../components/ShowcaseCard.jsx";
import WorkCard from "../components/WorkCard.jsx";

import { loadImages } from "../js/logoLoader.js";
import CarouselCard from "../components/CrouselCard.jsx";

function About() {
  const images = loadImages();

  return (
    <>
      <div id="aboutIconGroup"></div>

      <div id="websiteSectionContainer">
        <div id="aboutMeWrapper">

          <img src="/Images/me-hero.png" alt="Caden Chan" className="about-hero-image" />

          <div className="about-info-wrapper">
              <h1>Hey! I'm Caden Chan</h1>

              <div id="aboutMeText">
                <p>
                  My goal as a videographer is to entertain through storytelling.
                  It’s the most powerful way to connect with people and leave an impression long after the video ends.
                  There’s no shortage of stories that matter, every person, business, and community has one worth telling.
                  My job is to present those stories in a way that makes people stop and listen.
                  <br/>
                  <br/>
                </p>
                <p>
                  I work with brands that are ready to stand out by looking and sounding unmistakably like themselves.
                  Whether you’re a small business, a passion project, or a larger company,
                  I help shape your story into something that resonates with your audience and leaves a lasting impression.
                </p>
              </div>
          </div>

          {/*
          
          <div id="about-client-display-header">
            Working with Brands to Make Something Memorable
          </div>

          <div id="flare-section-carousel-wrapper">
            <div className="flare-section-card-group">
              {images.map((src, i) => (
                <CarouselCard key={i} src={src} alt="" />
              ))}
            </div>
            <div className="flare-section-card-group">
              {images.map((src, i) => (
                <CarouselCard key={i} src={src} alt="" />
              ))}
            </div>
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
          */}
        </div>
      </div>
    </>
  );
}

export default About;
