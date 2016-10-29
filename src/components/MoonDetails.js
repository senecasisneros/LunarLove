import React from "react";
import moment from "moment";

const MoonDetails = ( {moon, phase, place, date} ) => {
  const { rise, transitISO, riseISO, setISO} = moon;
  const { name, angle, illum } = phase;
  const { dateTimeISO } = date;
  let city = place.name
  const { state } = place

  let transit = moment(transitISO).format('llll');
  let rise1 = moment(riseISO).format('llll');
  let set = moment(setISO).format('llll');
  let dateTime = moment(dateTimeISO).format('llll');
  return (
    <div>
      <p className="details">Moon Rise: { rise }</p>
      <p className="details">Rise: { rise1 }</p>
      <p className="details">Transit: { transit }</p>
      <p className="details">Moon Set: { set }</p>
      <p className="details">Moon Name: { name }</p>
      <p className="details">Moon Angle: { angle }</p>
      <p className="details">Moon illumination: { illum }</p>
      <p className="details">Current Date and Time: { dateTime }</p>
    <p className="details">{city} {state}</p>
      <img className="icon" src="http://www.freeiconspng.com/uploads/moon-icon-5.jpg"/>
    </div>
  );
}

export default MoonDetails;
