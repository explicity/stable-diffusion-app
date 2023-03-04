import { Platform, PixelRatio } from 'react-native';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const elongatedScreen = PixelRatio.get() >= 2.6;
