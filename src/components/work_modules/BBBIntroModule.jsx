import WorkCard from "../WorkCard.jsx";

function introModule() {
    return (
        <>
            <div className="introInfoContainer">
                
                <div className="introTitle">
                    My Singing Monsters
                </div>

                <div className="introSubTitle">
                    <div>Marketing Specialist  //  Big Blue Bubble</div>
                    <div><br/>May 2024  -&gt;  Aug 2024</div>
                </div>

                <div className="introInfoPara">
                    <div className="introTitle">Hey!</div>
                    <p>
                        I worked at a mobile games company during a 4 month co-op as a marketing specialist for their flagship title My Singing Monsters! My job was to continually create captivating digital content to be posted across their social media platform to engage their unique audience.
                        <br></br><br></br>
                        My work would be posted to multiple 100k+ follower social media accounts that I would also help manage including Instagram, Twitter, TikTok, and YouTube.
                        <br></br><br></br>
                        My work is multi-disciplinary spanning many mediums like graphic design, illustration, product photography, 3D modeling, and filming. Below is what I was able to get done during my internship, hop you enjoy the view!
                    </p>
                </div>

                <WorkCard
                    title="MSM 10th Anniversary Livestream Intro"
                    tag1="Commercial Shoot"
                    tag2="After Effects"
                    tag3="Premiere Pro"
                    ytLink="https://www.youtube-nocookie.com/embed/yZbp-z0kPOw?si=eNKUkrGkeQYfrxuL"
                    videoOrientation="H"
                    vid="msm_preview.mp4"
                    alt="test"
                    id="0"
                />

            </div>
        </>
    );
}

export default introModule;