import { useColors } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OpenCameraButton = () => {
    const router = useRouter();
    const { text, title, primary } = useColors();

    return (
        <View style={styles.container}>
            <Text style={[styles.tagline, { color: primary }]}>
                Let today’s quote guide your lens.
            </Text>

            <Text style={[styles.explaination, { color: title }]}>
                Take a photo that reflects or enhances what this quote means to you.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('/camera')}
            >
                <Ionicons name="camera-outline" size={24} color="#fff" />
                <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>

            <Text style={[styles.subtext, { color: text }]}>
                Every image tells a story. Let yours begin.
            </Text>

        </View>
    )
}

export default OpenCameraButton

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
    explaination: {
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
})