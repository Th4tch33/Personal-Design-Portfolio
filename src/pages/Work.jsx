import WorkCard from "../components/WorkCard.jsx";

function Work() {
  return (
    <>
      <div id="websiteSectionContainer">
            <h1>Portfolio Work</h1>      
            <p>A lot of different work done in a lot of different ways.</p>

            <div id="workWrapper">
                <WorkCard
                  title="My Singing Monsters"
                  tag1="Internship"
                  tag2="Content Creation"
                  link="/workBBB"
                  vid="msm_preview.mp4"
                  alt="test"
                  id="0"
                />

                <WorkCard
                  title="Action Sports Filmmaking"
                  tag1="Camerawork"
                  tag2="Motion Graphics"
                  link="/WorkVBall"
                  vid="bumpin_matt_preview.mp4"
                  alt="test"
                  id="2"
                />

                <WorkCard
                  title="Warriors vs Gee-Gees"
                  tag1="Sport Videography"
                  tag2="Video Editing"
                  link="https://youtu.be/0w7El6HVczI?si=lCGv1NNWAWujwQRu"
                  vid="UWvOGG_preview.mp4"
                  alt="test"
                  id="3"
                />

                <WorkCard
                  title="Clocking Out"
                  tag1="Cinematography"
                  tag2="Mini Documentary"
                  link="https://youtu.be/phUrAwCt-ko?si=Pg1BYMiw10VkHDix"
                  vid="clocking_out_preview.mp4"
                  alt="test"
                  id="1"
                />

                <WorkCard
                  title="The Little Things in Life"
                  tag1="Cinematography"
                  link="https://youtu.be/p0GQrReJH3Q?si=OFn57UmQg_egTeMy"
                  vid="little_things_preview.mp4"
                  alt="test"
                  id="4"
                />

                <WorkCard
                  title="Ancient Idol"
                  tag1="3D Asset Creation"
                  tag2="Environment Design"
                  link="https://sites.google.com/view/caden-chan-3d-production-blog/assignments"
                  vid="ancient_idol_preview.mp4"
                  alt="test"
                  id="5"
                />

                <WorkCard
                  title="Start Your Day With Sun"
                  tag1="3D Animation"
                  link="https://youtube.com/shorts/o3pfyFR_2LA?si=vZlKktK3VpnGu-BS"
                  img="start-with-sun-thumb-large.jpg"
                  alt="test"
                  id="6"
                />

                <WorkCard
                  title="Brown Justin Beiber"
                  tag1="Lyric Video"
                  tag2="Motion Graphics"
                  link="https://vimeo.com/516726385?share=copy"
                  vid="brown_justin_bieber_preview.mp4"
                  alt="test"
                  id="7"
                />

                <WorkCard
                  title="UWaterloo Concert Band"
                  tag1="Videography"
                  link="https://youtu.be/exuu0m0dbzk?si=GWwixm4FSBo7z7qb"
                  vid="uw_band_preview.mp4"
                  alt="test"
                  id="8"
                />

                <WorkCard
                  title="3D Character Animation"
                  tag1="Character Animation"
                  link="https://new.express.adobe.com/webpage/uCGIoX4RiwBev"
                  vid="character_animation_preview.mp4"
                  alt="test"
                  id="9"
                />

                {/*

                <WorkCard
                  title="Home to Stay 🛠️"
                  tag1="Brand Design"
                  link=""
                  img="home-to-stay-thumb-large.jpg"
                  alt="test"
                  id="10"
                />

                <WorkCard
                  title="Fundamentals First"
                  tag1="UI/UX"
                  tag2="Website Design"
                  link="https://funfirst.blog/"
                  img="fun-first-thumb-large.png"
                  alt="test"
                  id="11"
                /> */}
          </div>

        </div>
    </>
  );
}

export default Work;
