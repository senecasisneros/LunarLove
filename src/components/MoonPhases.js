import React from "react";
import moment from "moment";
import lodash from "lodash";

const MoonPhases = ( {PhaseOne, PhaseTwo, PhaseThree, PhaseFour} ) => {
  console.log('PhaseTwo:', PhaseTwo);
  let oneName = PhaseOne.name;
  let oneTime = moment.unix(PhaseOne.timestamp).add('hours').format('LLL');
  let twoName = PhaseTwo.name;
  console.log('twoName:', twoName);
  let twoTime = moment.unix(PhaseTwo.timestamp).add('hours').format('LLL');
  let threeName = PhaseThree.name;
  let threeTime = moment.unix(PhaseThree.timestamp).add('hours').format('LLL');
  let fourName = PhaseFour.name;
  let fourTime = moment.unix(PhaseFour.timestamp).add('hours').format('LLL');
  return (
    <div className="container phases">
      <div className="row">
        <h4 className="titleMoonPhases">Next moon phases:</h4>
        <div className="col-md-3 fourPhases">
          <div>
            {_.startCase(_.camelCase(oneName))} {oneTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${oneName}.jpg`}/>
          </div>
        </div>
        <div className="col-md-3 fourPhases">
          <div>
            {_.startCase(_.camelCase(twoName))} {twoTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${twoName}.jpg`}/>
          </div>
        </div>
        <div className="col-md-3 fourPhases">
          <div>
            {_.startCase(_.camelCase(threeName))} {threeTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${threeName}.jpg`}/>
          </div>
        </div>
        <div className="col-md-3 fourPhases">
          <div>
            {_.startCase(_.camelCase(fourName))} {fourTime}
            <img width="175" height="175" src={`https://s3.amazonaws.com/lunarlove/${fourName}.jpg`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoonPhases;
