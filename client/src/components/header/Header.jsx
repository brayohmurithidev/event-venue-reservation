import {
  faBed,
  faCalendarDays,
  faCity,
  faLocation,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination } });
    navigate("/venues", { state: { destination } });
  };

  return (
    <div className="header">
      <div className="headerWrapper">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faLocation} />
              <span>Venues</span>
            </div>
            <div className="headerListItem">
              <span>Vendors</span>
            </div>
            <div className="headerListItem">
              <span>E-invitations</span>
            </div>
            <div className="headerListItem">
              <span>Real Events</span>
            </div>
            <div className="headerListItem">
              <span>Photos</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                Worry No more on <span>where</span> to Hold your{" "}
                <span>Events</span> . <span>Reserve</span> a <span>Venue</span>{" "}
                with us.
              </h1>

              {!user && (
                <button className="headerBtn">Sign in / Register</button>
              )}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCity} className="headerIcon" />
                  {/* <input type="text" className="headerSearchInput" /> */}
                  <select
                    style={{ width: "400px" }}
                    placeholder="Search By Town"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="eldoret">Eldoret</option>
                    <option value="embu">Embu</option>
                    <option value="kerugoya">Kerugoya</option>
                    <option value="kiambu">Kiambu</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="nakuru">Nakuru</option>
                    <option value="mombasa">Mombasa</option>
                    <option value="thika">Thika</option>
                  </select>
                </div>
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
