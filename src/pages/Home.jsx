import ShowcaseCard from "../components/ShowcaseCard.jsx";
import Lottie from "lottie-react";

import animationData from "../assets/personalLogoIdleAnim.json"; // Adjust path as needed
import WorkCard from "../components/WorkCard.jsx";

function Home() {
  return (
    <>
      <div id="heroSectionWrapper">
        <div id="frontIconGroup"></div>
          <div id="personalLogoContainer">

            <Lottie 
              animationData={animationData} 
              id="lottieAnim"
              loop={true} // Play once
              autoplay={true} // Start automatically
            />

            <h3 id="personalLogoSubheadWrapper">ALL THINGS DESIGN</h3>
          </div>
        <div id="backIconGroup"></div>
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

      <div id="websiteSectionContainer">
        <h1>Best Work</h1>

        <div id="spotlightWrapper">

          <ShowcaseCard
              title="NACBAIT 2025"
              tag1="Sports"
              tag2="Event Coverage"
              para="NACBAIT 2025 is a three-day annual basketball tournament that celebrates Chinese heritage and fosters competitive play. I was brought on as a one-man media team to produce event photography, video coverage, and animated visuals."
              link="/workNACBAIT"
              img="nacbait-thumb-med.jpg"
              alt="Photography and Videography"
          />

          <ShowcaseCard
              title="My Singing Monsters"
              tag1="Marketing"
              tag2="Video"
              tag3="Graphic"
              para="My Singing Monsters is a mobile game with 50+ million downloads and millions of followers across their socials. I worked as a marketing specialist responsible for engaging the fanbase with creative and entertaining content."
              link="/workBBB"
              img="msm-thumb-large.jpg"
              alt="Photography and Videography"
          />
 
          <ShowcaseCard
            title="Action Sports Filmmaking"
            tag1="Sports"
            tag2="Video"
            tag3="Photo"
            para="I work as a photographer and videographer to capture the highlights of sporting events. To emphasize the stories captured on camera, I use mulitple mediums including videography, photography, and motion graphics."
            link="/workVBall"
            img="bumpin-matt-thumb-large.jpg"
            alt="Photography and Videography"
            id="0"
          />

          <ShowcaseCard
            title="Clocking Out"
            tag1="Documentary"
            tag2="Video"
            para="A story about Chinese-Canadian immigrants that comments on the interconnected relationship between work and family told through my father's perspective."
            ytLink="https://www.youtube.com/embed/phUrAwCt-ko?si=Pg1BYMiw10VkHDix"
            videoOrientation="H"
            img="clocking-out-thumb-large.jpg"
            alt="Film Project"
          />

          <ShowcaseCard
            title="Ancient Idols"
            tag1="3D"
            tag2="Unreal Engine"
            tag3="Documentation"
            para="This is documentation of a hands-on class taken at the Queensland University of Technologoy (QUT) to create real-time environments using industry practices. This 12-week course took us from planning to final render using Maya, Mudbox, and Unreal Engine."
            link="https://sites.google.com/view/caden-chan-3d-production-blog/assignments"
            img="ancient-idol-thumb-large.jpg"
            alt="Real-Time Environments"
          />

          <ShowcaseCard
            title="Start Your Day With Sun"
            tag1="3D Animation"
            tag2="Blender"
            para="A school project with the goal to create a 30-second PSA to bring social change using motion graphics in a vertical video format. Whether big or small, communicate a call to action to the viewer persuasively and engagingly. I wanted to bring more awareness to the simple practice of getting morning sunlight after waking up to improve your day. Additionally, this was an opportunity to deliver the message using 3D animation to challenge my skills within the medium."
            ytLink="https://www.youtube.com/embed/o3pfyFR_2LA?si=vZlKktK3VpnGu-BS"
            videoOrientation="V"
            img="start-with-sun-thumb-large.jpg"
            alt="Real-Time Environments"
          />

        </div>
      </div>
    </>
  );
}

export default Home;
