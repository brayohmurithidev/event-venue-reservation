import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./ticket.css";

const Ticket = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(`/bookings/${id}`);
  console.log(data);
  return (
    <>
      <div
        layout
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="ticket"
      >
        <div className="receiptContainer">
          <div className="ticketBadge">
            <h5 className="ticketBadgeText">
              Thank You! for booking with us. Chat with the operator on Whatsapp
              to get help on event planing
            </h5>
          </div>
          <h1 className="receiptTitle">INVOICE</h1>
          <div className="receiptSerial">
            Serial No: <span> #1049-38</span>
          </div>
          <div className="receiptPayment">
            <div className="receiptcol1">
              <h3>Amount Payable</h3>
              <span>Ksh. {data.amount}</span>
            </div>
            <div className="receiptcol1">
              <h3>Paybill</h3>
              <span>72018</span>
            </div>
            <div className="receiptcol1">
              <h3>Account Number</h3>
              <span>
                <img
                  width="40"
                  src="https://iconape.com/wp-content/files/xn/364965/svg/mpesa-seeklogo.com.svg"
                />{" "}
                0100048100
              </span>
            </div>
          </div>
          <div className="summary">
            <div className="summaryItem">
              <div className="summaryService">
                {data.services?.map((service) => (
                  <span>{service}</span>
                ))}
              </div>
              <div className="summaryPrice">
                {data.prices?.map((price) => (
                  <span>{price}</span>
                ))}
              </div>
            </div>
            <div className="summaryevent">
              <span className="event">Event</span>
              <span className="summaryPrice">13000</span>
            </div>
            <div className="summaryTotals">
              <span>Amount Charged</span>
              <span>{data.amount}</span>
            </div>
          </div>
          <div className="receiptFooter">
            <span>
              Ensure you pay early enough to enable us offer the best. Thank You
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
