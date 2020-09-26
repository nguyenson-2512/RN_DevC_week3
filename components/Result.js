import React from "react";
import { View, Text } from "react-native";

function Result(props) {
  return (
    <View>
      <Text style={{ fontSize: 30, color: props.resultColor }}>
        {props.result}
      </Text>
    </View>
  );
}

export default Result;
