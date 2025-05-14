import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { WorkCardClicked } from "../js/WorkCardJS.js";
import { WorkCardClose } from "../js/WorkCardJS.js";

ShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  tag1: PropTypes.string,
  tag2: PropTypes.string,
  tag3: PropTypes.string,
  para: PropTypes.string,
  link: PropTypes.string,
  ytLink: PropTypes.string,
  vimeoLink: PropTypes.string,
  videoOrientation: PropTypes.string,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string,
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

function ShowcaseCard({ title, tag1, tag2, tag3, para, link, img, alt, id, ytLink, vimeoLink, videoOrientation}) {
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

          <p> {para} </p>
          
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
                  <img className="showcaseIMG" src={"/Thumbnails/" + img} alt={alt} />
                </div>
              </Link>
            ) : (
              <a>
                <div className="spotlightIMGWrapper">
                  <img className="showcaseIMG" src={"/Thumbnails/" + img} alt={alt} />
                </div>
              </a>
            )}
            
        </div>
      </div>

    </>
  );
}

export default ShowcaseCard;
/*
{link ? (
          <Link to={link}>
            {img && <img src={"/Thumbnails/" + img} />}
            {vid && <video autoPlay loop muted src={"/Videos/" + vid} type="video/mp4" alt={alt} />}
            <div className="workCardText">
              {title && <h3>{title}</h3>}
              <div className="workCardTags">
                {tag1 && <p>{tag1}</p>}
                {tag2 && <p>{tag2}</p>}
                {tag3 && <p>{tag3}</p>}
              </div>
            </div>
          </Link>
        ) : (
          <a>
            {img && <img src={"/Thumbnails/" + img} />}
            {vid && <video autoPlay loop muted src={"/Videos/" + vid} type="video/mp4" alt={alt} />}
            <div className="workCardText">
              {title && <h3>{title}</h3>}
              <div className="workCardTags">
                {tag1 && <p>{tag1}</p>}
                {tag2 && <p>{tag2}</p>}
                {tag3 && <p>{tag3}</p>}
              </div>
            </div>
          </a>
        )}*/