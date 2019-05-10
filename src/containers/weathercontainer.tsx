import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../reducers";
import { fetchWeather, IWeather } from "../reducers/weatherReducer";
import WeatherCard from "../components/weatherCard";
import styles from "./weathercontainer.module.scss";

export interface IReactProps {}

export interface IReduxProps {
  fetchWeather: (cityID: string) => void;
  weather: IWeather[];
}

export interface IState {}

class WeatherContainer extends React.Component<
  IReactProps & IReduxProps,
  IState
> {
  public state = {};

  public componentDidMount = () => {
    this.props.fetchWeather("2643744,4749005,4219762");
  };

  //   public componentDidUpdate(prevProps: IReduxProps & IReactProps) {
  //     if (this.props.weather !== prevProps.weather) {
  //       console.log("props changed");
  //     }
  //   }

  public render() {
    const displayWeather = this.props.weather.map((eachElement, index) => (
      <WeatherCard key={index} weather={eachElement} />
    ));
    console.log(this.props.weather);
    return (
      <React.Fragment>
        <div className={styles.weatherContainer}>{displayWeather}</div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    weather: state.weather.weather
  };
};

const mapDispatchToProps = { fetchWeather };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherContainer);
