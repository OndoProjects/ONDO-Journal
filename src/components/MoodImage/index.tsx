import React, { useState } from "react";
import { Image, TouchableOpacity, FlatList, Modal, View, StyleSheet } from "react-native";
import SubHeader from '../../../src/components/Sub-header';
import PText from "../PText";
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
    const [selectedImage, setSelectedImage] = useState<string | number | null>(null);

    const randomAspectRatio = () => Math.random() * 0.5 + 0.75;

    return (
        <>
            <SubHeader title="What Do You Want To See?" />
            <PText color="dark" size="lg" align="center" padding="lg">
                Recent All Memories
            </PText>
            <FlatList
                data={dayImages}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ flex: 1, padding: 4 }}
                        onPress={() => setSelectedImage(item.uri)}
                    >
                        <Image
                            source={typeof item.uri === "number" ? item.uri : { uri: item.uri }}
                            style={{ width: '100%', aspectRatio: randomAspectRatio(), borderRadius: 12 }}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                )}
            />

            {selectedImage !== null && (
                <Modal visible={true} transparent onRequestClose={() => setSelectedImage(null)}>
                    <View style={styles.modalBackground}>
                        {/* Bakgrund för att stänga modalen */}
                        <TouchableOpacity
                            style={StyleSheet.absoluteFill}
                            onPress={() => setSelectedImage(null)}
                        />
                        {/* Själva bilden */}
                        <Image
                            source={typeof selectedImage === "number" ? selectedImage : { uri: selectedImage }}
                            style={styles.modalImage}
                            resizeMode="contain"
                        />
                    </View>
                </Modal>
            )}
        </>
    );
}
