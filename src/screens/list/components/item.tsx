import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import styled from '@emotion/native';
import {getImage} from '../../../utils/image';
import {Typography} from '../../../components/typography';
import {IListItem} from '../index';
import {Avatar} from '../../../components/avatar';
import useAppNavigation from '../../../hooks/useAppNavigation';
import ItemPrice from '../../../components/ItemPrice';

const thumbnailSize = 600;

export const ListItem: React.FC<{item: IListItem}> = ({item}) => {
  const nav = useAppNavigation();

  return (
    <ListItemContainer onPress={() => nav.navigate('ItemScreen', {item})}>
      <Avatar
        style={styles.image}
        source={{uri: getImage(thumbnailSize, item.id)}}
      />

      <View style={styles.flex}>
        <Typography color={'#000000'} weight="medium">
          {item.name}
        </Typography>

        <ItemPrice item={item} />

        <Typography fontSize={14} color="#545454">
          Brand: {item.name}
        </Typography>
      </View>
    </ListItemContainer>
  );
};

// using memo to prevent re-rendering for extra performance (I did not test how much it helps, in real project I would test it)
const ListItemContainer = memo(
  styled.TouchableOpacity({
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 25,
    borderBottomColor: 'rgba(0,0, 0, 0.05)',
    borderBottomWidth: 1,
    flexDirection: 'row',
  }),
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  image: {
    marginTop: 8,
    marginRight: 12,
  },
  sale: {
    color: '#DA2121',
  },
});
