import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

function workBBB() {
    return (
        <>
            <div id="websiteSectionContainer">
                <IntroModule />
                <SectionHead />
                <FullImage />
                <SplitImage />
            </div>
        </>
    );
}

export default workBBB;