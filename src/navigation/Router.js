import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import TabNavigator from './TabNavigator';
import AddItem from '../screens/AddItem';
import AddList from '../screens/AddList';
import ExistingListScreen from '../screens/ExistingList'
import ExistingItemScreen from '../screens/ExistingItem';
import AddListItem from '../screens/AddListItem';
import ViewListItems from '../screens/ViewListItems';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name={'Start Shopping!'} component={TabNavigator}/>
        <Stack.Screen name={'Add Item'} component={AddItem}/>
        <Stack.Screen name={'Add List'} component={AddList}/>
        <Stack.Screen name={'Add List Item'} component={AddListItem}/>
        <Stack.Screen name={'Existing List'} component={ExistingListScreen}/>
        <Stack.Screen name={'Existing Item'} component={ExistingItemScreen}/>
        <Stack.Screen name={'View List Item'} component={ViewListItems}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
