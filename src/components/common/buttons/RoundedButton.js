import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RoundedButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
