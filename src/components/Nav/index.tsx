import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';


const Nav = () => {
return (
<View style={styles.container}>
<TouchableOpacity>
<Image source={require('../../../assets/icons/home.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../../../assets/icons/add.png')} style={styles.icon} />
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../../../assets/icons/settings.png')} style={styles.icon} />
</TouchableOpacity>
</View>
);
};


export default Nav;