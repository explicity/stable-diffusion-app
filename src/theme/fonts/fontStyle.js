import { Platform } from 'react-native';

import fontFamily from './fontFamily';

const fontStyle = {
  /* TITLES */
  TITLE_GIGANTIC: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
        letterSpacing: 0.6,
      },
      android: {
        fontFamily: fontFamily.INTER_BOLD,
        letterSpacing: -1.65,
      },
    }),
    fontSize: 72,
    lineHeight: 80,
  },
  TITLE_ENORMOUS: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
        letterSpacing: 0.6,
      },
      android: {
        fontFamily: fontFamily.INTER_BOLD,
        letterSpacing: -1.15,
      },
    }),
    fontSize: 50,
    lineHeight: 60,
  },
  TITLE_HUGE: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
        letterSpacing: 0.41,
      },
      android: {
        fontFamily: fontFamily.INTER_BOLD,
        letterSpacing: -0.82,
      },
    }),
    fontSize: 34,
    lineHeight: 41,
  },
  TITLE_BIG: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_SEMI_BOLD,
        letterSpacing: 0.34,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: -0.9,
      },
    }),
    fontSize: 28,
    lineHeight: 34,
  },
  TITLE_MEDIUM: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_SEMI_BOLD,
        letterSpacing: -0.1,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: -1.0,
      },
    }),
    fontSize: 23,
    lineHeight: 29,
  },
  TITLE_NORMAL: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
        letterSpacing: -0.49,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: -0.3,
      },
    }),
    fontSize: 19,
    lineHeight: 24,
  },
  TITLE_SMALL: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
        letterSpacing: -0.44,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: -0.2,
      },
    }),
    fontSize: 17,
    lineHeight: 24,
  },
  TITLE_TINY: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
        letterSpacing: -0.24,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: -0.1,
      },
    }),
    fontSize: 15,
    lineHeight: 20,
  },
  TITLE_MICRO: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
        letterSpacing: -0.22,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: -0.1,
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  TITLE_MINISCULE: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_MEDIUM,
      },
      android: {
        fontFamily: fontFamily.INTER_MEDIUM,
        letterSpacing: -0.3,
      },
    }),
    fontSize: 9,
    lineHeight: 11,
  },
  /* TEXTS */
  TEXT_HUGE: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_REGULAR,
      },
      android: {
        fontFamily: fontFamily.INTER_REGULAR,
      },
    }),
    letterSpacing: -0.46,
    fontSize: 19,
    lineHeight: 24,
  },
  TEXT_BIG: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_REGULAR,
      },
      android: {
        fontFamily: fontFamily.INTER_REGULAR,
      },
    }),
    letterSpacing: -0.41,
    fontSize: 17,
    lineHeight: 22,
  },
  TEXT_NORMAL: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_REGULAR,
      },
      android: {
        fontFamily: fontFamily.INTER_REGULAR,
      },
    }),
    letterSpacing: -0.24,
    fontSize: 15,
    lineHeight: 18,
  },
  TEXT_SMALL: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_REGULAR,
      },
      android: {
        fontFamily: fontFamily.INTER_REGULAR,
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  TEXT_TINY: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_REGULAR,
      },
      android: {
        fontFamily: fontFamily.INTER_REGULAR,
      },
    }),
    fontSize: 8,
    lineHeight: 9,
  },
  /* CARDS */
  CARD_TITLE_BIG: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
        letterSpacing: -0.1,
      },
      android: {
        fontFamily: fontFamily.INTER_BOLD,
        letterSpacing: -0.9,
      },
    }),
    fontSize: 23,
    lineHeight: 29,
  },
  CARD_TITLE_NORMAL: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
        letterSpacing: 0.25,
      },
      android: {
        fontFamily: fontFamily.INTER_BOLD,
        letterSpacing: -0.3,
      },
    }),
    fontSize: 17,
    lineHeight: 20,
  },
  CARD_TITLE_SMALL: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_BOLD,
        letterSpacing: 0.15,
      },
      android: {
        fontFamily: fontFamily.INTER_BOLD,
        letterSpacing: -0.22,
      },
    }),
    fontSize: 10,
    lineHeight: 12,
  },
  CARD_TAG_FAT: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_SEMI_BOLD,
        letterSpacing: 0.47,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: -0.35,
      },
    }),
    fontSize: 16,
    lineHeight: 20,
  },
  CARD_TAG_THIN: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_DISPLAY_MEDIUM,
        letterSpacing: 0.1,
      },
      android: {
        fontFamily: fontFamily.INTER_MEDIUM,
        letterSpacing: -0.65,
      },
    }),
    fontSize: 16,
    lineHeight: 20,
  },
  CARD_TAG_MICRO: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_MEDIUM,
        letterSpacing: -0.1,
      },
      android: {
        fontFamily: fontFamily.INTER_MEDIUM,
        letterSpacing: 0,
      },
    }),
    fontSize: 10,
    lineHeight: 12,
  }
  MINICARD_SUBTITLE: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
        letterSpacing: -0.22,
      },
      android: {
        // TODO:
        fontFamily: fontFamily.INTER_MEDIUM,
        letterSpacing: -0.25,
      },
    }),
    fontSize: 12,
    lineHeight: 16,
  },
  /* PIONS */
  PION_TITLE: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_REGULAR,
      },
      android: {
        fontFamily: fontFamily.INTER_REGULAR,
      },
    }),
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: -0.31,
  },
  PION_TITLE_FAT: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: 0.12,
      },
    }),
    fontSize: 13,
    lineHeight: 16,
  },
  /* OTHER */
  CAPS_SMALL: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
        letterSpacing: 0.32,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: 0.45,
      },
    }),
    fontSize: 10,
    lineHeight: 12,
  },
  CAPS_BIG: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily.SF_PRO_TEXT_SEMI_BOLD,
        letterSpacing: 0.35,
      },
      android: {
        fontFamily: fontFamily.INTER_SEMI_BOLD,
        letterSpacing: 0.5,
      },
    }),
    fontSize: 12,
    lineHeight: 14,
  },
};

export default fontStyle;
