import React from "react";
import { Provider } from "react-redux";
import store from "./store/";
import QuizContainer from "./containers/quizcontainer";
import WeatherContainer from "./containers/weathercontainer";
import FootballContainer from "./containers/footballcontainer";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherContainer />
        <div className="Quiz">
          <QuizContainer />
        </div>
        <div className="Football">
          <FootballContainer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
