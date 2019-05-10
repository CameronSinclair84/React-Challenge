import * as React from "react";
import { IWeather } from "../reducers/weatherReducer";
import styles from "./weathercard.module.scss";

export interface IProps {
  weather: IWeather;
}

export interface IState {
  isShown: boolean;
}

class WeatherCard extends React.Component<IProps, IState> {
  state = { isShown: true };

  public UCfirst(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  private handleCardClick = (): void => {
    this.setState({ isShown: !this.state.isShown });
  };

  render() {
    const weatherImages: string[] = [];
    for (let i = 0; i < this.props.weather.weather.length; i++) {
      weatherImages.push(
        "http://openweathermap.org/img/w/" +
          this.props.weather.weather[i].icon +
          ".png"
      );
    }

    const rotateStyle = this.state.isShown ? "" : styles.cardRotated;

    return (
      <React.Fragment>
        <div
          onClick={this.handleCardClick}
          className={`${styles.weatherCard} ${rotateStyle}`}
        >
          <section className={styles.cityTitle}>
            {this.props.weather.name}
          </section>
          <section className={styles.tempInfo}>
            <p>Humidity: {this.props.weather.main.humidity}</p>
            <p>
              Temperature: {(this.props.weather.main.temp - 273.15).toFixed(1)}
              °C
            </p>
            <p>
              Min Temperature:{" "}
              {(this.props.weather.main.temp_min - 273.15).toFixed(1)}°C
            </p>
            <p>
              Max Temperature:{" "}
              {(this.props.weather.main.temp_max - 273.15).toFixed(1)}°C
            </p>
          </section>
          <section className={styles.conditionsContainer}>
            <p>Conditions</p>
            <section className={styles.conditions}>
              {weatherImages.map((element, index) => (
                <div key={index}>
                  <img
                    src={element}
                    key={index}
                    height="80px"
                    alt="Weather Icon"
                  />
                  <p>
                    {this.UCfirst(
                      this.props.weather.weather[index].description
                    )}
                  </p>
                </div>
              ))}
            </section>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default WeatherCard;
