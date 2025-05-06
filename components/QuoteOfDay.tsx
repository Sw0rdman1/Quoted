import { useQuote } from '@/contexts/QuoteContext';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const QuoteOfDay = () => {
    const { quote } = useQuote();
    const { top } = useSafeAreaInsets();
    const title = useThemeColor({}, 'title');
    const text = useThemeColor({}, 'text');
    const quoteText = `"${quote?.text}"` || '';
    const quoteAuthor = quote?.author || '';


    return (
        <View style={[styles.quoteContainer, { paddingTop: top + 15 }]}>
            <View style={styles.row}>
                <Text style={[styles.title, { color: title }]}>
                    Today's Quote
                </Text>
                <Text style={[styles.date, { color: title }]}>
                    {new Date().toLocaleDateString()}
                </Text>
            </View>
            <Text style={[styles.quoteText, { color: text }]}>
                {quoteText}
            </Text>
            <Text style={[styles.quoteAuthor, { color: text }]}>
                {quoteAuthor}
            </Text>
        </View>
    )
}

export default QuoteOfDay

const styles = StyleSheet.create({
    quoteContainer: {
        flex: 1,
        padding: 24,
        gap: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    quoteText: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    quoteAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
    },
})