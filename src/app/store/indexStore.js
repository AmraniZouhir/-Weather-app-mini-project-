import { configureStore } from "@reduxjs/toolkit";
import { WeatherSlise } from "../../features/Weather/Weather";

export const store = configureStore(
{   
     reducer:{
          weather:WeatherSlise.reducer
     }
}
)