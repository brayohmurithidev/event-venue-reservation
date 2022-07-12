import { Link } from "react-router-dom";
import "./searchItem.css";
import img1 from "../../assets/images/events/outdoor2.jpeg";
const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m from center</span>
        <span className="siDistance">Capacity: {item.people}</span>
        <span className="siTaxiOp">{item.type}</span>
        <span className="siSubtitle">{item.title}</span>
        <span className="siFeatures">{item.desc}</span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">Ksh. {item.cheapestPrice}</span>
          <Link to={`/venues/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
