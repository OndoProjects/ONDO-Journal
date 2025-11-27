import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './src/components/Nav';
import Header from './src/components/Header';
import ProfileDate from './src/components/Date-container';
import SubHeader from './src/components/Sub-header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileDate
        profileImage={require('./assets/icons/profile.png')}
        dayNumber={'26'}
        dayName={'Monday'}
        month={'Aug'}
      />
      <SubHeader />
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bababa',
    alignItems: 'center',
  }
});
