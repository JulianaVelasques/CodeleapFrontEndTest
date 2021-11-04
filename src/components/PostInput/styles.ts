import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '95%',
    borderWidth: 1,
    elevation: 2,
    borderColor: theme.colors.secondary90,
    backgroundColor: theme.colors.primary,
  },
  content: {
    padding: 10,
  },
  title: {
    fontFamily: theme.fonts.text700,
    fontSize: 17,
  },
  wrapper: {
    marginTop: 15,
  },

  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
  },
  input: {
    width: '100%',
    fontSize: 10,
    marginTop: 2,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  },
  inputContent: {
    height: 70,
  },
  button: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
});
