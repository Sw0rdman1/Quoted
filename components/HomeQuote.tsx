import { useQuote } from '@/contexts/QuoteContext';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const HomeQuote = () => {
    const { quote } = useQuote();
    const title = useThemeColor({}, 'title');
    const text = useThemeColor({}, 'text');
    const quoteText = `"${quote?.text}"` || 'Loading...';
    const quoteAuthor = quote?.author || 'Loading...';


    return (
        <View style={styles.quoteContainer}>
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

export default HomeQuote

const styles = StyleSheet.create({
    quoteContainer: {
        justifyContent: 'center',
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
        fontSize: 14,
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