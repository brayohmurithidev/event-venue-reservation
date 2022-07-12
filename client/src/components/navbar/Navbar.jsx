import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Menu from "../menu/Menu";
import Signup from "../signup/Signup";
const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = async (e) => {
    dispatch({ type: "LOGIN_START" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Event booking</span>
        </Link>
        {user ? (
          <div className="navbarButton">
            <Menu username={user.username} logout={handleLogout} />
          </div>
        ) : (
          <div className="navbarButton">
            <Link to="/login">
              <button className="navbarBtn" onClick={() => setOpenLogin(true)}>
                Login
              </button>
            </Link>
            <button onClick={() => setOpenSignup(true)} className="navbarBtn">
              Signup
            </button>
          </div>
        )}
      </div>
      {openSignup && <Signup setOpen={setOpenSignup} setLogin={setOpenLogin} />}
    </div>
  );
};

export default Navbar;
