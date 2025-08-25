import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function workRacingForGood() {
    return (
        <>
            <IntroModule 
                title="Racing For Good"
                sub1="Automotive Charity Event"
                sub2="August 2025"
                para={
                        <>
                            I was brought on as a videographer to capture the highlights of Racing for Good, a half-day charity event uniting local Markham businesses in support of the regional hospital and school board. The initiative bridged gaming, automotive culture, and mental health awareness, creating an atmosphere that was both exciting and meaningful.
                            <br/> <br/>
                            My coverage showcased what made the event so memorable—sponsored organizations, enthusiastic attendees, competitive racing simulators, nostalgic retro consoles, and an impressive lineup of luxury cars.
                        </>
                    }
                tag1="Automotive"
                tag2="Event Coverage"
                heroImage="rfg-hero.jpg"
            />

            <div id="websiteSectionContainer">
                
                <WorkCard
                    title="Racing For Good | Automotive Charity Event"
                    tag1="Event Coverage"
                    tag2="Automotive"
                    tag3="Charity Event"
                    ytLink="https://www.youtube.com/embed/8eR0dij1UTc?si=Ujkuj7nSnzwz_Hip"
                    videoOrientation="H"
                    vid="wraptitude_preview.mp4"
                    alt="test"
                    id="0"
                />

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object9.svg" alt="" loading="lazy"  />
                        <img src="/falling-objects/object6.svg" alt="" loading="lazy"  />
                    </div>
                    Extra Shots
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object2.svg" alt="" loading="lazy"  />
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <div className="splitScreenImage">
                    <iframe
                        frameBorder="0"
                        className="videoDisplay"
                        src="https://www.youtube.com/embed/NISNhRREQ4I?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=NISNhRREQ4I"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />

                    <iframe
                        frameBorder="0"
                        className="videoDisplay"
                        src="https://www.youtube.com/embed/IqOqZCjnmek?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=IqOqZCjnmek"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            </div>

        </>
    );
}

export default workRacingForGood;