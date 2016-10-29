import React from "react";
import moment from "moment";

const MoonDetails = ( {rise, newData, name, transitISO, riseISO, setISO, angle, illum, phase, dateTimeISO, city, state } ) => {
  var transit = moment(transitISO).format('llll');
  var rise = moment(riseISO).format('llll');
  var set = moment(setISO).format('llll');
  var dateTime = moment(dateTimeISO).format('llll');
  return (
    <div>
    <p className="details">Rise: { rise }</p>
    <p className="details">name: { name }</p>
      <p className="details">transitISO: { transit }</p>
      <p className="details">riseISO: { rise }</p>
      <p className="details">setISO: { set }</p>
      <p className="details">angle: { angle }</p>
      <p className="details">illum: { illum }</p>
      <p className="details">phase: { phase }</p>
      <p className="details">dateTimeISO: { dateTime }</p>
      <p className="details">city: { city }</p>
      <p className="details">state: { state }</p>
      <img className="icon" src="http://www.freeiconspng.com/uploads/moon-icon-5.jpg"/>
    </div>
  );
}

export default MoonDetails;
