import DragQuote from '@/components/DragQuote';
import { useImageContext } from '@/contexts/ImageContext';
import { useColors } from '@/hooks/useThemeColor';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const EditScreen = () => {
    const { imageUri } = useImageContext();
    const { surface } = useColors();


    return (
        <View style={[styles.container, { backgroundColor: surface }]}>
            <Image
                source={{ uri: imageUri || '' }}
                style={styles.image}
                resizeMode='cover'
            />
            <DragQuote />
        </View>
    );
};

export default EditScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    }
});
