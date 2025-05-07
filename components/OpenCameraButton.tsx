import { useImageContext } from '@/contexts/ImageContext';
import { useColors } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OpenCameraButton = () => {
    const router = useRouter();
    const { text, title, primary } = useColors();
    const { setImageUri } = useImageContext();
    const [loading, setLoading] = useState(false);

    const openCameraHandler = async () => {
        try {
            setLoading(true);
            const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

            if (!permissionResult.granted) {
                Alert.alert(
                    'Permission Denied',
                    'Camera access is required to take photos.',
                    [{ text: 'OK' }]
                );
                setLoading(false);
                return;
            }

            const result = await ImagePicker.launchCameraAsync({
                quality: 1,
                allowsEditing: true,
                aspect: [3, 3],
            });

            if (!result.canceled) {
                setImageUri(result.assets[0].uri);
                router.push('/edit');
            }
        } catch (error) {
            Alert.alert(
                'Camera Error',
                'An unexpected error occurred while accessing the camera. Please try again.',
                [{ text: 'OK' }]
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.tagline, { color: primary }]}>
                Let today’s quote guide your lens.
            </Text>

            <Text style={[styles.explanation, { color: title }]}>
                Take a photo that reflects or enhances what this quote means to you.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={openCameraHandler}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <>
                        <Ionicons name="camera-outline" size={24} color="#fff" />
                        <Text style={styles.buttonText}>Open Camera</Text>
                    </>
                )}
            </TouchableOpacity>

            <Text style={[styles.subtext, { color: text }]}>
                Every image tells a story. Let yours begin.
            </Text>
        </View>
    );
};

export default OpenCameraButton;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
    },
    tagline: {
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    explanation: {
        fontSize: 16,
        textAlign: 'center',
        fontStyle: 'italic',
        maxWidth: 300,
        opacity: 0.8,
    },
    subtext: {
        fontSize: 14,
        textAlign: 'center',
        fontStyle: 'italic',
        opacity: 0.7,
        maxWidth: 300,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#A67C52',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 32,
        alignItems: 'center',
        gap: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
});
""
