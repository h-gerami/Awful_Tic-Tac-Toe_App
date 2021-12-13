import React, {Component} from 'react';
import TicTacToe from 'tictactoe-agent';
import Board from './Board';
import {View} from 'react-native';
import {
  USER_FIGURE,
  AI_FIGURE,
  EMPTY,
  DRAW,
  VICTORY_CONDITIONS,
} from './constants';
interface GamePropsType {
  onFinishGame: (result: string) => void;
}
interface GameStatesType {
  board: Array<string>;
}
export default class Game extends Component<GamePropsType, GameStatesType> {
  constructor(props: GamePropsType) {
    super(props);

    this.state = {
      board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    };
  }

  populateTile(index: number, figure: string, onFinish?: () => void) {
    if (this.state.board[index] !== EMPTY) {
      return;
    }

    const board = [...this.state.board];
    board[index] = figure;

    this.setState(
      {
        board,
      },
      () => {
        const result = this.judgeWinner();

        if (result !== null) {
          this.props.onFinishGame(result);
        }
        if (onFinish) {
          onFinish();
        }
      },
    );
  }

  AIAct() {
    const input = this.state.board.join('');
    const model = new TicTacToe.Model(input, AI_FIGURE);
    const recommendation = model.getRecommendation();

    this.populateTile(recommendation.index, AI_FIGURE);
  }

  judgeWinner() {
    if (!this.state.board.some(figure => figure === EMPTY)) {
      return DRAW;
    }

    let winner = null;
    for (let i = 0; i < VICTORY_CONDITIONS.length; ++i) {
      let figure = this.state.board[VICTORY_CONDITIONS[i][0]];

      if (VICTORY_CONDITIONS[i].every(tile => this.checkTile(tile, figure))) {
        winner = figure;
        break;
      }
    }

    return winner;
  }

  checkTile(tile: number, figure: string) {
    return (
      this.state.board[tile] === figure && this.state.board[tile] !== EMPTY
    );
  }

  clearField() {
    this.setState({
      board: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
    });
  }

  handlePress = (index: number) => {
    this.populateTile(index, USER_FIGURE, () => this.AIAct());
  };

  render() {
    return (
      <View>
        <Board board={this.state.board} onPress={this.handlePress} />
      </View>
    );
  }
}
