import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CIRCLE, CROSS} from './constants';
import Circle from './Circle';
import Cross from './Cross';
import {TColor} from '../../styles/CustomStyle';
interface TileType {
  value: string;
  onPress: (num: number) => void;
  index: number;
}
const Tile = (props: TileType) => {
  const {value, onPress, index} = props;
  const _renderContent = () => {
    switch (value) {
      case CIRCLE:
        return <Circle color="white" />;
      case CROSS:
        return <Cross color="white" />;
      default:
        return <Text style={styles.text} onPress={_handlePress} />;
    }
  };

  const _handlePress = () => {
    onPress(index);
  };

  return (
    <View
      style={[
        styles.container,
        index === 4 && {borderWidth: 5, borderRadius: 5},
        index === 0 && {borderRightWidth: 1, borderBottomWidth: 1},
        index === 2 && {borderLeftWidth: 1, borderBottomWidth: 1},
        index === 3 && {borderBottomWidth: 1},
        index === 6 && {borderRightWidth: 1},
        index === 7 && {borderRightWidth: 1},
        index === 8 && {borderTopWidth: 1},
      ]}>
      {_renderContent()}
    </View>
  );
};
export default Tile;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: TColor.bgColor,
    // borderWidth: 1,
    width: 100,
    height: 100,
  },
  text: {
    width: 100,
    height: 100,
  },
});
