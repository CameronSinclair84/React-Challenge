import * as React from "react";
import styles from "./quizcontainer.module.scss";

export interface IProps {}

export interface IState {
  password: string;
  isCorrect: boolean;
}

class QuizContainer extends React.Component<IProps, IState> {
  public state = { password: "pizza", isCorrect: false };

  public handleKeywordChange = (evt: any) => {
    if (evt.target.value === this.state.password) {
      this.setState({ isCorrect: true });
    } else this.setState({ isCorrect: false });
  };

  render() {
    const checkAnswer = this.state.isCorrect
      ? "That is the correct answer!"
      : "That is incorrect";
    return (
      <React.Fragment>
        <div className={styles.quiz}>
          <p>Type your answer (hint: The correct answer is "pizza"): </p>
          <input type="text" onChange={this.handleKeywordChange} />
          <p>{checkAnswer}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default QuizContainer;
