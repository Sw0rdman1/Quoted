import { StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useQuote } from '@/contexts/QuoteContext';

const BACKGROUND_COLOR = '#FAD59A';
const TEXT_COLOR = '#A86523';

export default function HomeScreen() {
    const { quote } = useQuote();
    const quoteText = quote?.text || 'Loading...';
    const quoteAuthor = quote?.author || 'Loading...';


    return (
        <ParallaxScrollView
            headerBackgroundColor={{
                light: BACKGROUND_COLOR,
                dark: '#1F1F1F',
            }}
            headerImage={
                <View style={styles.quoteContainer}>
                    <Text style={styles.quoteText}>
                        {`"${quoteText}"`}
                    </Text>
                    <Text style={styles.quoteAuthor}>
                        -{quoteAuthor}
                    </Text>
                </View>
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome!</ThemedText>
                <HelloWave />
            </ThemedView>

        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
        height: 500,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    quoteContainer: {
        justifyContent: 'center',
        flex: 1,
        padding: 32,
        gap: 16,
    },
    quoteText: {
        fontSize: 22,
        fontStyle: 'italic',
        color: TEXT_COLOR,
        fontWeight: 'bold',
    },
    quoteAuthor: {
        fontSize: 18,
        fontWeight: 'bold',
        color: TEXT_COLOR,
        textAlign: 'right',
    },
});