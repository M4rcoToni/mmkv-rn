import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 32,
    gap: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    height: 56,
    padding: 16,
    fontSize: 16
  },
  button: {
    height: 56,
    borderRadius: 8,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
});
