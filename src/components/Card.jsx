import person from "../images/person-1.png";
import star from "../images/star.png";

export default function CustomCard() {
  return (
    <div className="card">
      <img src={person} className="card--img" alt="person" />
      <div className="card--text">
        <img src={star} className="card--star" />
        <span>5.0</span>
        <span className="card--text__color">(6) •</span>
        <span className="card--text__color">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136</strong> / person
      </p>
    </div>
  );
}
