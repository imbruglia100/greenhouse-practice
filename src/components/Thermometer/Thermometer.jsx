import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext';

function Thermometer() {
  const {climate, setClimate} = useClimate()

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">
        Actual Temperature: {climate.temperature}°F
      </div>
      <ReactSlider
        value={climate.temperature}
        onAfterChange={(val) => {
          setClimate({ ...climate, temperature: +val });
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
