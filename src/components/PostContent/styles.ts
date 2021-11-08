import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginTop: 15,
    borderWidth: 1,
    elevation: 2,
    borderColor: theme.colors.secondary90,
    backgroundColor: theme.colors.primary,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.secondary100,
    paddingRight: 10,
  },
  title: {
    fontFamily: theme.fonts.text700,
    fontSize: 17,
    width: '100%',
    marginBottom: 'auto',
    marginTop: 'auto',
    color: theme.colors.primary,
    marginLeft: 10,
    marginRight: 60,
  },
  icon: {
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  wrapper: {
    padding: 10,
  },
  wrapperData: {
    flexDirection: 'row',
  },
  name: {
    width: '50%',
    alignSelf: 'center',
    fontFamily: theme.fonts.text700,
    fontSize: 10,
    color: theme.colors.secondary70,
  },
  time: {
    width: '50%',
    textAlign: 'right',
    alignSelf: 'center',
    fontFamily: theme.fonts.text400,
    fontSize: 10,
    color: theme.colors.secondary70,
  },
  content: {
    fontFamily: theme.fonts.text400,
    fontSize: 10,
    color: theme.colors.secondary100,
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: 90,
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
  },
  modalText: {
    fontFamily: theme.fonts.text400,
    fontSize: 17,
    margin: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginRight: 5,
  },

  button: {
    width: 50,
    height: 20,
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 1,
  },
});
