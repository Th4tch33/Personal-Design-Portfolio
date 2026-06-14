import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function WorkBTS() {
    return (
        <>
            <IntroModule 
                title="Behind The Scenes Films"
                sub1="The Story Behind the Production"
                para="Filming a commercial feels like a documentary with countless moments of execution, stuggle, and triumph. So why not get that on film too? I help commercials document and highlight their professionalism, expertise, and production atmosphere to display their value to new and existing clients."
                tag1="Commercial"
                tag2="Brand Content"
                tag3="Filmmaking"
                heroImage="weddings_thumb.webp"
            />

            <div id="websiteSectionContainer">

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object6.svg" alt="" loading="lazy"  />
                    </div>
                    Films
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <div className="fullScreenImage">
                    <WorkCard
                        title="Still Early Studios | Dream To Dance 2025 Media Day | BTS"
                        tag1="BTS"
                        tag2="Brand Video"
                        tag3="Documentary"
                        ytLink="https://youtube.com/embed/47t3HRU5tts?si=sceSgzkMIDU1ajAW"
                        videoOrientation="H"
                        vid="J&LWedding_trailer_preview.mp4"
                        alt="test"
                        id="6"
                    />
                </div>

                <div className="fullScreenImage">
                    <WorkCard
                        title="SENOVVA x BET99 | Superstitious Fans | BTS"
                        tag1="BTS"
                        tag2="Commercial"
                        tag3="Documentary"
                        ytLink="https://youtube.com/embed/czoweAykAQI?si=k5Jrv6khIvTfWwbk"
                        videoOrientation="H"
                        vid="J&LWedding_trailer_preview.mp4"
                        alt="test"
                        id="6"
                    />
                </div>

                <div className="fullScreenImage">
                    <WorkCard
                        title="SENOVVA x BET99 | Poor Bob | BTS"
                        tag1="BTS"
                        tag2="Commercial"
                        tag3="Documentary"
                        ytLink="https://youtube.com/embed/JU2ag2IMcZ0?si=9zv0jaxUhfVawbEL"
                        videoOrientation="H"
                        vid="J&LWedding_preview.mp4"
                        alt="test"
                        id="7"
                    />
                </div>
            </div>
        </>
    );
}

export default WorkBTS;