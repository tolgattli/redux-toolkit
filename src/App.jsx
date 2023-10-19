import "./App.css";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import { useEffect } from "react";
import { calculateTotal } from "./control/cartSlice";
import { useSelector,useDispatch } from "react-redux";



function App() {
  const {cardItems} = useSelector((store)=>store.card)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cardItems])
  return (
    <>
      <Navbar />
      <CourseList />
    </>
  );
}

export default App;
