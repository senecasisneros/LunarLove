import React from "react";
import moment from "moment";

const MoonPhases = ( {moonPhaseOne} ) => {
  const { timestamp, name } = moonPhaseOne;
  let OneName = name;
  let OneTime = moment.unix(timestamp).add('hours').format('LLL')
  return (
    <div>
      <p>{OneName}</p>
      <p>{OneTime}</p>
    </div>
  );
}

export default MoonPhases;
