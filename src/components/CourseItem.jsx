import React from "react";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../control/cartSlice";
import { increase, decrease } from "../control/cartSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="card-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <h4>{price}₺</h4>
        <div>
          <button
            className="up-down-button"
            onClick={() => {
              dispatch(increase(id));
            }}
          >
            <BsChevronUp />
          </button>
          <p className="p-tag">{quantity}</p>
          <button className="up-down-button" onClick={() => {
              dispatch(decrease(id));
            }}>
            <BsChevronDown />
          </button>
        </div>
        <button
          className="del-red"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default CourseItem;
