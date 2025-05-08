import { useQuote } from '@/contexts/QuoteContext';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { height, width } = Dimensions.get('window');

const DragQuote = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const { quote } = useQuote();

    const tap = Gesture.Tap().
        numberOfTaps(2).
        onStart(() => {
            translateX.value = 0;
            translateY.value = 0;
        }).onEnd(() => {
            console.log('Double tap detected');
            runOnJS(openBottomSheet)();
        });


    const openBottomSheet = () => {
        if (bottomSheetRef.current) {
            console.log('BottomSheet ref:', bottomSheetRef.current);
            bottomSheetRef.current.expand();
        } else {
            console.log('BottomSheet ref is NULL');
        }
    };

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
        <>
            <GestureDetector gesture={drag}>
                <Animated.View style={[containerStyle, { top: -height + 120, left: 50 }]}>
                    <GestureDetector gesture={tap}>
                        <View style={[styles.container]}>
                            <Text style={styles.quoteText}>{quote.text}</Text>
                            <Text style={styles.quoteAuthor}>{quote.author}</Text>
                        </View>
                    </GestureDetector>
                </Animated.View>
            </GestureDetector>
            <BottomSheet
                ref={bottomSheetRef}
                enablePanDownToClose={true}
                snapPoints={['50%']}
                enableContentPanningGesture={true}
                index={-1}
            >
                <BottomSheetView >
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheet>
        </>
    );
}

export default DragQuote;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: width - 100,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
        marginTop: 10,
    },
});