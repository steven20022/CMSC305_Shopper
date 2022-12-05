/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import Router from './src/navigation/Router';
// bcrypt is a secure way to save passwords in a database
// its algorithms encrypt a password into a long string of
// characters, called a hash, the-at is almost impossible to
// decrypt
// it makes a database more secure - if someone hacks into
// it, he won't ba able to steal thre user's passwords
import bcrypt from 'react-native-bcrypt';
import { openDatabase } from "react-native-sqlite-storage";

const db = require('./src/components/Handlers/database.js');

const shopperDB = openDatabase({name: 'Shopper.db'});
const usersTableName = 'users';

// create a salt that will be used by bcrypt when creating the hash
// a salt is a random value that will be appended to the password
// before it's encrypted to make it more secure
let salt = bcrypt.genSaltSync(10);

const App: () => Node = () => {
  try {
    db.createListsTable();
  } catch (error) {
    console.log('Failed to create lists table ' + error);
  }
  try {
    db.createItemsTable();
  } catch (error) {
    console.log('Failed to create items table ' + error);
  }
  try {
    db.createListItemsTable();
  } catch (error) {
    console.log('Failed to create list items table ' + error);
  }
  try {
    db.createUsersTable();
  } catch (error) {
    console.log('Failed to create users table ' + error);
  }
  try {
    // create the hash
    let hash = bcrypt.hashSync('Password123', salt);
    // db.addUser('Users321', hash);
  } catch (error) {
    console.log('Failed to create user ' + error);
  }
  return <Router />;
};

export default App;
