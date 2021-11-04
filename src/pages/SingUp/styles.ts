import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 300,
    height: 130,
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.secondary90,
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontFamily: theme.fonts.text700,
    fontSize: 17,
  },
  text: {
    fontFamily: theme.fonts.text400,
    fontSize: 12,
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 20,
    marginTop: 2,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.secondary70,
  },
  button: {
    alignItems: 'flex-end',
  },
});
