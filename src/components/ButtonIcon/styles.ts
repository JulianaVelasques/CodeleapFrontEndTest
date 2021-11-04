import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 20,
    borderRadius: 4,
    elevation: 2,
    borderColor: 'red',
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: theme.fonts.text700,
    fontSize: 12,
  },
  border: {},
});
