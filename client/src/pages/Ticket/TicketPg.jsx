import React from "react";
import "./ticket.css";
import Ticket from "../../components/ticket/Ticket";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Download } from "@mui/icons-material";

const TicketPg = () => {
  return (
    <div className="ticketPg">
      <Navbar />
      <div className="ticketPgContainer">
        <p style={{ color: "green", fontWeight: "300", marginBottom: "20px" }}>
          Your booking details email has been sent to our customer service. We
          will get back as soon as possible
        </p>
        <div className="ticketDownload">
          <span> This is not a receipt</span>
          <Download />
        </div>
        <Ticket />
      </div>
      <Footer />
    </div>
  );
};

export default TicketPg;
