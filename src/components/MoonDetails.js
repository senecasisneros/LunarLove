import React from "react";
import moment from "moment";
import lodash from "lodash";

const MoonDetails = ( {moon, phase, place, date} ) => {
  const { transitISO, riseISO, setISO} = moon;
  const { name, angle, illum, age } = phase;
  const { dateTimeISO } = date;
  let city = place.name;
  _.capitalize(city);
  const { state } = place;

  let transit = moment(transitISO).format('LT');
  let rise = moment(riseISO).format('LT');
  let set = moment(setISO).format('LT');
  let dateTime = moment(dateTimeISO).format('lll');

  return (
    <div>
      <div>
        <h3 id="moonName">{_.startCase(_.camelCase(name))}</h3>
      <img className="mainImg" width="450" height="450" src={`https://s3.amazonaws.com/lunarlove/${name}.jpg`}/>
      </div>
      <div className="currentDetails">
        <p>Location: {_.startCase(_.camelCase(city))}, {_.capitalize(state)}</p>
        <p>Current Time: { dateTime }</p>
        <p>Moon Age: { age } days</p>
        <p>Illumination: { illum }%</p>
        <p>Moon Angle: { angle }</p>
        <p>Moonrise Today: { rise }</p>
        <p>Moonset Today: { set }</p>
        <p>Moon Transit: { transit }</p>
      </div>
    </div>
  );
}

export default MoonDetails;
