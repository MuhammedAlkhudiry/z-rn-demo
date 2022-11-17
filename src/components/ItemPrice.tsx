import {Typography} from './typography';
import React from 'react';
import {IListItem} from '../screens/list';
import {StyleSheet} from 'react-native';

// I usually use types but for the sake of consistency with the rest of the code, I'm using interfaces
interface IItemPriceProps {
  item: IListItem;
}

const ItemPrice = ({item}: IItemPriceProps) => {
  return (
    <>
      {!item.salePrice ? (
        <Typography
          color={'#000000'}
          style={item.salePrice ? styles.discounted : undefined}>
          SAR {item.price}
        </Typography>
      ) : null}
      {item.salePrice ? (
        <Typography>
          <Typography
            color={'#000000'}
            style={item.salePrice ? styles.discounted : undefined}>
            SAR {item.price}
          </Typography>
          <Typography color="#DA2121">
            {'  '}SAR {item.salePrice}
          </Typography>
        </Typography>
      ) : null}
    </>
  );
};

export default ItemPrice;

const styles = StyleSheet.create({
  discounted: {
    textDecorationLine: 'line-through',
  },
});
