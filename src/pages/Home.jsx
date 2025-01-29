import ShowcaseCard from "../components/ShowcaseCard.jsx";

function Home() {
  return (
    <>
      <div id="heroSectionWrapper">
        <div id="frontIconGroup"></div>
          <div id="personalLogoContainer">
            <img src="assets/personal-logo-blue.svg"></img>
            <h3 id="personalLogoSubheadWrapper">ALL THINGS DESIGN</h3>
          </div>
        <div id="backIconGroup"></div>
      </div>
      
      <div id="websiteSectionContainer" className="showreelSection">
        <h1>Showreel 2024</h1>
        <p>Want to know what I've been up to? It's as easy as watching this!</p>
        <iframe id="showreelVideo" src="https://www.youtube.com/embed/vR6UzOTT4pQ?si=I7oWSh-v05VGoKec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div id="websiteSectionContainer">
        <h1>Best Work</h1>

        <div id="spotlightWrapper">

        <ShowcaseCard
            title="My Singing Monsters"
            subTitle="Marketing Specialist"
            para="My Singing Monsters is a mobile game with 50+ million downloads and millions of followers across their socials. I worked as a marketing specialist responsible for engaging the fanbase with creative and entertaining content."
            link="/workBBB"
            img="msm-thumb-large.jpg"
            alt="Photography and Videography"
        />

        <ShowcaseCard
          title="Action Sports Filmmaking"
          subTitle="Sports Videography"
          para="I work as a photographer and videographer to capture the highlights of sporting events. To emphasize the stories captured on camera, I use mulitple mediums including videography, photography, and motion graphics."
          link="/WorkVBall"
          img="bumpin-matt-thumb-large.jpg"
          alt="Photography and Videography"
        />

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
            title="Start Your Day With Sun"
            subTitle="A Public Service Announcement"
            para="A school project with the goal to create a 30-second PSA to bring social change using motion graphics in a vertical video format. Whether big or small, communicate a call to action to the viewer persuasively and engagingly. I wanted to bring more awareness to the simple practice of getting morning sunlight after waking up to improve your day. Additionally, this was an opportunity to deliver the message using 3D animation to challenge my skills within the medium."
            link="https://youtube.com/shorts/o3pfyFR_2LA?si=vZlKktK3VpnGu-BS"
            img="start-with-sun-thumb-large.jpg"
            alt="Real-Time Environments"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
