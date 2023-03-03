/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';

export default function ({ Colors, ...args }) {
  return {
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        height: 45,
        borderRadius: 10,
        paddingStart: 20,
      },
    }),
  };
}
