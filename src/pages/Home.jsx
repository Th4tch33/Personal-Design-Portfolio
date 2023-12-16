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
        <h3>Showreel 2023</h3>
        <p>Here's what I'm all about</p>
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
            src="https://www.youtube.com/embed/I2NGzw_BQxA?modestbranding=1&showinfo=0"
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
            link="https://youtu.be/phUrAwCt-ko"
            img="clocking-out-thumb-large.jpg"
            alt="Film Project"
          />

          <ShowcaseCard
            title="UWaterloo Concert Band Club Winter Performance 2023"
            subTitle="Recorded Concert Performance"
            para="A stylized lyric video aimed at representing the identity and personality of the artist Suigeneris in his track about Hot Cheetos and the hip-hop lifestyle."
            link="https://youtu.be/exuu0m0dbzk?si=GWwixm4FSBo7z7qb"
            img="uw-concert-thumb-large.jpg"
            alt="Film Project"
          />

          <ShowcaseCard
            title="Emergency Preperation: How To Deal With a Fire"
            subTitle="Live Action Safety Awareness Video"
            para="Uh oh"
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
