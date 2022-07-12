// import { Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./payment.css";
import { Close } from "@mui/icons-material";
import mpesa from "../../assets/images/mpesa.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import loadingGif from "../../assets/gifs/loading.gif";

const Payment = ({ setOpen, booking, prices, eventPrice, venueId }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [receiptId, setReceiptId] = useState(null);
  const [amount, setAmount] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    let sum = 0;
    const arrofNum = prices.map((str) => {
      return Number(str);
    });
    for (let i = 0; i < arrofNum.length; i += 1) {
      sum += arrofNum[i];
    }
    setAmount(sum + eventPrice);
  }, [prices]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`/bookings/${venueId}`, {
        ...booking,
        amount: amount,
        prices: prices,
        eventPrice: eventPrice,
      });
      // setReceiptId();
      if (res.data) {
        setLoading(false);
      }
      navigate(`/receipt/${res.data._id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  console.log(receiptId);

  return (
    <div className="payment">
      <div className="pContainer">
        <Close onClick={() => setOpen(false)} className="pClose" />

        <div className="pinformation">
          <img width="100%" src={mpesa} alt="Mpesa" />
          <ul>
            <li className="pText">
              Go to <span className="pEmphasize">Mpesa menu </span>{" "}
              <span className="pEmphasize">Lipa na mpesa</span>
            </li>
            <li className="pText">
              Enter <span className="pEmphasize">Paybill & A/c number</span> as
              provided below
            </li>
            <li className="pText">
              Enter your <span className="pEmphasize">Mpesa pin </span> on your
              phone to complete payment
            </li>
          </ul>
          <div className="paymentDetails">
            <h3>Paybill:</h3>
            <span>00000</span>
          </div>
          <div className="paymentDetails">
            <h3>A/c Number:</h3>
            <span>20040382920</span>
          </div>
          <div className="paymentDetails">
            <h3>Amount</h3>
            <span>20040382920</span>
          </div>

          <div className="paction">
            <span
              className={
                message === "Booked successfully, proceed and pay!"
                  ? "pSuccess"
                  : "pFail"
              }
            >
              {message}
            </span>

            <button
              // disabled={loading}
              onClick={handleClick}
              className="pButton"
            >
              Continue {loading && "..."}
            </button>
            {/* {bookingId !== null && ( */}

            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
