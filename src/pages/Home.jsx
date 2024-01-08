import ShowcaseCard from "../components/ShowcaseCard.jsx";

import { showReelHoverOn } from "../js/Main.js";
import { showReelHoverOff } from "../js/Main.js";
import { showreelStart } from "../js/Main.js";
import { showreelEnd } from "../js/Main.js";

function Home() {
  return (
    <>
      <div id="heroSectionWrapper">
        <div id="frontIconGroup"></div>
        <div id="heroTextContainer">
          <h1>CADEN CHAN</h1>
          <div id="hoursJSContainer">
            <h2>
              Working to become the next global threat to
              <br />
              design since <div id="hours"></div>
            </h2>
          </div>
        </div>
        <div id="backIconGroup"></div>
      </div>

      <div id="bouncingBomb">
        <h3>Showreel 2024</h3>
        <p>A once in a life time experience</p>
      </div>

      <div
        id="showreelContainer"
        onMouseOver={showReelHoverOn}
        onMouseOut={showReelHoverOff}
      >
        <div id="showreelThumbnail" onClick={showreelStart}>
          <img src="/Images/Hella_Gear_Facing_Cam_Straight.jpg" />
        </div>

        <div id="showreelVideo" onClick={showreelEnd}>
          <iframe
            src="https://www.youtube.com/embed/vR6UzOTT4pQ?si=5a3tXRb-kUHPMGTD"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <div id="exitButton" onClick={showreelEnd}>
            <img src="/Icons/cross.svg" />
          </div>
        </div>
      </div>

      <div id="websiteSectionContainer">
        <h1>Best Work</h1>

        <div id="spotlightWrapper">
          <ShowcaseCard
            title="Clocking Out"
            subTitle="Mini Documentary"
            para="A story about Chinese-Canadian immigrants that comments on the interconnected relationship between work and family told through my father's perspective."
            link="https://youtu.be/phUrAwCt-ko?si=Pg1BYMiw10VkHDix"
            img="clocking-out-thumb-large.jpg"
            alt="Film Project"
          />

          <ShowcaseCard
            title="Ancient Idols"
            subTitle="A Production Journal"
            para="This is documentation of a hands-on class taken at the Queensland University of Technologoy (QUT) to create real-time environments using industry practices. This 12-week course took us from planning to final render using Maya, Mudbox, and Unreal Engine."
            link="https://sites.google.com/view/caden-chan-3d-production-blog/assignments"
            img="ancient-idol-thumb-large.jpg"
            alt="Real-Time Environments"
          />

          <ShowcaseCard
            title="UWaterloo Concert Band Club Winter Performance 2023"
            subTitle="Recorded Concert Performance"
            para="A live recording of the University of Waterloo Concert Band Club as they perform their end of term concert."
            link="https://youtu.be/exuu0m0dbzk?si=GWwixm4FSBo7z7qb"
            img="uw-concert-thumb-large.jpg"
            alt="Film Project"
          />

          <ShowcaseCard
            title="3D Character Animation"
            subTitle="Assignment Showcase"
            para="A blog dedicated to showcasing fundamental principles in animation I learned across a 12-week course at the Queensland University of Technology (QUT). All animations were created in Maya"
            link="https://new.express.adobe.com/webpage/uCGIoX4RiwBev"
            img="character-anim-thumb-large.jpg"
            alt="Character Animation"
          />

          <ShowcaseCard
            title="Emergency Preperation: How To Deal With a Fire"
            subTitle="Live Action Safety Awareness Video"
            para="A one minute PSA focused teaching the user about what to do if there's a fire emergency without using narration."
            link="https://youtu.be/-BMOM1qkzDo"
            img="fire-emergency-thumb-large.jpg"
            alt="School Porject"
          />

          <ShowcaseCard
            title="Brown Justin Beiber"
            subTitle="Animated Lyric Video"
            para="A stylized lyric video aimed at representing the identity and personality of the artist Suigeneris in his track about Hot Cheetos and the hip-hop lifestyle."
            link="https://vimeo.com/516726385?share=copy"
            img="brown-justin-bieber-thumb-large.png"
            alt="Personal Project"
          />
        </div>
      </div>

      <div id="playButton">
        <img src="/Icons/playButton.svg" />
      </div>
    </>
  );
}

export default Home;
