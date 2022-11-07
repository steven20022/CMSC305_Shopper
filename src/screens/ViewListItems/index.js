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
const listitemsTableName = 'list_items';

const ViewListItems = props => {

  const post = props.route.params.post;

  const navigation = useNavigation();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      // declare an empty array to store the results from the SELECT
      let results = []
      // declare a transaction that will execute the SELECT
      shopperDB.transaction(txn => {
        // execute SELECT
        txn.executeSql(
          `SELECT items.id, name, price, quantity FROM ${itemsTableName}, 
          ${listitemsTableName} WHERE items.id = item AND list = ${post.id}`,
          [],
          // callback function to handle the results from the
          // SELECT s
          (_, res) => {
            // get number of rows of data selected
            let len = res.rows.length;
            console.log('Length of items ' + len);
            // if more than one row was returned
            if (len > 0) {
              // loop through the rows
              for (let i = 0; i < len; i++) {
                // push a row of data at a time onto the
                // results array
                let item = res.rows.item(i)
                results.push({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity
                })
              }
              // assign results array to lists state variable
              setItems(results);
              /*  [
                    {
                      id: 1, 
                      name: "Milk", 
                      price: 2, 
                      quantity: 1, 
                      list_id: 1
                    },
                    {
                      id: 1, 
                      name: "Eggs", 
                      price: 3.99, 
                      quantity: 1, 
                      list_id: 1
                    }
                  ]*/
            } else {
              // if no rows of data were returned
              // set lists state variable to an empty array
              setItems([])
            }
          },
          error => {
            console.log('Error getting items ' + error.message);
          },
        )
      });
    });
    return listener;
  });

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data={items}
          renderItem={({item}) => <Item post={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default ViewListItems;