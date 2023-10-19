import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCard } from "../control/cartSlice";

function CourseList() {
  const dispatch = useDispatch();
  const { cardItems, total, quantity } = useSelector((store) => store.card);
  return (
    <>
      {quantity < 1 ? (
        <section className="card">
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ) : (
        <section className="card">
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cardItems.map((item) => {
              return <CourseItem {...item} key={item.id} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam : <span>{total}₺</span>
              </h4>
            </div>
            <button className="deleteButton" onClick={()=>dispatch(clearCard())}>Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default CourseList;
