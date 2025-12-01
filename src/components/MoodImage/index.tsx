import React from "react";
import { Image, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";


interface ImageData {
id: string;
uri: string | number;
dayIndex: number;
}


interface MoodImagesProps {
images: ImageData[];
selectedDay: number;
}


export default function MoodImages({ images, selectedDay }: MoodImagesProps) {
const dayImages = images.filter(img => img.dayIndex === selectedDay);


return (
<FlatList
data={dayImages}
keyExtractor={item => item.id}
numColumns={3}
contentContainerStyle={styles.container}
renderItem={({ item }) => (
<TouchableOpacity style={styles.imageWrapper}>
<Image source={typeof item.uri === 'number' ? item.uri : { uri: item.uri }} style={styles.image} />
</TouchableOpacity>
)}
/>
);
}