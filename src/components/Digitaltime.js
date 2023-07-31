import React, { useState } from "react";
import "./styles/Digitaltime.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Digitaltime = () => {
  let time = new Date().toLocaleTimeString();
  let day = new Date().toDateString();

  const [Ctime, setCtime] = useState(time);
  const [Cday, setCday] = useState(day);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    day = new Date().toDateString();
    setCtime(time);
    setCday(day);
  };

  setInterval(UpdateTime, 1000);

  return (
    <>
      <div className="content">
        <h1 className="day">
          <FontAwesomeIcon className="facal" icon={faCalendarDays} /> - {Cday}
        </h1>
        <h1 className="time">
          <FontAwesomeIcon icon={faClock} /> ----Time:-{Ctime}
        </h1>
      </div>
    </>
  );
};

export default Digitaltime;
