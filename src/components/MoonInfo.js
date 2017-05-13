import React, { Component } from "react";

class MoonInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }
  render(){
    let name = this.props.phase.name;

    let firstQuarter = "The moon is one-half and increasing in illumination. The seed is now presenting a root and plant structure on its way to growing and moving forward. This symbolizes a period of strength, determination, concentration, decision-making or re-evaluation, and commitment to action. During this time, remember to keep soldiering forward, despite any fears, emotions or doubts that might get in your way. Turn around any emotional energy into creative passion so that you can get things done and finish goals.";
    let waxingGibbous = "The moon is one-half but not fully illuminated, although increasing in illumination, therefore it represents gaining and attaining. So this can be applied to what you wish to gain and develop, such as friends, wealth, skills etc. Now the buds are preparing to bloom. This is the developmental stage where ideas and plans can be cultivated and fine-tuned before the next stage of manifestation.";
    let waxingCrescent = "After the new moon, the moon 'waxes', meaning it gets bigger and builds up in strength and intensity, signifying the sprouting growth of the seed. Waxing Crescent moon is partly illuminated by less than one-half, and increasing. Things are moving forward and there is the hope of more to come. It provides a burst of energy and forward moving strength and power that you can tap into. Our plans, dreams and ideas are growing and this is a great period to focus on anything which you would like to deepen, grow and commit to. The time between the new moon and full moon in general is ideal to enact on the new intentions that you set on the new moon. This is the perfect time to be positive, motivated and take action steps with faith. It is also an auspicious time to start something new, sign contracts or make big purchases. The energy of expansion supports new ideas and even the meeting of new people in your life.";
    let lastQuarter = "The moon is one-half and decreasing in illumination. This is like a half-way point - a kind of calm, contemplative time of introspection, reflection & re-evaluation for the future.  The seed has now planted fully and all harvests have been reaped. There is a sense of thinking about what has been accomplished, and shedding the old (including negative thoughts) before the new can come into place. This entails ridding of any kind of negative thoughts or energy for good so that you can focus positively on a higher universal perspective, take full responsibility, and allow for the creativity and growth that will manifest in the next stage of goals and new intentions.";
    let newMoon = 'The new moon has no illumination. It appears dark and not visible (except during a solar eclipse). As it is dark, it denotes the beginning, with a primal instinct for birthing. The seed, as a symbol, is beneath the ground. So this represents the germination stage, where you can initiate the emergence of something new by setting your intentions for what you wish to grow. Energy from the New Moon up to the Full Moon gradually builds in strength and intensity, so the New Moon is the ideal time to set clear intentions and goals, start new projects and give rise to new ideas and ventures. This can be done in a magical way, by simply writing down or letting the universe know your goals and desires. The energy for bringing about your desires is even more greatly expanded when you create a little ritual, ceremony or personal meditation, and state your desires with heart-felt positivity and surety.';
    let waningCrescent = "The waning crescent moon (also known as the Balsamic moon) is partly illuminated less than one-half, and decreasing. The old cycle ends and the new one is near. This is a time to withdraw from the world,  rest and renew yourself. It is also the final releasing & purging stage. Think things over, contemplate and complete anything remaining. Think of what you need to banish, such as relationships or projects that are no longer serving you or that you have lost interest in, as you prepare for new seeds with the start of the next cycle.";
    let defaultMoon = "Every marked phase of the moon has its own special energy and magic. There is spiritual metaphor in meaning in each chapter of the cycle. In fact, the recurrent motion of the moon can be analogized with the cyclical process of a seed sprouting into a full flower in bloom and then retreating back again, or dying. This course of life and death signifies an ending and a new beginning, ready for the next physical seed to grow or metaphorical dream to be born.";
    let fullMoon = "A full moon is full and round. It appears to be completely illuminated by direct sunlight as the sun and moon are directly opposite each other. Being fully-luminated it represents fertility, transformation, completion and abundance. The seed is in full bloom. This period is called 'waning' because the once expanding energies will now be starting to diminish, or get smaller. This is why this is the perfect period to let go of anything that no longer serves your higher purpose, that you want to let go of, release or end. This can be anything from certain relationships, jobs, thoughts, situations and emotions, to de-cluttering and weight-loss. The moon will act in your favour and you will achieve good results. It is a potent and powerful time for  guidance, healing and magic, as well as positive intentions, including improving your psychic abilities. The evening before the full moon is perfect for recharging your energy.You can sit outside and bathe in the light of the moon. Also, place your crystals, oracle cards, meaningful jewelry and so on out in the moon or on a windowsill at this time to cleanse and charge up with the moon’s powerful cleansing energy. Watch out for the downside of full moon energy, which includes tension, polarity and intense thoughts and emotional behavior. Turn that extreme energy into purging by directing your thoughts onto paper and performing a releasing ceremony."

    switch(name) {
      case "new moon":
      name = newMoon;
      break;
      case "full moon":
      name = fullMoon;
      break;
      case "first quarter":
      name = firstQuarter;
      break;
      case "waxing gibbous":
      name = waxingGibbous;
      break;
      case "waxing crescent":
      name = waxingCrescent;
      break;
      case "last quarter":
      name = lastQuarter;
      break;
      case "waning crescent":
      name = waningCrescent;
      break;
      default:
      name = defaultMoon
    }
    return (
      <div className='container'>
        <div className="row">
          <div className="col-lg-12">
            <h4 className="titleSpritual">Spritual Symbology:</h4>
            <p className='info'>{ name }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MoonInfo;
