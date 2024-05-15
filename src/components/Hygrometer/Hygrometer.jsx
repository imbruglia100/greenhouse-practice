import ReactSlider from 'react-slider';
import './Hygrometer.css';
import { useClimate } from "../../context/ClimateContext";

function Hygrometer() {

  const { climate, setClimate } = useClimate();
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {climate.humidity}%</div>
      <ReactSlider
        value={climate.humidity}
        onAfterChange={(val) => {
          setClimate({ ...climate, humidity: +val });
        }}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
