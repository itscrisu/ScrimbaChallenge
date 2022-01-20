import star from "/images/star.png";

export default function CustomCard(props) {
  let { image, rating, reviewCount, country, title, price } = props;

  return (
    <div className="card">
      <img src={`/public/images/${image}`} className="card--img" alt="person" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{rating}</span>
        <span className="card--text__color">{reviewCount} •</span>
        <span className="card--text__color">{country}</span>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">
        <strong>From ${price}</strong> / person
      </p>
    </div>
  );
}
