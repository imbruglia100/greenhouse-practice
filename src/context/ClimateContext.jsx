// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

import { createContext, useContext, useState } from "react";

const ClimateContext = createContext()

export const useClimate = () => useContext(ClimateContext)

export const ClimateProvider = ({children}) => {
    const [climate, setClimate] = useState({
        temperature: 50, //as deg F
        humidity: 40 //as %
    })
    return(
        <ClimateContext.Provider value={{climate, setClimate}}>
            {children}
        </ClimateContext.Provider>
    )
}

