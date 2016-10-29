import React from "react";
import moment from "moment";

const MoonDetails = ( {rise, newData, name, transitISO, riseISO, setISO, angle, illum, phase, dateTimeISO, city, state } ) => {
  var transit = moment(transitISO).format('llll');
  var rise = moment(riseISO).format('llll');
  var set = moment(setISO).format('llll');
  var dateTime = moment(dateTimeISO).format('llll');
  return (
    <div>
    <p className="details">Current Date and Time: { dateTime }</p>
    <p className="details">{ city }, {state}</p>
    <p className="details">Moon Name: { name }</p>
    {/* <p className="details">Rise: { rise }</p> */}
      <p className="details">Transit: { transit }</p>
      <p className="details">Moon Rise: { rise }</p>
      <p className="details">Moon Set: { set }</p>
      <p className="details">Moon Angle: { angle }</p>
      <p className="details">Moon illumination: { illum }</p>
      <p className="details">Moon Phase: { phase }</p>
      <img className="icon" src="http://www.freeiconspng.com/uploads/moon-icon-5.jpg"/>
    </div>
  );
}

export default MoonDetails;
