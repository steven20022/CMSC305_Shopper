import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  viewButton: {
    backgroundColor: 'black',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
  },
  addButton: {
    backgroundColor: 'black',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 90,
  },
  updateButton: {
    backgroundColor: 'black',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 160,
  },
  deleteButton: {
    backgroundColor: 'black',
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    right: 230,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  bottomContainer: {
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 30,
  },
  topContainer: {
    top: 10,
    padding: 15,
    width: '100%',
  },
  name: {
    fontSize: 16,
    marginBottom: 15,
    borderBottomWidth: 1.0,
    color: 'black',
    borderColor: 'lightgrey',
  },
  store: {
    fontSize: 16,
    marginBottom: 15,
    borderBottomWidth: 1.0,
    color: 'black',
    borderColor: 'lightgrey',
  },
  date: {
    fontSize: 16,
    borderBottomWidth: 1.0,
    color: 'black',
    borderColor: 'lightgrey',
    marginBottom: 10,
  },
});

export default styles;
