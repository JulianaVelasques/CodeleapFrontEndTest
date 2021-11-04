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
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary100,
  },

  title: {
    fontFamily: theme.fonts.text700,
    fontSize: 17,
    color: theme.colors.primary,
    marginLeft: 10,
  },
});
