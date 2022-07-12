import React, { useState } from "react";
import "./venue.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Payment from "../../components/payment/Payment";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const Venue = () => {
  const [banner, setBanner] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [prices, setPrices] = useState([]);
  const [open, setOpen] = useState(false);
  const [booking, setBooking] = useState(null);
  const [info, setInfo] = useState({});
  const [services, setServices] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(`/venues/find/${id}`);

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value.split("-")[0]
    );
    const price = Array.from(
      e.target.selectedOptions,
      (option) => option.value.split("-")[1]
    );
    setPrices(price);
    setServices(value);
  };
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // SEND EMAIL
  const handleClick = async (e) => {
    e.preventDefault();

    const isEmpty = Object.keys(info).length === 0;
    if (isEmpty) {
      return toast.error("Please Fill all the details");
    }

    try {
      let datas = {
        ...info,
        services: services,
        event: data.name,
      };
      setBoolean(true);
      const res = await axios.post(`/email`, datas);
      setOpen(true);
      setBooking({ ...info, services });
      const isEmpty = Object.keys(info).length === 0;
      if (isEmpty) {
        setBanner(res.datas.msg, 1000);
        return toast.error(res.datas.msg);
        setBoolean(false);
      } else if (res.status === 200) {
        setBanner(res.datas.msg, 1000);
        return toast.success(res.datas.msg);
        setBoolean(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="venue">
      <ToastContainer position="top-center" limit={1} />
      <Navbar />
      {open && (
        <Payment
          venueId={id}
          eventPrice={data.cheapestPrice}
          prices={prices}
          booking={booking}
          setOpen={setOpen}
        />
      )}
      <div className="venueContainer">
        <div className="VenueWrapper">
          <div className="venueLeft">
            <h1 className="VenueTitle">{data.name}</h1>
            <div className="venueAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>123, Nairobi</span>
            </div>
            <span className="venueDistance">
              Excellent location – 20m from center
            </span>
            <span className="venuePriceHighlight">
              Spacious - holds upto {data.people} people
            </span>
            <div className="venueImages">
              {data.photos?.map((photo, i) => (
                <div className="venueImgWrapper" key={i}>
                  <img
                    // onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="venueImg"
                  />
                </div>
              ))}
            </div>

            <div className="venueDetails">
              <div className="venueDetailsTexts">
                <h1 className="venueDetailsTitle">{data.name}</h1>
                <p className="venueDesc">{data.desc}</p>
              </div>
            </div>
          </div>
          <div className="venueRight">
            <h1>Client Details</h1>
            <form>
              <div className="formInputWrapper">
                <div className="formItem">
                  <label htmlFor="">Name</label>
                  <input
                    id="name"
                    onChange={handleChange}
                    type="text"
                    placeholder="Client name / Company's name"
                  />
                </div>
                <div className="formItem">
                  <label htmlFor="">Email</label>
                  <input
                    id="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="example: sample@mail.com"
                  />
                </div>
              </div>
              <div className="formInputWrapper">
                <div className="formItem">
                  <label htmlFor="">Phone Number</label>
                  <input
                    id="phone"
                    onChange={handleChange}
                    type="text"
                    placeholder="07123400493"
                  />
                </div>
                <div className="formItem">
                  <label htmlFor="">Country</label>
                  <select
                    id="country"
                    className="inputSelect"
                    onChange={handleChange}
                  >
                    <option value="kenya">Kenya</option>
                    <option value="uganda">Uganda</option>
                    <option value="tanzania">Tanzania</option>
                  </select>
                </div>
              </div>

              <div className="formItem">
                <label htmlFor="">Services</label>
                <select id="services" multiple onChange={handleSelect}>
                  <option value="catering-15000">Catering</option>
                  <option value="choreography-10000">Choreography</option>
                  <option value="decoration-46000">Decoration</option>
                  <option value="djMusicAndDances-20000">
                    Dj, Music & Dances
                  </option>
                  <option value="eventPlanners-25000">Event planners</option>
                  <option value="makeupArtists-10000">Make up artists</option>
                  <option value="photography-28000">
                    Photography & Videography
                  </option>
                </select>
              </div>
              <div className="formItem">
                <label htmlFor="">Message</label>
                <textarea
                  id="message"
                  className="venueTextArea"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="formItem">
                <label htmlFor="">Event Date</label>
                <input
                  id="date"
                  onChange={handleChange}
                  type="date"
                  className="dateInput"
                  // onChange={(e) => setSelectDates(e.target.value)}
                />
              </div>
              <button className="venueButton" onClick={handleClick}>
                Book EVENT
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Venue;
