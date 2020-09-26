import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import { VictoryPie } from "victory-native";

import styles from "../style";

export default function Summary(props) {
  let { win, lose, tie, info } = props.route.params;
  let amount = win + lose + tie;

  //display pie chart and animation
  const wantedGraphicData = [
    { x: "Win", y: win },
    { x: "Lose", y: lose },
    { x: "Tie", y: tie },
  ];
  const defaultGraphicData = [
    { x: "Win", y: 0 },
    { x: "Lose", y: 0 },
    { x: "Tie", y: amount },
  ];

  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData);
  }, []);

  return (
    <View style={styles.summaryContainer}>
      <View style={styles.dataArea}>
        <View style={styles.totalArea}>
          <Text style={styles.amount}>
            You played : {amount} {amount === 1 ? "game" : "games"}
          </Text>
        </View>
        <View style={styles.countAreaWrapper}>
          <View style={styles.countUnit}>
            <Text style={styles.countText}>{win}</Text>
            <Text style={[styles.countTextLabel, { color: "green" }]}>Win</Text>
          </View>
          <View style={styles.countUnit}>
            <Text style={styles.countText}>{lose}</Text>
            <Text style={[styles.countTextLabel, { color: "red" }]}>Lose</Text>
          </View>
          <View style={styles.countUnit}>
            <Text style={styles.countText}>{tie}</Text>
            <Text style={styles.countTextLabel}>Tie</Text>
          </View>
        </View>
      </View>
      <View style={styles.finalWrapper}>
        <Text style={styles.final}>
          Final: {win > lose ? "Victory" : win == lose ? "Draw" : "Failure"}
        </Text>
        <Text></Text>
      </View>
      <View style={styles.visualization}>
        <VictoryPie
          colorScale={["green", "red", "black", "cyan", "navy"]}
          data={graphicData}
          height={320}
          animate={{ easing: "exp" }}
        />
      </View>

      <View style={styles.historyWrapper}>
        <ScrollView horizontal>
          {info.map((historyItem, index) => {
            console.log(historyItem);
            return (
              <View
                style={[
                  styles.historyItem,
                  {
                    borderLeftColor:
                      win > lose ? "green" : win == lose ? "black" : "red",
                  },
                ]}
                key={index}
              >
                <Text style={styles.historyText}>
                  Player chose {historyItem[1].name}{" "}
                </Text>
                <Text style={styles.historyText}>
                  Computer chose {historyItem[2].name}
                </Text>
                <Text style={styles.historyText}>{historyItem[0]}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

Summary.navigationOptions = {
  title: "Second Page",
};
