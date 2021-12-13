import React from 'react';
import {StyleSheet, View} from 'react-native';
import Tile from './Tile';

const Board = (props: {board: string[]; onPress: (v: number) => void}) => {
  const {board, onPress} = props;

  const _renderRows = () => {
    const rows = [];

    for (let i = 0; i < 3; ++i) {
      rows.push(
        <View key={i} style={styles.row}>
          {_renderRow(i)}
        </View>,
      );
    }

    return rows;
  };

  const _renderRow = (number: number) => {
    const tiles = [];

    for (let i = 0; i < 3; ++i) {
      const index = number * 3 + i;

      tiles.push(
        <Tile key={i} value={board[index]} index={index} onPress={onPress} />,
      );
    }

    return tiles;
  };

  return <View style={styles.container}>{_renderRows()}</View>;
};
export default Board;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
});
