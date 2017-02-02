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
      <div className="details col-sm-6">
        <p>{_.startCase(_.camelCase(city))}, {_.capitalize(state)}</p>
        <p>{ dateTime }</p>
        <p>Phase: {_.startCase(_.camelCase(name))}</p>
        <p>Moon Age: {age} days</p>
        <p>Illumination: { illum }%</p>
        <p>Moon Angle: { angle }</p>
        <p>Moonrise: { rise }</p>
        <p>Moonset: { set }</p>
        <p>Moon Transit: { transit }</p>
      </div>
    </div>
  );
}

export default MoonDetails;
// <img width="220" height="220" src={`https://s3.amazonaws.com/lunarlove/${name}.jpg`}/>
