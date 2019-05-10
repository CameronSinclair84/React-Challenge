import { combineReducers } from "redux";
import weatherReducer, { IWeatherState } from "./weatherReducer";

export interface IStore {
  weather: IWeatherState;
}

export default combineReducers({
  weather: weatherReducer
});
