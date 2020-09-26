import React from "react";
import { Text, View } from "react-native";

import { Foundation } from "@expo/vector-icons";

import { ChoiceCard, ButtonGroup, Result } from "../components";

import { CHOICES } from "../constants";
import { getRoundOutcome } from "../utility";
import styles from "../style";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: "Choose your weapon! ⚔️",
      userChoice: {},
      computerChoice: {},
      win: 0,
      lose: 0,
      tie: 0,
      description: "",
      info: [],
    };
  }

  static navigationOptions = {
    title: "First Page",
  };

  setGamePrompt = (gamePrompt) => {
    this.setState({ gamePrompt });
  };

  getResultColor = (gamePrompt) => {
    if (gamePrompt === "Victory!") return "green";
    if (gamePrompt === "Defeat!") return "red";
    return null;
  };

  onPress = (playerChoice) => {
    const [result, compChoice, description] = getRoundOutcome(playerChoice);

    const newUserChoice = CHOICES.find(
      (choice) => choice.name === playerChoice
    );
    const newComputerChoice = CHOICES.find(
      (choice) => choice.name === compChoice
    );

    this.setGamePrompt(result);

    let newInfo = [
      ...this.state.info,
      [description, newUserChoice, newComputerChoice],
    ];

    this.setState({
      userChoice: newUserChoice,
      computerChoice: newComputerChoice,
      description: description,
      info: newInfo,
    });

    result === "Victory!"
      ? this.setState({ win: this.state.win + 1 })
      : result === "Defeat!"
      ? this.setState({ lose: this.state.lose + 1 })
      : this.setState({ tie: this.state.tie + 1 });
  };

  render() {
    const { win, lose, tie, info } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.resultWrapper}>
          <Result
            result={this.state.gamePrompt}
            resultColor={this.getResultColor(this.state.gamePrompt)}
          />
          <Foundation
            name="results"
            size={24}
            color="black"
            onPress={() =>
              this.props.navigation.navigate("Summary", {
                win,
                lose,
                tie,
                info,
              })
            }
          />
        </View>
        <View style={styles.choiceCardWrapper}>
          <ChoiceCard playerName="Son" choice={this.state.userChoice} />
          <Text style={{ color: "#55679f", fontSize: 25 }}>vs</Text>
          <ChoiceCard playerName="Comp" choice={this.state.computerChoice} />
        </View>
        <View style={styles.buttonGroupWrapper}>
          <ButtonGroup playerChoice={this.onPress} />
        </View>
      </View>
    );
  }
}

export default Home;
