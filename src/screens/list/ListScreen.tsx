import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';

export interface IListItem {
  id: number;
  name: string;
  description: string;
  price: string;
  salePrice: string | undefined;
  brand: string;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <FlatList
        data={ListData}
        renderItem={({item}) => <ListItem item={item} />}
        contentContainerStyle={{
          paddingHorizontal: 16,
          // in real project, I would be using specific colors, but for the sake of simplicity, I'm using this
          backgroundColor: '#f9f9f9',
        }}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
