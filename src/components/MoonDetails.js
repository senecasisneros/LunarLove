import React from "react";
import moment from "moment";
import lodash from "lodash"

const MoonDetails = ( {moon, phase, place, date} ) => {
  const { transitISO, riseISO, setISO} = moon;
  const { name, angle, illum, age } = phase;
  const { dateTimeISO } = date;
  let city = place.name
  _.capitalize(city)
  const { state } = place

  let transit = moment(transitISO).format('LT');
  let rise = moment(riseISO).format('LT');
  let set = moment(setISO).format('LT');
  let dateTime = moment(dateTimeISO).format('lll');

  return (
    <div>
    <p></p>
    <img width="150" height="150" src={`https://s3.amazonaws.com/lunarlove/${name}.jpg`}/>
      <p className="details first-letter">{_.startCase(_.camelCase(city))}, {_.capitalize(state)}</p>
      <p className="details">{ dateTime }</p>
      <p className="details">Phase: {_.startCase(_.camelCase(name))}</p>
      <p className="details">Moon Age: {age} days</p>
      <p className="details">Illumination: { illum }%</p>
      <p className="details">Moon Angle: { angle }</p>
      <p className="details">Moonrise: { rise }</p>
      <p className="details">Moonset: { set }</p>
      <p className="details">Moon Transit: { transit }</p>
    </div>
  );
}

export default MoonDetails;
