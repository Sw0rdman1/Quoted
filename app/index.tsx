import HeaderComponent from '@/components/HeaderComponent';
import OpenCameraButton from '@/components/OpenCameraButton';
import ParallaxScrollView, { HEADER_HEIGHT } from '@/components/ParallaxScrollView';
import QuoteOfDay from '@/components/QuoteOfDay';
import { useColors } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, View } from 'react-native';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
    const { background, surface, text } = useColors();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: background, dark: background }}
            headerComponent={<HeaderComponent />}
        >
            <View style={[styles.contentContainer, { backgroundColor: surface }]}>
                <QuoteOfDay />
                <Ionicons name="ellipse" size={6} color={text} style={{ opacity: 0.5 }} />
                <OpenCameraButton />
            </View>
        </ParallaxScrollView >
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        padding: 24,
        alignItems: 'center',
        gap: 16,
        height: height - HEADER_HEIGHT,

    },

});
