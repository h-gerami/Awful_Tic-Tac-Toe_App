import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  NavigationActions,
  NavigationSwitchProp,
  StackActions,
} from 'react-navigation';
import {TColor, wp} from '../styles/CustomStyle';
import Game from './Game';
import Result from './Result';

const GameScreen = (props: {navigation: NavigationSwitchProp}) => {
  const {navigation} = props;
  const [result, setResult] = useState<string>();

  const handleGameFinish = (res: string) => {
    setResult(res);
  };

  const handleGameRestart = () => {
    navigation.dispatch(
      StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({routeName: 'Welcome'}),
          NavigationActions.navigate({routeName: 'Game'}),
        ],
      }),
    );
  };

  return (
    <View style={styles.container}>
      {!result && (
        <Image
          style={styles.fightGif}
          source={require('../../assets/images/sss.gif')}
        />
      )}
      <View pointerEvents={result ? 'none' : 'auto'}>
        <Game onFinishGame={handleGameFinish} />
      </View>
      {result && (
        <Result result={result} onRestartGameBtnClick={handleGameRestart} />
      )}
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TColor.blue,
    position: 'relative',
  },
  fightGif: {
    width: wp(30),
    height: wp(30),
    alignSelf: 'center',
    position: 'absolute',
    top: wp(2),
    // tintColor: TColor.white,
  },
});
