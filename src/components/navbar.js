import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser, faCartArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const lengthItems = useSelector((state) => state.cartDetail.value);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(`lengthItems`, lengthItems);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="nav_box">
        <span className="my_shop">
          <Link to={`/`} style={{ color: "white", textDecoration: "none", fontWeight: "bolder", fontSize: "30px", marginLeft: "400px" }}>
            E-commerce
          </Link>
          <Link to={`/`} style={{ color: "white", textDecoration: "none", marginLeft: "40px", fontSize: "20px" }}>
            Products
          </Link>
        </span>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <span className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <div className="cart">
          <Link to={`/Cart`} style={{ textDecoration: "none", fontSize: "15px" }}>
            <span className="icons">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
        {/* <div className="profile">
          <Link to={``} style={{ textDecoration: "none", color: "white", marginLeft: "40px", fontSize: "20px" }}>
            <span className="mx-5 text-white" style={{ fontSize: "20px" }}>
              User Name <span className="icons"><FontAwesomeIcon icon={faUser} /></span>
            </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
