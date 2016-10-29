import React from "react";
import moment from "moment";
import lodash from "lodash"

const MoonDetails = ( {moon, phase, place, date} ) => {
  const { rise, transitISO, riseISO, setISO} = moon;
  const { name, angle, illum, age } = phase;
  const { dateTimeISO } = date;
  let city = place.name
  _.capitalize(city)
  const { state } = place
  console.log('name:', name);

  let transit = moment(transitISO).format('lll');
  let rise1 = moment(riseISO).format('lll');
  let set = moment(setISO).format('lll');
  let dateTime = moment(dateTimeISO).format('lll');



  return (
    <div>
      <p className="details first-letter">{_.startCase(_.camelCase(city))}, {_.capitalize(state)}</p>
      <p className="details">{ dateTime }</p>
      <p className="details">Phase: {_.startCase(_.camelCase(name))}</p>
      <p className="details">Moon Age: {age} days</p>
      <p className="details">Moon Angle: { angle }</p>
      {/* <p className="details">Moon Rise: { rise }</p> */}
      <p className="details">Moonrise: { rise1 }</p>
      <p className="details">Moonset: { set }</p>
      <p className="details">Moon Transit: { transit }</p>
      <p className="details">Illumination: { illum }%</p>
      <img className="icon" width="150" height="150" src={`https://s3.amazonaws.com/lunarlove/${name}.jpg`}/>
    </div>
  );
}

export default MoonDetails;
