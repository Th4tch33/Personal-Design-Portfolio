import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { WorkCardClicked } from "../js/WorkCardJS.js";
import { WorkCardClose } from "../js/WorkCardJS.js";

ShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  tag3: PropTypes.string,
  para: PropTypes.object,
  link: PropTypes.string,
  ytLink: PropTypes.string,
  vimeoLink: PropTypes.string,
  videoOrientation: PropTypes.string,
  img: PropTypes.string,
  vid: PropTypes.string,
  vidAV1: PropTypes.string,
  vidH264: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string.isRequired,
};

ShowcaseLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function ShowcaseLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function ShowcaseCard({ title, tag1, tag2, tag3, para, link, img, vid, vidAV1, vidH264, alt, id, ytLink, vimeoLink, videoOrientation}) {
  console.log("vid:", vid);
console.log("vidAV1:", vidAV1);

  return (
    <>
      <div className="ShowcaseCardContainer">
        <div className="spotlightInfo">
          <h3>{title}</h3>
          
          <div className="spotlightCardTags">
            {tag1 && (<h4>{tag1}</h4>)}
            {tag2 && (<h4>{tag2}</h4>)}
            {tag3 && (<h4>{tag3}</h4>)}
          </div>

          {para}
          
            <div className="arrowWrapper"
              onClick={() => {
                if (ytLink) {
                  WorkCardClicked(ytLink, videoOrientation);
                } else if (vimeoLink) {
                  WorkCardClicked(vimeoLink, videoOrientation);
                }
              }}>

              {link ? (
              <Link to={link}>
                <svg width="100%" height="100%">
                  <line x1="1%" y1="50%" x2="100%" y2="50%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                </svg>
                <svg width="4vh" height="4vh">
                  <line x1="0%" y1="50%" x2="90%" y2="50%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                  <line x1="90%" y1="50%" x2="10%" y2="7%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                  <line x1="90%" y1="50%" x2="10%" y2="93%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                </svg>
                <p>Check It Out!</p>
              </Link>
              ) : (
                <a>
                    <svg width="100%" height="100%">
                    <line x1="1%" y1="50%" x2="100%" y2="50%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                  </svg>
                  <svg width="4vh" height="4vh">
                    <line x1="0%" y1="50%" x2="90%" y2="50%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="90%" y1="50%" x2="10%" y2="7%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                    <line x1="90%" y1="50%" x2="10%" y2="93%" stroke="#FFC43D" strokeWidth="5" strokeLinecap="round"/>
                  </svg>
                  <p>Check It Out!</p>
                </a>
              )}
            </div>
        </div>

        <div className="spotlightIMGContainer"
          id={id}
          onClick={() => {
            if (ytLink) {
              WorkCardClicked(ytLink, videoOrientation);
            } else if (vimeoLink) {
              WorkCardClicked(vimeoLink, videoOrientation);
            }
          }}>

            {link ? (
              <Link to={link}>
                <div className="spotlightIMGWrapper">
                  {img && <img className="showcaseIMG" src={"/Thumbnails/" + img} alt={alt} />}
                  {(vid || vidAV1) && (
                    <video
                      className="showcaseIMG"
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={alt}
                    >
                      {vidAV1 && <source src={`/Videos/${vidAV1}`} type="video/webm" />}
                      
                      <source src={`/Videos/${vid}`} type="video/mp4" />
                    </video>
                  )}
                </div>
              </Link>
            ) : (
              <a>
                <div className="spotlightIMGWrapper">
                  {img && <img className="showcaseIMG" src={"/Thumbnails/" + img} alt={alt} />}
                  {(vid || vidAV1) && (
                    <video
                      className="showcaseIMG"
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={alt}
                    >
                      {vidAV1 && <source src={`/Videos/${vidAV1}`} type="video/webm" />}
                      
                      <source src={`/Videos/${vid}`} type="video/mp4" />
                    </video>
                  )}
                </div>
              </a>
            )}
            
        </div>
      </div>

    </>
  );
}

export default ShowcaseCard;