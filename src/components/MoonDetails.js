import React from "react";
import moment from "moment";
import lodash from "lodash";
import animated from 'animate.css';

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
    <div className='moonDetails'>
      <h3 id="moonName">{_.startCase(_.camelCase(name))}</h3>
      <div className="container">
        <div className="row">
          <div className="currentDetails col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <p>Location: {_.startCase(_.camelCase(city))}, {_.capitalize(state)}</p>
            <p>Time: { dateTime }</p>
            <p>Moon Age: { age } days</p>
            <p>Illumination: { illum }%</p>
            <p>Moon Angle: { angle }</p>
            <p>Moonrise Today: { rise }</p>
            <p>Moonset Today: { set }</p>
            <p>Moon Transit: { transit }</p>
          </div>
          <div className='col-lg-10 col-md-10 col-sm-12 col-xs-12'>
            <img className="mainImg animated zoomIn" width= "400" height="400" src={`https://s3.amazonaws.com/lunarlove/${name}.jpg`} responsive/>
          </div>
      </div>
      </div>
    </div>
  );
}

export default MoonDetails;
