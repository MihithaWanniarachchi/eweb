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
          <Link to={`/`} style={{ color: "white", textDecoration: "none", fontWeight: "bolder", fontSize: "30px"}}>
            QuickMart
          </Link>
           <Link to={`/`} style={{ color: "white", textDecoration: "none", marginLeft: "40px", fontSize: "20px",marginLeft:"400px" }}>
            Products
          </Link>
        </span>
        
        <div className="cart">
          <Link to={`/Cart`} style={{ textDecoration: "none", fontSize: "15px" }}>
            <span className="icons">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </span>
            <span>{lengthItems?.length}</span>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
