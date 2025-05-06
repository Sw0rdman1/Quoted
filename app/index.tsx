import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HeaderComponent from '@/components/HeaderComponent';
import ParallaxScrollView, { HEADER_HEIGHT } from '@/components/ParallaxScrollView';
import { useThemeColor } from '@/hooks/useThemeColor';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
    const background = useThemeColor({}, 'background');
    const text = useThemeColor({}, 'text');
    const surface = useThemeColor({}, 'surface');
    const router = useRouter();
    const tint = useThemeColor({}, 'primary');

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: background, dark: background }}
            headerComponent={<HeaderComponent />}
        >
            <View style={[styles.contentContainer, { backgroundColor: surface }]}>
                <Ionicons name="ellipse" size={6} color={text} style={{ opacity: 0.3 }} />

                <Text style={[styles.tagline, { color: text }]}>
                    Let today’s quote guide your lens.
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
        </ParallaxScrollView >
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        height: height - HEADER_HEIGHT,
    },
    tagline: {
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
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
        backgroundColor: '#A67C52', // Your warm "tint" color
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
        fontSize: 16,
        fontWeight: '500',
    },
});
