import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function workBBB() {
    return (
        <>
            <IntroModule 
                    title="My Singing Monsters"
                    sub1="Marketing Specialist @  Big Blue Bubble"
                    sub2="May 2024  -  Aug 2024"
                    para={
                        <>
                            I worked at a mobile games company during a 4 month co-op as a marketing specialist for their flagship title My Singing Monsters! My job was to continually create captivating digital content to be posted across their social media platform to engage their unique audience.
                            <br /><br />
                            My work would be posted to multiple 100k+ follower social media accounts that I would also help manage including Instagram, Twitter, TikTok, and YouTube.
                            <br /><br />
                            My work is multi-disciplinary spanning many mediums like graphic design, illustration, product photography, 3D modeling, and filming. Below is what I was able to get done during my internship, hope you enjoy the view!
                        </>
                        }
                    
                    tag1="Internship"
                    tag2="Social Media Marketing"
                    tag3="Content Creation"
                    heroImage="bbb-hero.jpg"
                />
            <div id="websiteSectionContainer">

                <WorkCard
                    title="MSM 10th Anniversary Livestream Intro"
                    tag1="Commercial Shoot"
                    tag2="After Effects"
                    tag3="Premiere Pro"
                    ytLink="https://www.youtube-nocookie.com/embed/yZbp-z0kPOw?si=eNKUkrGkeQYfrxuL"
                    videoOrientation="H"
                    vid="msm_preview.mp4"
                    alt="test"
                    id="0"
                />

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object1.svg" alt="" loading="lazy"  />
                    </div>
                    Animation + Video
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <WorkCard
                    title="MSM Discord Announcement"
                    tag1="Commercial Shoot"
                    tag2="After Effects"
                    tag3="Blender 3D"
                    ytLink="https://www.youtube-nocookie.com/embed/-ftTtS5OJFM?si=RWXKyeAYPD-l3Shy"
                    videoOrientation="V"
                    vid="msm_discord_preview.mp4"
                    alt="test"
                    id="1"
                />

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object3.svg" alt="" loading="lazy"  />
                    </div>
                    Social Media Posts
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object8.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <div className="threeGridImage">
                    <img src="/Images/BBB/BBB_Social_Goodnight.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/BBB_Social_Book.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/BBB_Social_Meditation.jpg" alt="" loading="lazy" />
                </div>

                <div className="splitScreenImage">
                    <img src="/Images/BBB/BBB_Social_JJK.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/BBB_Social_Album.jpg" alt="" loading="lazy" />
                </div>

                <div className="threeGridImage">
                    <img src="/Images/BBB/BBB_Social_Burger.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/BBB_Social_Camera.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/BBB_Social_WoW.jpg" alt="" loading="lazy" />
                </div>

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object8.svg" alt="" loading="lazy"  />
                    </div>
                    Product Photography
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object7.svg" alt="" loading="lazy"  />
                    </div>
                </div>
                
                <div className="splitScreenImage">
                    <img src="/Images/BBB/BBB_Product_Last.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/BBB_Product_LastLast.jpg" alt="" loading="lazy" />
                </div>

                <div className="fullScreenImage">
                    <img src="/Images/BBB/BBB_Product_Full.jpg" alt="" loading="lazy" />
                </div>                

                <div className="splitScreenImage">
                    <img src="/Images/BBB/BBB_Product_BTS_Front.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/BBB_Product_BTS_Back.jpg" alt="" loading="lazy" />
                </div>

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object1.svg" alt="" loading="lazy"  />
                    </div>
                    3D Modeling
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object8.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <div className="fullScreenImage">
                    <img src="/Images/BBB/BBB_3D_Pango.jpg" alt="" loading="lazy" />
                </div>  

                <div className="splitScreenImage">
                    <img src="/Images/BBB/BBB_3D_BG.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/Ink_Machine_Views.gif" alt="" loading="lazy" />
                </div>

                <div className="threeGridImage">
                    <img src="/Images/BBB/Barrel_Texture_Paint.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/Breeding_Structure_Texture_Paint.jpg" alt="" loading="lazy" />
                    <img src="/Images/BBB/Crate_Texture_Paint.jpg" alt="" loading="lazy" />
                </div>

                <div className="fullScreenImage">
                    <img src="/Images/BBB/BBB_3D_Gem.jpg" alt="" loading="lazy" />
                </div> 

                <div className="fullScreenImage">
                    <img src="/Images/BBB/BBB_3D_Coin.jpg" alt="" loading="lazy" />
                </div> 
                
                {/*}
                <SectionHead />
                <FullImage />
                <SplitImage />
                */}
            </div>
        </>
    );
}

export default workBBB;