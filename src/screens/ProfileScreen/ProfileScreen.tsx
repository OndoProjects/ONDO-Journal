import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import Nav from '../../../src/components/Nav';
import Header from '../../../src/components/Header';
import ProfileDate from '../../../src/components/Date-container';
import SubHeader from '../../../src/components/Sub-header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ProfileDate
        profileImage={require('../../../assets/icons/profile.png')}
        dayNumber={'26'}
        dayName={'Monday'}
        month={'Aug'}
      />
      <SubHeader />
      <Nav />
    </View>
  );
}
