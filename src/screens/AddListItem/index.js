import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { openDatabase } from "react-native-sqlite-storage";
import Item from '../../components/Item';
import { FlatList } from 'react-native-gesture-handler';

// use hook to create database
const shopperDB = openDatabase({name: 'Shopper.db'});
const itemsTableName = 'items';

const AddListItem = props => {

  const navigation = useNavigation();

  const [items, setItems] = useState([]);

  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default AddListItem;