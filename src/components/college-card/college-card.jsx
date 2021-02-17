import { Fragment } from "react";
import "./college-card.scss";
import { Rating } from "../presentational/rating/rating";
import { Ribbon } from "../presentational/ribbon/ribbon";
import { Tag } from "../presentational/tag/tag";
import { Star } from "../presentational/star/star";

const CollegeCard = ({ college }) => {
  const formatOfferText = (offerText) => {
    return {
      __html: offerText.replace(/[\d,]+/g, (num) => `<span>${num}</span>`),
    };
  };
  const renderStarRating = (rating) => {
    rating = Math.round(rating);
    return (
      <p className="star-container">
        {[...Array(5)].map((v, i) => (
          <Star key={i} color={rating - 1 >= i && "dark"} />
        ))}
      </p>
    );
  };
  return (
    <div className="card-container">
      <div className="image-container">
        <div
          className="image"
          style={{
            backgroundImage: `url(${
              require(`../../assets/${college.image}`).default
            })`,
          }}
        ></div>
        <div className="overlay-content">
          {college.promoted && <Ribbon color="blue" />}
          <Rating value={college.rating} text={college.rating_remarks} />
          <div className="tags-container">
            {college.tags.map((tag, i) => (
              <p key={i} className="capsule">
                {tag}
              </p>
            ))}
          </div>
          <p className="text-color-white"> #{college.ranking}</p>
        </div>
      </div>
      <div className="card-body">
        <div className="left-container">
          <div className="d-flex college-name">
            <h2>{college.college_name}</h2>
            {renderStarRating(college.rating)}
          </div>
          <div className="places d-flex mt-1">
            {college.nearest_place.map((place, i) => (
              <p key={i}>{place}</p>
            ))}
          </div>
          <div className="famous-places d-flex mt-1">
            <p>93% Match : </p>
            {college.famous_nearest_places.split(",").map((place, i, arr) => (
              <p key={i}>
                <strong>{place.slice(0, place.indexOf("ms") + 2)}</strong>
                {place.slice(place.indexOf("ms") + 2, place.length)}
                {i !== arr.length - 1 && ","}
              </p>
            ))}
          </div>
          <p
            className="offer-bar mt-1"
            dangerouslySetInnerHTML={formatOfferText(college.offertext)}
          ></p>
        </div>
        <div className="right-container">
          <div className="original-fees-container d-flex">
            <p>
              <strike>&#8377; {college.original_fees.toLocaleString()}</strike>
            </p>
            <Tag value={college.discount} />
          </div>
          <div className="discounted-fees-container">
            <h1>&#8377;{college.discounted_fees.toLocaleString()}</h1>
            <p>
              <small>{college.fees_cycle}</small>
            </p>
          </div>
          <div className="amenties-container mt-1">
            {college.amenties.map((amnt, i) => (
              <Fragment key={i}>
                <p>
                  {i !== 0 && <i className="dot"></i>}
                  {amnt}
                </p>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
