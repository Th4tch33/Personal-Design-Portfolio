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

            <img src="assets/personal-logo-blue.svg" id="home-hero-logo"/>

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
            title="Asian Roots Collective"
            tag1="Social Media"
            tag2="Ads"
            para="Whether it’s sales, recognition, or relevance, every key business activity relies on a meaningful story that connects customers to your brand. My job is to bring your vision to life through visual marketing that makes what you offer feel invaluable."
            link="/asian-roots-collective"
            vid="arc/sports_preview.mp4"
            alt="Photography and Videography"
            id="0"
          />

          <ShowcaseCard
            title="NACBAIT 2025"
            tag1="Sports"
            tag2="Event Coverage"
            para="NACBAIT 2025 is a three-day annual basketball tournament that celebrates Chinese heritage and fosters competitive play. I was brought on as a one-man media team to produce event photography, video coverage, and animated visuals."
            link="/NACBAIT"
            img="nacbait-thumb-med.jpg"
            alt="Photography and Videography"
            id="1"
          />

          <ShowcaseCard
            title="SVG x Wraptitude at SEMA 2025"
            tag1="Brand Content"
            tag2="Event Coverage"
            para="
                I worked as the sole videographer and photographer to capture pivotal brand moments for SVG and Wraptitude.
                The culmination of that work was attending SEMA 2025 to capture the brand's presence at the convention.
              "
            link="/automotive"
            vidAV1="svg/svg-sema-720-55cq-av1.webm"
            vid="svg/svg-sema-720-28cq-h264.mp4"
            alt="Photography and Videography"
            id="2"
          />

          <ShowcaseCard
              title="My Singing Monsters"
              tag1="Internship"
              tag2="Content Creation"
              para="NACBAIT 2025 is a three-day annual basketball tournament that celebrates Chinese heritage and fosters competitive play. I was brought on as a one-man media team to produce event photography, video coverage, and animated visuals."
              link="/mysingingmonsters"
              vid="msm_preview.mp4"
              alt="Photography and Videography"
              id="3"
          />

        </div>
      </div>
    </>
  );
}

export default Home;
