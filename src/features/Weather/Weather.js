import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    clouds: undefined,
    main: undefined,
    name: undefined,
    sys: undefined,
    weather: undefined,
    wind: undefined
}

export const WeatherSlise = createSlice(
    {
        name: 'Weather',
        initialState,
        reducers: {
            setData: (state, action) => {
                console.log(action.payload)
            }
        }
    }
)
export const { setData } = WeatherSlise.actions
export default WeatherSlise.reducer