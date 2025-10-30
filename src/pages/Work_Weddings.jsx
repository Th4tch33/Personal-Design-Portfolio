import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function WorkBrands() {
    return (
        <>
            <IntroModule 
                title="Wedding Films"
                sub1="Make moments last a lifetime"
                para="Weddings are the culmination of a couple’s journey. A celebration of love, dedication, and shared dreams condensed into one beautiful story. From intimate moments to grand celebrations, every scene holds meaning that deserves to be remembered vividly. My job as a wedding videographer is to capture those moments and craft them into a film that doesn’t just show what happened, but lets you feel what it was like to be there."
                tag1="Weddings"
                tag2="Event Coverage"
                tag3="Video Editing"
                heroImage="weddings_thumb.webp"
            />

            <div id="websiteSectionContainer">

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object6.svg" alt="" loading="lazy"  />
                    </div>
                    Wedding Trailers
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <div className="fullScreenImage">
                    <WorkCard
                        title="Jackelyn & Lawrance | Wedding Trailer | Skating Through Life Together"
                        tag1="Wedding Trailer"
                        tag2="Cinematography"
                        tag3="Video Editing"
                        ytLink="https://youtube.com/embed/2IKJFZfOdEI?si=r19PvLSzFshvonkf"
                        videoOrientation="H"
                        vid="J&LWedding_trailer_preview.mp4"
                        alt="test"
                        id="6"
                    />
                </div>

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object6.svg" alt="" loading="lazy"  />
                    </div>
                    Wedding Films
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object11.svg" alt="" loading="lazy"  />
                    </div>
                </div>

                <div className="fullScreenImage">
                    <WorkCard
                        title="Jackelyn & Lawrance | Wedding Film | Skating Through Life Together"
                        tag1="Wedding Film"
                        tag2="Cinematography"
                        tag3="Video Editing"
                        ytLink="https://youtube.com/embed/3bsd27-Lnko?si=VusTg10b-OanHZey"
                        videoOrientation="H"
                        vid="J&LWedding_preview.mp4"
                        alt="test"
                        id="7"
                    />
                </div>

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

                <div className="fullScreenImage">
                    <WorkCard
                    title="An Arlington Estate Wedding | Michelle & Robert"
                    tag1="Wedding Reel"
                    tag2="Cinematography"
                    ytLink="https://youtube.com/embed/kzzxTKNm6d8?si=zVpzfLLv6x4LjdtB"
                    videoOrientation="V"
                    vid="arlington_preview.mp4"
                    alt="test"
                    id="1"
                  />
                </div>
            </div>
        </>
    );
}

export default WorkBrands;