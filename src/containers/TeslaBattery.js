import React from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../components/TeslaNotice/TeslaNotice';
import TeslaCar from '../components/TeslaCar/TeslaCar';
class TeslaBattery extends React.Component {
    state = {
        carstats: [],
        config: {
          speed: 55,
          temperature: 20,
          climate: true,
          wheels: 19
        }
      }
  render() {
   // takes out required values and create references to them
    const { config } = this.state;
    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelsize={config.wheels} />
        <TeslaNotice />
      </form>
    )
  }
}
export default TeslaBattery;