import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    clouds: undefined,
    main: {
        feels_like: undefined,
        temp_max: undefined,
    },
    name: undefined,
    sys: {
        country: undefined,
        sunrise: undefined
    },
    weather: undefined,
    wind: {
        speed: undefined
    },
    isLoaded: false,
}

export const WeatherSlise = createSlice(
    {
        name: 'Weather',
        initialState,
        reducers: {
            setData: (state, action) => {
                // state = action.payload // hana tl3 lina ga3 les doner lijayin mn payload

                state.clouds = action.payload.clouds;
                state.main = action.payload.main;
                state.name = action.payload.name;
                state.sys = action.payload.sys;
                state.weather = action.payload.weather;
                state.wind = action.payload.wind;
                state.isLoaded = true
            },
            resetData: (state) => {
               
                state.isLoaded = false
            }
        }
    }
)
export const { setData ,resetData} = WeatherSlise.actions
export default WeatherSlise.reducer