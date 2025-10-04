import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function WorkBrands() {
    return (
        <>
            <IntroModule 
                title="Branded Content"
                sub1="From Social Media to Commercials"
                para="Whether it’s sales, recognition, or relevance, every key business activity relies on a meaningful story that connects customers to your brand. My job is to bring your vision to life through visual marketing that makes what you offer feel invaluable."
                tag1="Corporate"
                tag2="Social Media"
                tag3="Branding"
                heroImage="brands-hero.webp"
            />

            <div id="websiteSectionContainer">
                
                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object9.svg" alt="" loading="lazy"  />
                        <img src="/falling-objects/object6.svg" alt="" loading="lazy"  />
                    </div>
                    Social Media
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object2.svg" alt="" loading="lazy"  />
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <div className="threeGridImage">
                    <WorkCard
                    title="Vision Clarity Optical Clinic"
                    tag1="Clinic Ad"
                    tag2="Branding"
                    ytLink="https://youtube.com/embed/wabmSDuyhTw?si=nCrpu3TG9BApIXxZ"
                    videoOrientation="V"
                    vid="vision_clarity_preview.mp4"
                    alt="test"
                    id="1"
                  />

                  <WorkCard
                    title="Master Tako Grand Opening"
                    tag1="Resturant Ad"
                    tag2="Branding"
                    vimeoLink="https://player.vimeo.com/video/1103982042?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                    videoOrientation="V"
                    vid="master_tako_preview.mp4"
                    alt="test"
                    id="2"
                  />

                  <WorkCard
                    title="MSM Discord Announcement"
                    tag1="Commercial Shoot"
                    tag2="After Effects"
                    tag3="Blender 3D"
                    ytLink="https://www.youtube-nocookie.com/embed/-ftTtS5OJFM?si=RWXKyeAYPD-l3Shy"
                    videoOrientation="V"
                    vid="msm_discord_preview.mp4"
                    alt="test"
                    id="3"
                />
                </div>

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object6.svg" alt="" loading="lazy"  />
                    </div>
                    Event Coverage
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                
                <div className="fullScreenImage">
                    <WorkCard
                        title="MSM 10th Anniversary Livestream Intro"
                        tag1="Commercial Shoot"
                        tag2="After Effects"
                        tag3="Premiere Pro"
                        ytLink="https://www.youtube-nocookie.com/embed/yZbp-z0kPOw?si=eNKUkrGkeQYfrxuL"
                        videoOrientation="H"
                        vid="msm_preview.mp4"
                        alt="test"
                        id="6"
                    />
                </div>

                <div className="fullScreenImage">
                    <WorkCard
                        title="Racing For Good | Automotive Charity Event"
                        tag1="Event Coverage"
                        tag2="Automotive"
                        tag3="Charity Event"
                        ytLink="https://www.youtube.com/embed/8eR0dij1UTc?si=Ujkuj7nSnzwz_Hip"
                        videoOrientation="H"
                        vid="wraptitude_preview.mp4"
                        alt="test"
                        id="7"
                    />
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
            </div>
        </>
    );
}

export default WorkBrands;