import React from "react";
import { useDispatch } from "react-redux";
import {
  habitDone,
  habitNone,
  habitUnDone,
} from "../redux/features/habitSlice";

const DayView = ({ day }) => {
  const today = new Date();
  const todayDay = today.getDay();

  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // get date details from providing date
  const date = new Date(day.yyyy, day.mm, day.dd);

  // function call after click done icon
  const markToDone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }
    // call habit done action from reducer
    dispatch(habitDone(day.id));
  };

  // function call after click undone icon
  const markToUnDone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }
    // call habit undone action from reducer
    dispatch(habitUnDone(day.id));
  };

  // function call after click none icon
  const markToNone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your next days status");
      return;
    }

    dispatch(habitNone(day.id));
  };

  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">
        {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
      </p>
      <i
        className={
          day.isDone === true
            ? "fa-solid fa-circle-check circle-icon active"
            : "fa-solid fa-circle-check circle-icon"
        }
        onClick={markToDone}
        title="Mark as done"
      ></i>
      <i
        className={
          day.isDone === false
            ? "fa-solid fa-circle-xmark circle-icon active"
            : "fa-solid fa-circle-xmark circle-icon"
        }
        onClick={markToUnDone}
        title="Mark as undone"
      ></i>
      <i
        className={
          day.isDone === ""
            ? "fa-solid fa-circle-minus circle-icon active"
            : "fa-solid fa-circle-minus circle-icon"
        }
        onClick={markToNone}
        title="Mark as none"
      ></i>
    </div>
  );
};

export default DayView;
