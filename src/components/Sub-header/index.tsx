import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface SubHeaderProps {
  title?: string; // valfri prop
}

const SubHeader = ({ title = 'Sub-header' }: SubHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text> 
    </View>
  );
};

export default SubHeader;
