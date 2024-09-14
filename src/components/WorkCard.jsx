import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { WorkCardHoverOn } from "../js/WorkCardJS.js";
import { WorkCardHoverOff } from "../js/WorkCardJS.js";

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  tag3: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  vid: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

WorkLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function WorkLink({ to, children, ...props }) {
  const path = window.location.pathname;
o
  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function WorkCard({ title, tag1, tag2, tag3, link, img, vid, alt, id }) {
  return (
    <>
      <div id={id} className="workCardWrapper" onMouseOver={() => WorkCardHoverOn({id})} onMouseOut={() =>WorkCardHoverOff({id})}>
        <Link to={link}>
          {img && (
            <img src={"/Thumbnails/" + img} />
          )}

          {vid && (
            <video autoPlay loop muted src={"/Videos/" + vid} type="video/mp4" alt={alt}/>
          )}

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
        </Link>
      </div>
    </>
  );
}

export default WorkCard;
