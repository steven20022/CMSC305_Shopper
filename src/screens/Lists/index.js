import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import List from '../../components/List';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ListsScreen = props => {

  const navigation = useNavigation();

  const [lists, setLists] = useState(
    [
      {
        id: 1,
        name: 'Grocery List',
        store: 'Redners',
        date: '2022-09-14',
      },
      {
        id: 2,
        name: 'Back To School List',
        store: 'Staples',
        date: '2022-09-15',
      },
    ]
  );

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      // declare an empty array to store the results from the SELECT
      let results = []
      // declare a transaction that will execute the SELECT
      shopperDB.transaction(txn => {
        // execute SELECT
        txn.executeSql(
          `SELECT * FROM ${listsTableNames}`,
          [],
          // callback function to handle the results from the
          // SELECT s
          (_, res) => {
            // get number of rows of data selected
            let len = res.rows.length;
            console.log('Length of lists ' + len);
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
                  store: item.store,
                  date: item.date
                })
              }
              // assign results array to lists state variable
              setLists(results);
            } else {
              // if no rows of data were returned
              // set lists state variable to an empty array
              setLists([])
            }
          },
          error => {
            console.log('Error getting listst ' + error.message);
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
          data={lists}
          renderItem={({item}) => <List post={item} />}
        />
      </View>
        <View style={styles.bottom}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Add List')}
                >
                <Text style={styles.buttonText}>Add List</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default ListsScreen;