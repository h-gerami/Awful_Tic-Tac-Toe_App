import {Dimensions, Platform} from 'react-native';
const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
export function wp(percentage: number) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
export function hp(percentage: number) {
  const value = (percentage * viewportHeight) / 100;
  return Math.round(value);
}
const TColor = {
  black: '#1C3041',
  gray: '#343434',
  blue: '#2F3061',
  red: '#EF476F',
  white: '#fff',
  bgColor: '#F7FFF7',
  green: '#5E8C61',
};
const TCFont = {
  medium: Platform.OS === 'ios' ? 'Bodo Amat' : 'BodoAmat',
};

export {TColor, TCFont};
