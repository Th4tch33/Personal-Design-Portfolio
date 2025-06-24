import PropTypes from "prop-types";

IntroModule.propTypes = {
    title: PropTypes.string.isRequired,
    sub1: PropTypes.string.isRequired,
    sub2: PropTypes.string.isRequired,
    para: PropTypes.string.isRequired,
};

function IntroModule({ title, sub1, sub2, para}) {
    return (
        <>
            <div className="introInfoContainer">
                
                <div className="introTitle">{title}</div>

                <div className="introSubTitle">
                    <div>{sub1}</div>
                    <div><br/>{sub2}</div>
                </div>

                <div className="introInfoPara">
                    <div className="introTitle">Hey!</div>
                    <p>{para}</p>
                </div>

            </div>
        </>
    );
}

export default IntroModule;