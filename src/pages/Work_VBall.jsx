import VBallIntroModule from "../components/work_modules/VBallIntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

function workVBall() {
    return (
        <>
            <div id="websiteSectionContainer">
                <VBallIntroModule />

                <div className="sectionHead">Videos</div>

                <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/reel/DEjE6sftMec/" data-instgrm-version="14"></blockquote>
                <script async src="https://www.instagram.com/embed.js"></script>

                <div className="threeGridImage">
                    <iframe className="vertVideo" src="https://www.instagram.com/reel/DDsDRJrS-Bz/embed" frameborder="0" scrolling="no"></iframe>
                    <iframe className="vertVideo" src="https://www.instagram.com/reel/DE07WMZAkpQ/embed" frameborder="0" scrolling="no"></iframe>
                    <iframe className="vertVideo" src="https://www.instagram.com/reel/C4inZJfAohn/embed" frameborder="0" scrolling="no"></iframe>
                </div>

                <div className="threeGridImage">
                    <iframe className="vertVideo" src="https://www.instagram.com/reel/DDsDoo7S1XR/embed" frameborder="0" scrolling="no"></iframe>
                    <iframe className="vertVideo" src="https://www.instagram.com/reel/DEtNErnMxne/embed" frameborder="0" scrolling="no"></iframe>
                    <iframe className="vertVideo" src="https://www.instagram.com/p/DEi59x-M6wQ/embed" frameborder="0" scrolling="no"></iframe>
                </div>

                <div className="sectionHead">Photography</div>
                
                
                
                <div className="fullScreenImage">
                    <img src="/Images/Sports/ultamite-full01.jpg" alt="" loading="lazy" />
                </div>  

                <div className="threeGridImage">        
                    <img src="/Images/Sports/ultamite-portrait01.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/ultamite-portrait02.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/ultamite-portrait03.jpg" alt="" loading="lazy" />
                </div>

                <div className="splitScreenImage">
                    <img src="/Images/Sports/ultamite-full02.jpg" alt="" loading="lazy" />
                    <img src="/Images/Sports/ultamite-full04.jpg" alt="" loading="lazy" />
                </div>

                <div className="fullScreenImage">
                    <img src="/Images/Sports/vball-full01.jpg" alt="" loading="lazy" />
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

                <div className="fullScreenImage">
                    <img src="/Images/Sports/vball-full04.jpg" alt="" loading="lazy" />
                </div> 
            </div>
        </>
    );
}

export default workVBall;