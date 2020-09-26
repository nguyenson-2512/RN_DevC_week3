import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Home.js
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  resultWrapper: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  choiceCardWrapper: {
    flex: 0.6,
    backgroundColor: "white",
    flexDirection: "row",
    margin: 10,
    borderWidth: 2,
    shadowRadius: 5,
    borderColor: "grey",
    shadowOpacity: 0.9,
    justifyContent: "space-around",
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOffset: { height: 5, width: 5 },
    alignItems: "center",
  },
  buttonGroupWrapper: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  //Summary.js
  summaryContainer: {
    flex: 1,
  },
  dataArea: {
    flex: 0.3,
  },
  totalArea: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    borderBottomColor: "gray",
    borderBottomWidth: 2,
  },
  amount: {
    fontWeight: "500",
    fontSize: 32,
    color: "brown",
  },
  countAreaWrapper: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  finalWrapper: {
    flex: 0.1,
    alignItems: "center",
  },
  final: {
    fontSize: 25,
    fontWeight: "700",
    color: "#264499",
  },
  countText: {
    fontSize: 23,
    fontWeight: "500",
    color: "#264499",
    textAlign: "center",
  },
  countTextLabel: {
    fontSize: 25,
    fontWeight: "700",
    color: "black",
  },
  visualization: {
    flex: 0.48,
    backgroundColor: "#ffe",
  },
  historyWrapper: {
    flex: 0.12,
  },
  historyItem: {
    height: 80,
    width: 420,
    borderWidth: 2,
    borderColor: "black",
    borderLeftWidth: 50,
    justifyContent: "center",
  },
  historyText: {
    fontSize: 17,
    fontWeight: "300",
    marginLeft: 30,
  },
  //buttonGroup.js
  buttonStyle: {
    width: 200,
    margin: 5,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3a55b4",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  //ChoiceCard.js
  choiceContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  choiceImg: {
    width: 150,
    height: 150,
    padding: 10,
  },
  playerName: {
    fontSize: 25,
    color: "#fc7745",
    fontWeight: "bold",
    fontStyle: "italic",
    shadowColor: "#a3985d",
    shadowOffset: { height: 5, width: 5 },
    shadowOpacity: 0.7,
  },
  choiceCardTitle: {
    fontSize: 30,
    color: "#250902",
  },
  //
});

export default styles;
