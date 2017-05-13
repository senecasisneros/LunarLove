import React from "react";
import moment from "moment";
import lodash from "lodash";

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
    <div className="container phases">
      <h4 className="titleMoonPhases">Next moon phases:</h4>
      <div className="row">
        <div className="col-lg-3 fourPhases">
            {_.startCase(_.camelCase(oneName))} {oneTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${oneName}.jpg`}/>
        </div>
        <div className="col-lg-3 fourPhases">
            {_.startCase(_.camelCase(twoName))} {twoTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${twoName}.jpg`}/>
        </div>
        <div className="col-lg-3 fourPhases">
            {_.startCase(_.camelCase(threeName))} {threeTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${threeName}.jpg`}/>
        </div>
        <div className="col-lg-3 fourPhases">
            {_.startCase(_.camelCase(fourName))} {fourTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${fourName}.jpg`}/>
        </div>
      </div>
    </div>
  );
}

export default MoonPhases;
