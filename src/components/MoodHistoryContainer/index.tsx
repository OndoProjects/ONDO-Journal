import React, { useState, useMemo } from "react";
import { View } from "react-native";
import MoodHistory from "../Moodhistory";
import MoodImages from "../MoodImage";
import styles from "./styles";


interface ImageData {
id: string;
uri: string;
dayIndex: number; // 1-7
}


interface DayData {
day: string;
index: number;
images: number;
}


export default function MoodHistoryContainer() {
const [selectedDay, setSelectedDay] = useState(1);


const [images, setImages] = useState<ImageData[]>([
  { id: '1', uri: require('../../../assets/images/image.png'), dayIndex: 1 },
  { id: '2', uri: require('../../../assets/images/image2.png'), dayIndex: 1 },
  { id: '3', uri: require('../../../assets/images/image3.png'), dayIndex: 3 },
]);


const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];


const dayData: DayData[] = useMemo(() => {
return weekDays.map((day, i) => ({
day,
index: i + 1,
images: images.filter(img => img.dayIndex === i + 1).length,
}));
}, [images]);


return (
<View style={styles.container}>
<MoodHistory
data={dayData}
onSelectDay={(dayIndex) => setSelectedDay(dayIndex)}
/>


<MoodImages images={images} selectedDay={selectedDay} />
</View>
);
}