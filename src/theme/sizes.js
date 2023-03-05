import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StatusBar, Dimensions, PixelRatio, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { isIOS, elongatedScreen } from '../services/envHelper';

const { width, height } = Dimensions.get('window');

const androidSmallPadding = wp(elongatedScreen ? '2.4%' : '1.9%');

export const Padding = {
  MINIMAL: 2,
  TINY: 4,
  SMALL: isIOS ? 8 : androidSmallPadding,
  MEDIUM: 12,
  BIG: 64,
};

export const TOP_BAR_HEIGHT = Platform.select({
  ios: DeviceInfo.hasNotch() ? 44 : 20,
  android: StatusBar.currentHeight,
});

export const MODAL_ANIMATION_DURATION = 150;

export const TASK_DONE_ANIMATION_CONTAINER = width * 3;
