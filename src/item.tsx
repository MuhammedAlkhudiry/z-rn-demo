import React, {useState} from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import styled from '@emotion/native';

import {faker} from '@faker-js/faker';
import {getImage} from './utils/image';
import {Container} from './components/container';
import {Typography} from './components/typography';
import {DetailsLine} from './components/details-line';
import {DetailsTitle} from './components/details-title';
import {Cart} from './components/cart';
import useAppNavigation from './hooks/useAppNavigation';
import useAppRoute from './hooks/useAppRoute';
import ItemPrice from './components/ItemPrice';

const SPEC_1 = faker.color.human();
const SPEC_2 = faker.vehicle.vin();
const SPEC_3 = faker.commerce.product();
const SPEC_4 = faker.datatype.float({min: 0.1, max: 10, precision: 0.1});

export const Item = () => {
  const nav = useAppNavigation();
  const {width} = useWindowDimensions();
  const {
    params: {item},
  } = useAppRoute<'ItemScreen'>();
  const [quantity, setQuantity] = useState<number>(5);

  nav.setOptions({
    title: item.name,
  });

  return (
    <>
      <ScrollView contentContainerStyle={{backgroundColor: '#f9f9f9'}}>
        <Container>
          <ItemImage
            source={{uri: getImage(900, item.id)}}
            size={width * 0.9}
          />
        </Container>

        <Container>
          <Typography color={'#000000'} weight="medium">
            {item.name}
          </Typography>
          <ItemPrice item={item} />
        </Container>

        <Container>
          <Typography color={'#000000'}>{item.description}</Typography>
        </Container>

        <Container>
          <DetailsTitle>Details</DetailsTitle>
          <DetailsLine label="Brand">{item.brand}</DetailsLine>
          <DetailsLine label="Color">{SPEC_1}</DetailsLine>
          <DetailsLine label="SKU">{SPEC_2}</DetailsLine>

          <Typography weight="medium" />
          <Typography color={'#000000'} weight="medium">
            Specifications
          </Typography>
          <DetailsLine label="Type">{SPEC_3}</DetailsLine>
          <DetailsLine label="Weight">{`${SPEC_4} kg`}</DetailsLine>
        </Container>
      </ScrollView>

      <Cart quantity={quantity} update={setQuantity} />
    </>
  );
};

const ItemImage = styled.Image<{size: number}>(props => ({
  width: props.size,
  height: props.size,
  marginTop: 16,
  paddingHorizontal: '5%',
  borderRadius: 8,
}));
