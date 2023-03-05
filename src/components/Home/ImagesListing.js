import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Padding, ShadowStyles } from '../../theme';
import ImagesListingItem from './ImagesListingItem';

const DEFAULT_PAGE_SIZE = 10;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: Padding.SMALL + Padding.TINY,
  },
  itemContainer: {
    marginHorizontal: Padding.TINY,
    marginBottom: 2 * Padding.SMALL,
  },
});

const ImagesListing = ({ contentContainerStyle, data, ...props }) => {
  const keyExtractor = (item, index) => item + index.toString();

  const renderItem = ({ item }) => (
    <ImagesListingItem containerStyle={styles.itemContainer} imageUrl={item} />
  );

  return (
    <FlatList
      key='ImagesListing'
      data={data.filter(Boolean)}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      initialNumToRender={DEFAULT_PAGE_SIZE}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      showsVerticalScrollIndicator={false}
      {...props}
    />
  );
};

export default ImagesListing;
