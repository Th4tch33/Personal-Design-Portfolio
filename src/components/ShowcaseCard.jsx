import PropTypes from "prop-types";

ShowcaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

function ShowcaseCard({ title, subTitle, para, link, img, alt}) {
  return (
    <>
      <div className="spotlightInfo">
        <h3>{title}</h3>
        <p>
          <i>{subTitle}</i>
          <br />
          <br />
          {para}
        </p>
      </div>

      <div className="spotlightCardWrapper">
        <a href={link}>
          <img className="showcaseIMG" src={"/Thumbnails/" + img} alt={alt} />
        </a>
      </div>
    </>
  );
}

export default ShowcaseCard;
