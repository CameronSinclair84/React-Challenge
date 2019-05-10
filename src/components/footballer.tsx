import * as React from "react";
import { IPlayer } from "../data";
import styles from "./footballer.module.scss";

export interface IProps {
  player: IPlayer;
  handleClick: (player: IPlayer) => void;
}

export interface IState {}

class Footballer extends React.Component<IProps, IState> {
  //  state = { :  }
  public getPlayerType = () => {
    switch (this.props.player.position) {
      case "Goalkeeper":
        return styles.goalkeeper;
      case "Defender":
        return styles.defender;
      case "Midfielder":
        return styles.midfielder;
      case "Attacker":
        return styles.attacker;
    }
  };

  render() {
    let playerStyle = this.getPlayerType();

    return (
      <React.Fragment>
        <div
          className={`${styles.playerCard} ${playerStyle}`}
          onClick={() => this.props.handleClick(this.props.player)}
        >
          <p>{this.props.player.name}</p>
          <p>{this.props.player.position}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Footballer;
