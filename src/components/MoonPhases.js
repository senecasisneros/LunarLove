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
      <div className="row">
        <h4>Next moon phases:</h4>
        <div className="col-md-3">
          <div>
            {_.startCase(_.camelCase(oneName))} {oneTime}
            <img width="200" height="200" src={`https://s3.amazonaws.com/lunarlove/${oneName}.jpg`}/>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            {_.startCase(_.camelCase(twoName))} {twoTime}
            <img width="200" height="200" src={`https://s3.amazonaws.com/lunarlove/${twoName}.jpg`}/>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            {_.startCase(_.camelCase(threeName))} {threeTime}
            <img width="200" height="200" src={`https://s3.amazonaws.com/lunarlove/${threeName}.jpg`}/>
          </div>
        </div>
        <div className="col-md-3">
          <div>
            {_.startCase(_.camelCase(fourName))} {fourTime}
            <img width="200" height="200" src={`https://s3.amazonaws.com/lunarlove/${fourName}.jpg`}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoonPhases;
