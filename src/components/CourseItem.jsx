import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

function CourseItem({ id, title, price, img, quantity }) {
  return (
    <div className="card-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <h4>{price}₺</h4>
        <div>
          <button className="up-down-button">
            <BsChevronUp />
          </button>
          <p className="p-tag">{quantity}</p>
          <button className="up-down-button">
            <BsChevronDown />
          </button>
        </div>
        <button className="del-red">Sil</button>
      </div>
    </div>
  );
}

export default CourseItem;
