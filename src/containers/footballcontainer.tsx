import * as React from "react";
import { data, IPlayer, dummyPlayer } from "../data";
import Footballer from "../components/footballer";
import styles from "./footballcontainer.module.scss";

export interface IProps {}

export interface IState {
  availablePlayers: IPlayer[];
  selectedTeam: IPlayer[];
  selectedGoalkeeper: number;
  selectedDefender: number;
  selectedMidfielder: number;
  selectedAttacker: number;
  errorMsg: string;
}

class FootballContainer extends React.Component<IProps, IState> {
  public state = {
    errorMsg: "",
    availablePlayers: data,
    selectedTeam: dummyPlayer,
    selectedGoalkeeper: 0,
    selectedDefender: 0,
    selectedMidfielder: 0,
    selectedAttacker: 0
  };

  public checkPlayerType = (player: IPlayer): boolean => {
    switch (player.position) {
      case "Goalkeeper":
        if (this.state.selectedGoalkeeper < 1) {
          this.setState({
            selectedGoalkeeper: this.state.selectedGoalkeeper + 1
          });
          return true;
        } else {
          return false;
        }
      case "Defender":
        if (this.state.selectedDefender < 3) {
          this.setState({
            selectedDefender: this.state.selectedDefender + 1
          });
          return true;
        } else {
          return false;
        }
      case "Midfielder":
        if (this.state.selectedMidfielder < 4) {
          this.setState({
            selectedMidfielder: this.state.selectedMidfielder + 1
          });
          return true;
        } else {
          return false;
        }
      case "Attacker":
        if (this.state.selectedAttacker < 3) {
          this.setState({
            selectedAttacker: this.state.selectedAttacker + 1
          });
          return true;
        } else {
          return false;
        }
    }
    return false;
  };

  public adjustSelectedTeam = (player: IPlayer) => {
    switch (player.position) {
      case "Goalkeeper":
        this.setState({
          selectedGoalkeeper: this.state.selectedGoalkeeper - 1
        });
        break;
      case "Defender":
        this.setState({
          selectedDefender: this.state.selectedDefender - 1
        });
        break;
      case "Midfielder":
        this.setState({
          selectedMidfielder: this.state.selectedMidfielder - 1
        });
        break;
      case "Attacker":
        this.setState({
          selectedAttacker: this.state.selectedAttacker - 1
        });
        break;
    }
  };

  public handleClick = (player: IPlayer) => {
    const playerIndex = this.state.availablePlayers.includes(player)
      ? this.state.availablePlayers.indexOf(player)
      : this.state.selectedTeam.indexOf(player);

    if (
      this.state.availablePlayers.includes(player) &&
      this.checkPlayerType(player)
    ) {
      const removingPlayer = this.state.availablePlayers;
      const addingPlayer = this.state.selectedTeam;
      addingPlayer.push(player);
      removingPlayer.splice(playerIndex, 1);
      this.setState({
        availablePlayers: removingPlayer,
        selectedTeam: addingPlayer
      });
    } else if (this.state.selectedTeam.includes(player)) {
      this.adjustSelectedTeam(player);
      const removingPlayer = this.state.selectedTeam;
      const addingPlayer = this.state.availablePlayers;
      addingPlayer.push(player);
      removingPlayer.splice(playerIndex, 1);
      this.setState({
        availablePlayers: addingPlayer,
        selectedTeam: removingPlayer
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.container}>
          <section className={styles.availablePlayers}>
            {this.state.availablePlayers.map((eachElement: IPlayer, index) => {
              if (eachElement.position === "Goalkeeper") {
                return (
                  <Footballer
                    key={index}
                    player={eachElement}
                    handleClick={this.handleClick}
                  />
                );
              }
            })}
            {this.state.availablePlayers.map((eachElement: IPlayer, index) => {
              if (eachElement.position === "Defender") {
                return (
                  <Footballer
                    key={index}
                    player={eachElement}
                    handleClick={this.handleClick}
                  />
                );
              }
            })}
            {this.state.availablePlayers.map((eachElement: IPlayer, index) => {
              if (eachElement.position === "Midfielder") {
                return (
                  <Footballer
                    key={index}
                    player={eachElement}
                    handleClick={this.handleClick}
                  />
                );
              }
            })}
            {this.state.availablePlayers.map((eachElement: IPlayer, index) => {
              if (eachElement.position === "Attacker") {
                return (
                  <Footballer
                    key={index}
                    player={eachElement}
                    handleClick={this.handleClick}
                  />
                );
              }
            })}
          </section>
          <section className={styles.selectedTeam}>
            <div className={styles.selectedGoalkeeper}>
              {this.state.selectedTeam.map((eachElement: IPlayer, index) => {
                if (eachElement.position === "Goalkeeper") {
                  return (
                    <Footballer
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
              })}
            </div>
            <div className={styles.selectedDefender}>
              {this.state.selectedTeam.map((eachElement: IPlayer, index) => {
                if (eachElement.position === "Defender") {
                  return (
                    <Footballer
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
              })}
            </div>
            <div className={styles.selectedMidfielder}>
              {this.state.selectedTeam.map((eachElement: IPlayer, index) => {
                if (eachElement.position === "Midfielder") {
                  return (
                    <Footballer
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
              })}
            </div>
            <div className={styles.selectedAttacker}>
              {this.state.selectedTeam.map((eachElement: IPlayer, index) => {
                if (eachElement.position === "Attacker") {
                  return (
                    <Footballer
                      key={index}
                      player={eachElement}
                      handleClick={this.handleClick}
                    />
                  );
                }
              })}
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default FootballContainer;
