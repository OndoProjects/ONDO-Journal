import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

interface ProfileDateProps {
  profileImage: ImageSourcePropType;
  dayNumber: string | number;
  dayName: string;
  month: string;
}

const ProfileDate = ({ profileImage, dayNumber, dayName, month }: ProfileDateProps) => {
  return (
    <View style={styles.container}>
      {/* Profilbild vänster */}
      <Image source={profileImage} style={styles.profileImage} />

      {/* Datum nummer */}
      <Text style={styles.dayNumber}>{dayNumber}</Text>

      {/* Dag och månad staplade */}
      <View style={styles.dayMonthContainer}>
        <Text style={styles.dayMonth}>{dayName}</Text>
        <Text style={styles.dayMonth}>{month}</Text>
      </View>
    </View>
  );
};

export default ProfileDate;