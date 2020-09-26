import React from "react";
import { View, Text, Image } from "react-native";

import styles from "../style";

function ChoiceCard(props) {
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.playerName}>{props.playerName}</Text>
      <Image
        style={styles.choiceImg}
        source={{ uri: props.choice.uri }}
        resizeMode="contain"
      />
      <Text style={styles.choiceCardTitle}>{props.choice.name}</Text>
    </View>
  );
}

export default ChoiceCard;
