import { createSlice } from "@reduxjs/toolkit"

const initialState = {

}

export const WeatherSlise = createSlice(
    {
        name:'Weather',
        initialState,
        reducers:{
            setData:(state,action)=>{

            }
        }
    }
)
export const {setData} = WeatherSlise.actions
export default WeatherSlise.reducer