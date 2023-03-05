import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';

const ANIMATION_DURATION = 1000;

const FadeableView = ({
  visible: defaultVisible,
  duration = ANIMATION_DURATION,
  style,
  children,
}) => {
  const [visible, setVisible] = useState(defaultVisible);

  useEffect(() => {
    if (defaultVisible !== visible) {
      setTimeout(() => setVisible(defaultVisible), duration);
    }
  }, [defaultVisible]);

  return visible ? (
    <Animatable.View
      animation={defaultVisible ? 'fadeIn' : 'fadeOut'}
      duration={duration}
      style={style}
    >
      {children}
    </Animatable.View>
  ) : null;
};

export default FadeableView;
