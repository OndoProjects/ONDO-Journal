import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootNavigator';

type StartScreenProp = StackNavigationProp<RootStackParamList, 'Start'>;

type Props = {
  navigation: StartScreenProp;
};

export default function StartScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image 
          source={require('../../../assets/images/start-logo.jpg')} 
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}
