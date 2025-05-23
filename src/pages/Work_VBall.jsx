import VBallIntroModule from "../components/work_modules/VBallIntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function workVBall() {
    return (
        <>
            <div id="websiteSectionContainer">
                <VBallIntroModule />

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object9.svg" alt="" loading="lazy"  />
                        <img src="/falling-objects/object6.svg" alt="" loading="lazy"  />
                    </div>
                    Videos
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object2.svg" alt="" loading="lazy"  />
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>
                
                <div className="threeGridImage">
                    <WorkCard
                        title="Bumpin Sports Holiday Tournament Highlights"
                        tag1="Sports"
                        tag2="After Effects"
                        vimeoLink="https://player.vimeo.com/video/1067477932?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                        videoOrientation="V"
                        vid="bumpin_tourney_preview.mp4"
                        alt="test"
                        id="0"
                    />
                    <WorkCard
                        title="UWaterloo Volleyball Varsity Team Highlights"
                        tag1="Sports"
                        tag2="After Effects"
                        vimeoLink="https://player.vimeo.com/video/1067479261?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                        videoOrientation="V"
                        vid="uw_varsity_preview.mp4"
                        alt="test"
                        id="1"
                    />
                    <WorkCard
                        title="Bumpin Sports League Highlights"
                        tag1="Sports"
                        tag2="After Effects"
                        vimeoLink="https://player.vimeo.com/video/1067482314?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
                        videoOrientation="V"
                        vid="bumpin_league_preview.mp4"
                        alt="test"
                        id="2"
                    />
                </div>

                <div className="threeGridImage">
                    <WorkCard
                        title="Bumpin Sports One Shot Clip"
                        tag1="Sports"
                        ytLink="https://www.youtube-nocookie.com/embed/qsqpqxkn2Gw?si=1PXzurIGCJ25We4e"
                        videoOrientation="V"
                        vid="bumpin_tourney_clip_preview.mp4"
                        alt="test"
                        id="3"
                    />
                    <WorkCard
                        title="UWaterloo Volleyball Club Highlights"
                        tag1="Sports"
                        ytLink="https://www.youtube-nocookie.com/embed/bWi7J2Vljo4?si=HrSi1YqduPTPREjO"
                        videoOrientation="V"
                        vid="stank_tournament_preview.mp4"
                        alt="test"
                        id="4"
                    />
                    <WorkCard
                        title="Bumpin Sports Jan 27th Tournament Highlights"
                        tag1="Sports"
                        videoOrientation="V"
                        ytLink="https://www.youtube-nocookie.com/embed/xtqNKx1-vrY?si=cHhs4bOBJwIHqhcJ"
                        vid="bumpin_tourney_second_preview.mp4"
                        alt="test"
                        id="5"
                    />
                </div>

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object7.svg" alt="" loading="lazy"  />
                    </div>
                    Photography
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object8.svg" alt="" loading="lazy"  />
                    </div>
                </div>
        
                <div className="threeGridImage">        
                    <img src="/Images/Sports/commentator-portrait01.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/commentator-portrait02.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/commentator-portrait03.jpg" alt="" loading="lazy" />
                </div>

                <div className="fullScreenImage">
                    <img src="/Images/Sports/ultamite-full01.jpg" alt="" loading="lazy" />
                </div>  

                <div className="threeGridImage">        
                    <img src="/Images/Sports/ultamite-portrait01.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/ultamite-portrait02.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/ultamite-portrait03.jpg" alt="" loading="lazy" />
                </div>

                <div className="fullScreenImage">
                    <img src="/Images/Sports/vball-full04.jpg" alt="" loading="lazy" />
                </div> 

                <div className="threeGridImage">        
                    <img src="/Images/Sports/vball-portrait01.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/vball-portrait02.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/vball-portrait03.jpg" alt="" loading="lazy" />
                </div>

                <div className="splitScreenImage">
                    <img src="/Images/Sports/vball-full03.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/vball-full02.jpg" alt="" loading="lazy" />
                </div>
            </div>
        </>
    );
}

export default workVBall;