import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { CHOICES } from "../constants";
import styles from "../style";

function ButtonGroup(props) {
  return (
    <View>
      {CHOICES.map((item) => {
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            key={item.name}
            onPress={() => props.playerChoice(item.name)}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default ButtonGroup;
