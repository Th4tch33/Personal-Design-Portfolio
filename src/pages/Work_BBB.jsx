import IntroModule from "../components/work_modules/BBBIntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCardHorz from "../components/WorkCardHorz.jsx";
import WorkCardVert from "../components/WorkCardVert.jsx";

function workBBB() {
    return (
        <>
            <div id="websiteSectionContainer">
                <IntroModule />

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
                    Animation + Video
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <WorkCardVert
                    title="MSM Discord Announcement"
                    tag1="Commercial Shoot"
                    tag2="After Effects"
                    tag3="Blender 3D"
                    ytLink="https://www.youtube-nocookie.com/embed/-ftTtS5OJFM?si=RWXKyeAYPD-l3Shy"
                    vid="msm_discord_preview.mp4"
                    alt="test"
                    id="1"
                />

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