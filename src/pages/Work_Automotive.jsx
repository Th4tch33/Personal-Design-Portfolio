import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function workAutomotive() {
    return (
        <>
            <IntroModule 
                title="Automotive x SEMA 2025"
                sub1="Clients: SVG & Wraptitude"
                sub2="August to November 2025"
                para={
                        <>
                            I was brought on as the sole videographer and photographer to capture pivotal brand moments for SVG and Wraptitude.
                            As respected automotive businesses, it was essential that their visual presence reflected the excitement and
                            excellence that define their identities. Something evident in every photo and video delivered.
                            <br/><br/>
                            My role spanned the full creative process, from pre-production planning to post-production delivery.
                            I produced authentic photography, captivating social content, and brand-defining films that accurately
                            represent how both companies present themselves.
                        </>
                    }
                tag1="Automotive"
                tag2="Event Coverage"
                tag3="Brand Content"
                heroImage="svg-wraptitude-sema-hero.webp"
            />

            <div id="websiteSectionContainer">

                <WorkCard
                    title="Never Stop Innovating | SVG Brand Film"
                    tag2="Automotive"
                    tag3="Brand Video"
                    tag1="Event Coverage"
                    ytLink="https://www.youtube.com/embed/PmYTsy1AWdE?si=7C4RK0b7cZ8OugvQ"
                    videoOrientation="H"
                    vid="svg/svg-sema-720-55cq-av1.webm"
                    alt="test"
                    id="0"
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
                    <WorkCard
                        title="NS Wraps | Car Wrap Demo"
                        tag1="Social Media"
                        tag2="Showcase"
                        tag3="Product Review"
                        ytLink="https://www.youtube-nocookie.com/embed/3A1pZZOvRrM?si=uvvmR6VxIGqO5W1o"
                        videoOrientation="V"
                        vidAV1="svg/svg-nick-720-55cq-av1.webm"
                        vid="svg/svg-nick-720-28cq-h264.mp4"
                        alt="test"
                        id="1"
                    />
                    <WorkCard
                        title="Apex Autowworkz | Car Wrap Review"
                        tag1="Social Media"
                        tag2="Showcase"
                        tag3="Product Review"
                        ytLink="https://www.youtube-nocookie.com/embed/sNmddtklz4U?si=VZ7bt6z9PhdrHc8A"
                        videoOrientation="V"
                        vidAV1="svg/svg-josh-720-55cq-av1.webm"
                        vid="svg/svg-josh-720-28cq-h264.mp4"
                        alt="test"
                        id="2"
                    />
                    <WorkCard
                        title="Sumo Wrestlers | Durability Test"
                        tag1="Social Media"
                        tag2="Showcase"
                        tag3="Product Review"
                        ytLink="https://www.youtube-nocookie.com/embed/aghCI1HUcOg?si=kpG1Cw8geVahdYuW"
                        videoOrientation="V"
                        vidAV1="svg/svg-sumo-720-55cq-av1.webm"
                        vid="svg/svg-sumo-720-28cq-h264.mp4"
                        alt="test"
                        id="3"
                    />
                </div>

                <div className="sectionHead">
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object3.svg" alt="" loading="lazy"  />
                    </div>
                    Charity Event
                    <div className="sectionHeadDesigns">
                        <img src="/falling-objects/object8.svg" alt="" loading="lazy"  />
                    </div>
                </div>
                
                <WorkCard
                    title="Racing For Good | Wraptitude Charity Event"
                    tag1="Event Coverage"
                    tag2="Automotive"
                    tag3="Charity"
                    ytLink="https://www.youtube.com/embed/8eR0dij1UTc?si=Ujkuj7nSnzwz_Hip"
                    videoOrientation="H"
                    vid="wraptitude_preview.mp4"
                    alt="test"
                    id="4"
                />
            </div>
        </>
    );
}

export default workAutomotive;