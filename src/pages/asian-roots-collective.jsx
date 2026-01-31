import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

import WorkCard from "../components/WorkCard.jsx";

function WorkBrands() {
    return (
        <>
            <IntroModule 
                title="Asian Roots Collective"
                heroImage="arc-hero.webp"
                sub1="A community where Asians can call home"
                tag1="Sports"
                tag2="BrandContent"
                tag3="Event Coverage"
                para= {
                    <p>
                        Asian Roots Collective brought me on as a key editor and videographer to transform their community-defining events and identity
                        into compelling stories for social media. Through their strong connections across sports and the Asian community,
                        I’ve had the opportunity to work alongside major names in entertainment, including the Toronto Raptors, Simu Liu,
                        Jeremy Lin, and JasonTheWeen.
                        <br/><br/>
                        My role has spanned creative direction, live event coverage, and controlled studio production.
                        This range of work allows me to do what I do best: making organizations look their best on camera while staying
                        authentic to who they are.
                    </p>
                }
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
                        title="MC Jin Halftime Performance | ARC Hoops"
                        tag1="Music Performance"
                        tag2="Social Media"
                        ytLink="https://youtube.com/embed/iZ5QErtGxRs?si=2Ql1LdElb8QQivvd"
                        videoOrientation="V"
                        vid="arc/mcjin_preview.mp4"
                        alt="test"
                        id="0"
                    />
                    <WorkCard
                        title="Raptors x ARC Merch Drop"
                        tag1="Merchandise"
                        tag2="Social Media"
                        ytLink="https://youtube.com/embed/CWVkI78kRFQ?si=eZi9SasPrF3t2x0F"
                        videoOrientation="V"
                        vid="arc/raptors-arc-march-720-55cq-av1.webm"
                        alt="test"
                        id="1"
                    />
                    <WorkCard
                        title="ARC Next | Showcase Highlights"
                        tag1="Event Recap"
                        tag2="Showcase"
                        ytLink="https://youtube.com/embed//kZBohbnHpIU?si=z5TUmr0rqNF7enYz"
                        videoOrientation="V"
                        vid="arc/arcnext_preview.mp4"
                        alt="test"
                        id="3"
                    />
                </div>
            </div>
        </>
    );
}

export default WorkBrands;