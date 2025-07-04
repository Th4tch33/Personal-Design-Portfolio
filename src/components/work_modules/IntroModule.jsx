import PropTypes from "prop-types";

import { introModuleCardSpacer } from "../../js/introModule.js";

IntroModule.propTypes = {
    title: PropTypes.string.isRequired,
    sub1: PropTypes.string.isRequired,
    sub2: PropTypes.string,
    para: PropTypes.string.isRequired,
    tag1: PropTypes.string,
    tag2: PropTypes.string,
    tag3: PropTypes.string,
    heroImage: PropTypes.string.isRequired,
};

function IntroModule({ title, sub1, sub2, para, tag1, tag2, tag3, heroImage}) {
    return (
        <>
            <div className="introModuleContainer">
                
                <div className="introModuleBG">
                    <img src={"/Hero/" + heroImage} alt="" loading="lazy" />
                </div>

                <div className="introModuleTextContainer" onLoad={introModuleCardSpacer}>
                    <div className="introModuleTextWrapper">
                        <div className="introInfoDetailWrapper">
                            <div className="introTitle">{title}</div>

                            <div className="introModuleTags">
                                {tag1 && (<h4>{tag1}</h4>)}
                                {tag2 && (<h4>{tag2}</h4>)}
                                {tag3 && (<h4>{tag3}</h4>)}
                            </div>

                            <div className="introSubTitle">
                                <div>{sub1}<br/>{sub2}</div>
                            </div>
                        </div>

                        <div></div>

                        <div className="introModuleSigilWrapper" >
                            <img className="stars01" src="/Icons/star_group01_white.svg" />
                            <div></div>
                            <img className="sigil" src="/Icons/sigil_white.svg" />
                            <div></div>
                            <img className="stars02" src="/Icons/star_group02_white.svg" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="introInfoPara">
                <div className="introTitle">Hey!</div>
                <p>{para}</p>
            </div>
        </>
    );
}

export default IntroModule;