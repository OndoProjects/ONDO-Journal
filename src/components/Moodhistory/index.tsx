import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface DayData {
  day: string; // "Mon", "Tue" ...
  index: number; // 1-7
  images: number; // antal bilder för dagen
}

interface WeekBarProps {
  data: DayData[];
  onSelectDay?: (dayIndex: number) => void;
  maxBarHeight?: number;
}

function MoodHistory({ data, onSelectDay, maxBarHeight = 120 }: WeekBarProps) {
  const maxImages = Math.max(...data.map(d => d.images), 1);

  return (
    <View style={styles.container}>
      {data.map(item => {
        const barHeight = (item.images / maxImages) * maxBarHeight;
        return (
          <TouchableOpacity key={item.index} style={styles.dayWrapper} onPress={() => onSelectDay?.(item.index)}>
            <View style={[styles.bar, { height: barHeight }]} />
            <View style={styles.circle}>
              <Text style={styles.circleText}>{item.index}</Text>
            </View>
            <Text style={styles.dayLabel}>{item.day}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MoodHistory;