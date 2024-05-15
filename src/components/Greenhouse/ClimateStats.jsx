import './ClimateStats.css';
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from 'react';

function ClimateStats() {
  const {climate} = useClimate()
  const [currTemp, setCurrTemp] = useState(climate.temperature)

  useEffect(() => {
    const interval = setInterval(() => {
      if(currTemp > climate.temperature){
        setCurrTemp(prev => prev--)
      }else if(currTemp < climate.temperature){
        setCurrTemp(prev => prev++)
      }
    }, 1000)

    if(currTemp === climate.temperature){
      clearInterval(interval)
    }
  }, [climate.temperature])
  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {currTemp}°F
      </div>
      <div className="humidity">
        Humidity {climate.humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
