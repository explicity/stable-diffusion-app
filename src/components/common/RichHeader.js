import React from 'react';
import { View, Text } from 'react-native';

const RichHeader = ({
  icon = null,
  title,
  desciption,
  doneAnimation = false,
}) => {
  return (
    <View>
      {!!icon && (
        <View>
          <FastImage source={icon} style={styles.iconStyle} />
        </View>
      )}
      {doneAnimation && (
        <View style={styles.doneAnimation}>
          <LottieView
            autoPlay
            loop={false}
            // source={DONE_ANIMATION}
            speed={1.5}
          />
        </View>
      )}

      <View>
        <Text>{title}</Text>
        {!!desciption && <Text>{desciption}</Text>}
      </View>
    </View>
  );
};

export default RichHeader;
