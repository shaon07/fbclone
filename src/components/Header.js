import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(true);

  return (
    <header className="top-header">
      <div className="row-1">
        <div
          className="container flex"
          style={{ display: show ? "flex" : "none" }}
        >
          <h2 className="logo">facebook</h2>
          <div className="menus">
            <i
              className="bi bi-search menu search"
              onClick={() => setShow(!show)}
            ></i>
            <i className="bi bi-messenger menu"></i>
          </div>
        </div>
      </div>
      <div className="searchBar" style={{ display: show ? "none" : "flex" }}>
        <div>
          <i
            className="bi bi-arrow-left-circle-fill"
            onClick={() => setShow(true)}
          ></i>
        </div>
        <div className="searchBox">
          <input type="text" name="" id="" placeholder="Search facebook" />
        </div>
      </div>
      <div className="row-2">
        <div className="container">
          <nav>
            <ul>
              <Link to="/">
                <li className={` bi bi-house-door `}></li>
              </Link>
              <Link to="/custom/friends">
                <li className="bi bi-people"></li>
              </Link>
              <Link to="/custom/video">
                <li className="bi bi-collection-play"></li>
              </Link>
              <Link to="/profile">
                <li>
                  <img
                    style={{ width: "20px" }}
                    src={require("../assets/profile.png")}
                    alt=""
                  />
                </li>
              </Link>
              <Link to="/custom/notifications">
                <li className="bi bi-bell"></li>
              </Link>
              <Link to="/custom/menu">
                <li className="bi bi-list"></li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
