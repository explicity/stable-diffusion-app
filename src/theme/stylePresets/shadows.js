import { Color } from '../colors';

const shadowStyles = {
  SHADOW_4: {
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.23,
    shadowColor: Color.BLACK(),
    shadowRadius: 2.6,
    elevation: 4,
  },
  SHADOW_8: {
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowColor: Color.BLACK(),
    shadowRadius: 4.6,
    elevation: 8,
  },
  SHADOW_12: {
    shadowOffset: {
      height: 6,
      width: 0,
    },
    shadowOpacity: 0.37,
    shadowColor: Color.BLACK(),
    shadowRadius: 7.5,
    elevation: 12,
  },
  SHADOW_16: {
    shadowOffset: {
      height: 8,
      width: 0,
    },
    shadowOpacity: 0.44,
    shadowColor: Color.BLACK(),
    shadowRadius: 10.3,
    elevation: 16,
  },
  SHADOW_STANDARD: {
    shadowOffset: {
      height: 8,
      width: 0,
    },
    shadowOpacity: 0.1,
    shadowColor: Color.BLACK(),
    shadowRadius: 8,
    elevation: 8,
  },
};

export default shadowStyles;
