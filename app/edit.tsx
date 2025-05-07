import DragQuote from '@/components/DragQuote';
import { useImageContext } from '@/contexts/ImageContext';
import { useColors } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EditScreen = () => {
    const { imageUri } = useImageContext();
    const { surface, primary } = useColors();


    return (
        <View style={[styles.container, { backgroundColor: surface }]}>
            <Image
                source={{ uri: imageUri || '' }}
                style={styles.image}
                resizeMode='cover'
            />
            <DragQuote />
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 30,
                    right: 20,
                    backgroundColor: surface,
                    borderRadius: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                    height: 50,
                    paddingHorizontal: 20,
                }}
                onPress={() => console.log('Save Image')}
                activeOpacity={0.8}
            >
                <Text style={{ color: primary, fontSize: 20, fontWeight: 'bold' }}>
                    Save & Share
                </Text>
                <Ionicons
                    name="chevron-forward"
                    size={24}
                    color={primary}
                />
            </TouchableOpacity>
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
        flex: 1,
    },
});
