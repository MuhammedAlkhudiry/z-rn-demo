import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ListScreen, {IListItem} from './screens/list/ListScreen';
import {ItemScreen} from './screens/item/ItemScreen';

import {ThemeFont} from './components/typography';

export type RootStackParamList = {
  ListScreen: undefined;
  ItemScreen: {
    item: IListItem;
  };
};

export type ScreenNames = keyof RootStackParamList;

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Stack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitle: '',
        headerTitleStyle: {
          fontSize: 16,
          ...(ThemeFont.medium as any),
        },
        contentStyle: {
          backgroundColor: '#eee',
        },
      }}>
      <RootStack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{title: 'Items', headerTitleAlign: 'center'}}
      />
      <RootStack.Screen
        name="ItemScreen"
        component={ItemScreen}
        options={{title: 'Item'}}
      />
    </RootStack.Navigator>
  );
};

export default Stack;
