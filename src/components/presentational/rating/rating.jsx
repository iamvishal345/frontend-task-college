import "./rating.scss";
export const Rating = ({ value, text }) => (
  <div className="rating-container">
    <p className="value">
      <b>{value}</b> /5
    </p>
    <p className="text">{text}</p>
  </div>
);
