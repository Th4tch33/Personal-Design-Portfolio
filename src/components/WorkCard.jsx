import PropTypes from "prop-types";

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  tag3: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  vid: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function WorkCard({ title, tag1, tag2, tag3, link, vid, alt}) {
  return (
    <>
      
      <div id="workCardWrapper">
        <a href={link} rel="noreferrer" target="_blank">
        
          <video autoPlay loop muted src={"/Videos/" + vid} type="video/mp4" alt={alt}/>

          <div className="workCardText">
            <h3>{title}</h3>

            <div className="workCardTags">

              {tag1 && (
                <p>
                  {tag1}
                </p>
              )}

              {tag2 && (
                <p>
                  {tag2}
                </p>
              )}

              {tag3 && (
                <p>
                  {tag3}
                </p>
              )}
              
            </div>

          </div>
        </a>
      </div>
    </>
  );
}

export default WorkCard;
