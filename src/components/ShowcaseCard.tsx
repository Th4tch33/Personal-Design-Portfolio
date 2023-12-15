interface Props {
  title: string;
  subTitle: string;
  para: string;
  link: string;
  img: string;
  alt: string;
}

function ShowcaseCard({ title, subTitle, para, link, img, alt }: Props) {
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
