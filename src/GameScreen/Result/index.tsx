import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TCFont, TColor, wp} from '../../styles/CustomStyle';
import {USER_FIGURE, AI_FIGURE, DRAW} from '../Game/constants';
interface ResultType {
  result: string;
  onRestartGameBtnClick: () => void;
}
const Result = (props: ResultType) => {
  const {result, onRestartGameBtnClick} = props;
  const getResultMessage = () => {
    switch (result) {
      case USER_FIGURE:
        return 'You won the game 😔';
      case AI_FIGURE:
        return 'Hossein won the game 🤣';
      case DRAW:
        return 'Draw 🥴';
    }
  };

  return (
    <View>
      <Text style={styles.result}>{getResultMessage()}</Text>
      <TouchableOpacity
        style={styles.touchToStartButton}
        onPress={onRestartGameBtnClick}>
        <Text style={styles.instructions}>Play again ?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Result;

const styles = StyleSheet.create({
  result: {
    fontSize: wp(6),
    margin: wp(20),
    textAlign: 'center',
    color: TColor.white,
    fontFamily: TCFont.medium,
  },
  instructions: {
    fontSize: wp(5),
    color: TColor.blue,
    textAlign: 'center',
    fontFamily: TCFont.medium,
  },
  touchToStartButton: {
    borderRadius: wp(5),
    backgroundColor: TColor.white,
    padding: wp(5),
    alignSelf: 'stretch',
  },
});
