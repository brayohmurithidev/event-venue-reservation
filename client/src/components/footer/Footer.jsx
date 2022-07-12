import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Cities</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Unique places to stay </li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Unpacked: Event articles </li>
          <li className="fListItem">Seasonal and event deals </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Event Finder</li>
          <li className="fListItem">Event reservations </li>
          <li className="fListItem">Book Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Curtomer Service</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Safety Resource Center</li>
          <li className="fListItem">Investor relations</li>
          <li className="fListItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Rose Events.</div>
    </div>
  );
};

export default Footer;
