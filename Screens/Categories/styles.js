import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
  },
  flatList: {
    width: '100%',
  },
  filterBox:{
    width: '100%',
    height: 50,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  seeker: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    width: '90%',
    height: 50,
    padding: 10,
    fontSize: 16,
    paddingHorizontal: 15,
  },
  titleContainer:{
    width: '100%',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginHorizontal: 20,
  },
  containerFlat:{
    width: '100%',
    height: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  });
  