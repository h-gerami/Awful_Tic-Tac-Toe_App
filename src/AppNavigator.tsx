import {createStackNavigator} from 'react-navigation-stack';
import WelcomeScreen from './WelcomeScreen';
import GameScreen from './GameScreen';
import {TCFont, TColor} from './styles/CustomStyle';

export default createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerBackTitle: 'Back',
        headerBackTitleStyle: {color: TColor.blue},
        headerTintColor: TColor.blue,
        headerTitleStyle: {color: TColor.blue, fontFamily: TCFont.medium},
        headerTitle: 'Tic Tac Toe',
      },
    },
    Game: {
      screen: GameScreen,
      navigationOptions: {
        headerBackTitle: ' ',
        headerBackTitleStyle: {color: TColor.blue},
        headerTintColor: TColor.blue,
        headerTitleStyle: {color: TColor.blue, fontFamily: TCFont.medium},
        headerTitle: "Let's Play",
      },
    },
  },
  {
    navigationOptions: {
      title: 'Tic Tac Toe',
    },
  },
);
