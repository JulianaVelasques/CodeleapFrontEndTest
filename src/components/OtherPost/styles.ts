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
    height: 50,
    backgroundColor: theme.colors.secondary100,
    paddingRight: 10,
  },

  title: {
    fontFamily: theme.fonts.text700,
    fontSize: 17,
    marginBottom: 'auto',
    marginTop: 'auto',
    color: theme.colors.primary,
    marginLeft: 10,
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
});