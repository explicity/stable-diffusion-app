import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { StatusBar, Dimensions, PixelRatio, Platform } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

import { isIOS } from '../services/envHelper';

const androidSmallPadding = wp(elongatedScreen ? '2.4%' : '1.9%');

export const Padding = {
  MINIMAL: 2,
  TINY: 4,
  SMALL: isIOS ? 8 : androidSmallPadding,
  MEDIUM: 12,
  BIG: 64,
};
