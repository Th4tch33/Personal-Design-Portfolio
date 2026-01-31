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

            <img src="public/assets/personal-logo-blue.svg" id="home-hero-logo"/>

            {/*
            <Lottie 
              animationData={animationData} 
              id="lottieAnim"
              loop={true} // Play once
              autoplay={true} // Start automatically
            />
            */}

            <h3 id="personalLogoSubheadWrapper">End-to-End Video Production</h3>

          </div>
        <div id="backIconGroup"></div>
      </div>

      <div id="websiteSectionContainer">
        <h1>Best Work</h1>

        <div id="spotlightWrapper">

          <ShowcaseCard
            title="Automotive x SEMA 2025"
            tag1="Brand Content"
            tag2="Event Coverage"
            tag3="Video"
            para="I work as a photographer and videographer to capture the highlights of sporting events. To emphasize the stories captured on camera, I use mulitple mediums including videography, photography, and motion graphics."
            link="/automotive"
            vid="svg/svg-sema-720-55cq-av1.webm"
            alt="Photography and Videography"
            id="2"
          />

          <ShowcaseCard
            title="Asian Roots Collective"
            tag1="Social Media"
            tag2="Ads"
            para="Whether it’s sales, recognition, or relevance, every key business activity relies on a meaningful story that connects customers to your brand. My job is to bring your vision to life through visual marketing that makes what you offer feel invaluable."
            link="/brands"
            vid="arc/sports_preview.mp4"
            alt="Photography and Videography"
            id="1"
          />

          <ShowcaseCard
              title="NACBAIT 2025"
              tag1="Sports"
              tag2="Event Coverage"
              para="NACBAIT 2025 is a three-day annual basketball tournament that celebrates Chinese heritage and fosters competitive play. I was brought on as a one-man media team to produce event photography, video coverage, and animated visuals."
              link="/NACBAIT"
              img="nacbait-thumb-med.jpg"
              alt="Photography and Videography"
              id="3"
          />

        </div>
      </div>
    </>
  );
}

export default Home;
