import star from "/images/star.png";

export default function CustomCard(props) {

  let spotText
  if (props.item.openSpots === 0) {
    spotText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    spotText = "ONLINE"
  }

  return (
    <div className="card">
    {spotText && <div className="card--spot">{spotText}</div>}
      <img src={`/public/images/${props.item.coverImg}`} className="card--img" alt="person" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.item.rating}</span>
        <span className="card--text__color">{props.item.reviewCount} •</span>
        <span className="card--text__color">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <strong>From ${props.item.price}</strong> / person
      </p>
    </div>
  );
}
