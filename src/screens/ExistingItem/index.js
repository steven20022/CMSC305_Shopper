import React, { useState } from 'react'
import { Text, TextInput, View, Pressable, Alert } from 'react-native'
import styles from './styles'
import { openDatabase } from "react-native-sqlite-storage";
import { useNavigation } from '@react-navigation/native';

// use hook to create database
const shopperDB = openDatabase({name: 'Shopper.db'});
const itemsTableName = 'items';

const ExistingItemScreen = props => {
    
    const post = props.route.params.post
    const navigation = useNavigation()

    const [name, setName] = useState(post.name);
    const [price, setPrice] = useState(post.price);
    const [quantity, setQuantity] = useState(post.quantity);

    const onItemUpdate = () => {
        if (!name){
            alert('Please enter an item name.');
            return;
        }
        if (!price){
            alert('Please enter a price.');
            return;
        }
        if (!quantity){
            alert('Please enter a quantity.');
            return;
        }

        shopperDB.transaction(txn => {
            txn.executeSql(
                `UPDATE ${itemsTableName} SET name = '${name}', price = ${price}, quantity = ${quantity} WHERE id = ${post.id}`,
                [],
                () => {
                    console.log(`${name} updated successfully`)
                },
                error => {
                    console.log('Error on updating item' + error.message);
                }
            );
        });

        alert(name + ' updated!')
        navigation.navigate('Items')
    }
    const onItemDelete = () => {
        Alert.alert("Confirm", "Are you sure you want to delete this Item",
        [
            {
                text: "yes",
                onPress: () => {
                    shopperDB.transaction(txn => {
                        txn.executeSql(
                            `Delete FROM ${itemsTableName} WHERE id = ${post.id}`,
                            [],
                            () => {
                                console.log(`${name} deleted successfully`)
                            },
                            error => {
                                console.log('Error on deleting item' + error.message);
                            }
                        );
                    });
                    alert('Item Deleted!')
                    navigation.navigate('Start Shopping!')
                }
            },
            {
                text: "no"
            }
        ])
    }
    const onAddItem = () => {

    }
    const onViewList = () => {

    }

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TextInput 
                    value={name}
                    onChangeText={value => setName(value)}
                    style={styles.name}
                    clearButtonMode={'while-editing'}
                    placeholder={'Enter Item Name'}
                    placeholderTextColor={'grey'}
                />
                <TextInput 
                    value={price}
                    onChangeText={value => setPrice(value)}
                    style={styles.price}
                    clearButtonMode={'while-editing'}
                    placeholder={'Enter Price'}
                    placeholderTextColor={'grey'}
                />
                <TextInput 
                    value={quantity}
                    onChangeText={value => setQuantity(value)}
                    style={styles.quantity}
                    clearButtonMode={'while-editing'}
                    placeholder={'Enter Quantity'}
                    placeholderTextColor={'grey'}
                />
            </View>
            <View style={styles.bottom}>
                <Pressable 
                    style={styles.button}
                    onPress={onItemDelete}
                    >
                    <Text style={styles.deleteButton}>Delete</Text>
                </Pressable>
            </View>
            <View style={styles.bottom}>
                <Pressable 
                    style={styles.button}
                    onPress={onItemUpdate}
                    >
                    <Text style={styles.updateButton}>Update</Text>
                </Pressable>
            </View>
            <View style={styles.bottom}>
                <Pressable 
                    style={styles.button}
                    onPress={onAddItem}
                    >
                    <Text style={styles.addButton}>Add Item</Text>
                </Pressable>
            </View>
            <View style={styles.bottom}>
                <Pressable 
                    style={styles.viewButton}
                    onPress={onViewList}
                    >
                    <Text style={styles.buttonText}>View Items</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ExistingItemScreen