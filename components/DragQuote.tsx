import { useQuote } from '@/contexts/QuoteContext';
import { useColors } from '@/hooks/useThemeColor';
import { StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';



export default function DragQuote() {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const { quote } = useQuote();
    const { background, title } = useColors();

    const tap = Gesture.Tap().
        numberOfTaps(1).
        onStart(() => {
            console.log('double tap');
        });


    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    });

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                }
            ],
        };
    });

    return (
        <GestureDetector gesture={drag}>
            <Animated.View style={[containerStyle, { top: -350 }]}>
                <GestureDetector gesture={tap}>
                    <View style={[styles.container, { backgroundColor: `${title}90` }]}>
                        <Text style={styles.quoteText}>{quote.text}</Text>
                        <Text style={styles.quoteAuthor}>{quote.author}</Text>
                    </View>
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quoteText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'ForumRegular',
        textAlign: 'center',
    },
    quoteAuthor: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'ForumRegular',
        alignSelf: 'flex-end',
        marginTop: 5,
    },
});