import IntroModule from "../components/work_modules/IntroModule.jsx"
import FullImage from "../components/work_modules/FullImage.jsx"
import SplitImage from "../components/work_modules/SplitImage.jsx"
import SectionHead from "../components/work_modules/SectionHead.jsx"

function workBBB() {
    return (
        <>
            <div id="websiteSectionContainer">
                <IntroModule />

                <div className="sectionHead">Social Media Posts</div>

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

                <div className="sectionHead">Product Photography</div>
                
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

                <div className="sectionHead">Animation + Video</div>

                <iframe width="315" height="560"
                src="https://www.youtube-nocookie.com/embed/-ftTtS5OJFM?si=RWXKyeAYPD-l3Shy"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>

                <div className="sectionHead">3D Modeling</div>

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