import { isIOS, isAndroid } from '../../services/envHelper';

const makeFontsCrossPlatform = (fontsMap) => {
  const fontsCrossPlatform = {};

  Object.keys(fontsMap).forEach((fontName) => {
    Object.defineProperty(fontsCrossPlatform, fontName, {
      get: () => {
        if (isIOS && fontsMap[fontName].ios) {
          return fontsMap[fontName].ios;
        }

        if (isAndroid && fontsMap[fontName].android) {
          return fontsMap[fontName].android;
        }

        return null;
      },
    });
  });

  return fontsCrossPlatform;
};

// TODO: check if all fonts provided for OS (till Inter font)
const fontFamilyMap = {
  SF_UI_DISPLAY_SEMI_BOLD: {
    ios: 'SFUIDisplay-Semibold',
    android: 'SF-UI-Display-Semibold',
  },
  SF_UI_DISPLAY_REGULAR: {
    ios: 'SFUIDisplay-Regular',
    android: 'SF-UI-Display-Regular',
  },
  SF_UI_TEXT_REGULAR: {
    ios: 'SFUIText-Regular',
    android: 'SF-UI-Text-Regular',
  },
  SF_UI_TEXT_SEMI_BOLD: {
    ios: 'SFUIText-Semibold',
    android: 'SF-UI-Text-Semibold',
  },
  SF_UI_TEXT_BOLD: {
    ios: 'SFUIText-Bold',
    android: 'SF-UI-Text-Bold',
  },
  SF_UI_TEXT_MEDIUM: {
    ios: 'SFUIText-Medium',
    android: 'SF-UI-Text-Medium',
  },
  FILSON_SOFT_MEDIUM: {
    ios: 'FilsonSoftMedium',
    android: 'FilsonSoft-Medium',
  },
  FILSON_SOFT_BOOK: {
    ios: 'FilsonSoftBook',
    android: 'FilsonSoftBook',
  },
  SF_PRO_TEXT_REGULAR: {
    ios: 'SFProText-Regular',
    android: 'SF-Pro-Text-Regular',
  },
  SF_PRO_TEXT_MEDIUM: {
    ios: 'SFProText-Medium',
    android: 'SF-Pro-Text-Medium',
  },
  SF_PRO_TEXT_SEMI_BOLD: {
    ios: 'SFProText-Semibold',
    android: 'SF-Pro-Text-Semibold',
  },
  SF_PRO_TEXT_BOLD: {
    ios: 'SFProText-Bold',
    android: 'SF-Pro-Text-Bold',
  },
  SF_PRO_DISPLAY_REGULAR: {
    ios: 'SFProDisplay-Regular',
    android: 'SF-Pro-Display-Regular',
  },
  SF_PRO_DISPLAY_MEDIUM: {
    ios: 'SFProDisplay-Medium',
    android: 'SF-Pro-Display-Medium',
  },
  SF_PRO_DISPLAY_SEMI_BOLD: {
    ios: 'SFProDisplay-Semibold',
    android: 'SF-Pro-Display-Semibold',
  },
  SF_PRO_DISPLAY_BOLD: {
    ios: 'SFProDisplay-Bold',
    android: 'SF-Pro-Display-Bold',
  },
  SF_PRO_DISPLAY_HEAVY: {
    ios: 'SFProDisplay-Heavy',
    android: 'SF-Pro-Display-Heavy',
  },
  INTER_REGULAR: {
    ios: '',
    android: 'Inter-Regular',
  },
  INTER_MEDIUM: {
    ios: '',
    android: 'Inter-Medium',
  },
  INTER_SEMI_BOLD: {
    ios: '',
    android: 'Inter-SemiBold',
  },
  INTER_BOLD: {
    ios: '',
    android: 'Inter-Bold',
  },
  SF_PRO_DISPLAY_SEMI_BOLD_ITALIC: {
    ios: 'SFProDisplay-SemiBoldItalic',
    android: 'SF-Pro-Display-SemiboldItalic',
  },
  SF_PRO_DISPLAY_BOLD_ITALIC: {
    ios: 'SFProDisplay-BoldItalic',
    android: 'SF-Pro-Display-BoldItalic',
  },
  LUNAR_REGULAR: {
    ios: 'Lunar-Regular',
    android: 'Lunar-Regular',
  },
};

export default makeFontsCrossPlatform(fontFamilyMap);
