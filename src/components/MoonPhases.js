import React from "react";
import moment from "moment";

const MoonPhases = ( {PhaseOne, PhaseTwo, PhaseThree, PhaseFour} ) => {
  let oneName = PhaseOne.name;
  let oneTime = moment.unix(PhaseOne.timestamp).add('hours').format('LLL');
  let twoName = PhaseTwo.name;
  let twoTime = moment.unix(PhaseTwo.timestamp).add('hours').format('LLL');
  let threeName = PhaseThree.name;
  let threeTime = moment.unix(PhaseThree.timestamp).add('hours').format('LLL');
  let fourName = PhaseFour.name;
  let fourTime = moment.unix(PhaseFour.timestamp).add('hours').format('LLL');
  return (
    <div>
      <p>{oneName} {oneTime}</p>
      <p>{twoName} {twoTime}</p>
      <p>{threeName} {threeTime}</p>
      <p>{fourName} {fourTime}</p>
    </div>
  );
}

export default MoonPhases;
