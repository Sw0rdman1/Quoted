import { StyleSheet, Text, View } from 'react-native';

import HomeQuote from '@/components/HomeQuote';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useThemeColor } from '@/hooks/useThemeColor';



export default function HomeScreen() {
    const background = useThemeColor({}, 'background');
    const text = useThemeColor({}, 'text');
    const surface = useThemeColor({}, 'surface');

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: background, dark: background }}
            headerImage={<HomeQuote />}
        >
            <View style={{ ...styles.contentContainer, backgroundColor: surface }}>
                <Text style={{ color: text, fontSize: 24, fontWeight: 'bold' }}>
                    Welcome to the Home Screen
                </Text>
            </View>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'row',
        gap: 8,
        padding: 16,
        flex: 1,
        height: 500,
    },
});