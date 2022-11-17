import React, {useState} from 'react';
import styled from '@emotion/native';

import {Typography} from './typography';

export const CartQuantity = () => {
  const [quantity, setQuantity] = useState<number>(5);

  return (
    <QuantityContainer>
      <React.Fragment>
        <QuantityButton
          onPress={() => setQuantity(quantity + 1)}
          underlayColor="#EDEBF2">
          <Typography color="#522973">+</Typography>
        </QuantityButton>

        <Typography color={'#000000'} style={{textAlign: 'center', flex: 1}}>
          {quantity}
        </Typography>

        <QuantityButton
          disabled={quantity === 1}
          onPress={() => setQuantity(Math.max(quantity - 1, 1))}
          underlayColor="#EDEBF2">
          <Typography color="#522973">-</Typography>
        </QuantityButton>
      </React.Fragment>
    </QuantityContainer>
  );
};

const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: '#EDEBF2',
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});
