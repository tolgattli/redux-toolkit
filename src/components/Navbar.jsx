import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
  const { quantity } = useSelector((store) => store.card);
  return (
    <nav>
      <div className="navbar">
        <h3>Kurs Uygulaması</h3>
        <div className="basket">
          <div className="items-div">
            <p>{quantity}</p>
          </div>

          <BsFillBasketFill className="basket-icon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
