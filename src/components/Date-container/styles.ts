// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 140,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  dayNumber: {
    fontSize: 42,
    fontWeight: 'bold',
    marginRight: 12, 
  },
  dayMonthContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayMonth: {
    fontSize: 14,
    color: '#555',
  },
});
