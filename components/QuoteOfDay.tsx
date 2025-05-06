import { useQuote } from '@/contexts/QuoteContext';
import { useColors } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const QuoteOfDay = () => {
    const { quote } = useQuote();
    const quoteText = `"${quote?.text}"` || '';
    const quoteAuthor = quote?.author || '';
    const { text, title, background, primary } = useColors();

    return (
        <View style={[styles.quoteContainer]}>
            <View style={styles.row}>
                <Text style={[styles.title, { color: primary }]}>
                    Today's Quote
                </Text>
                <Text style={[styles.date, { color: title }]}>
                    {new Date().toLocaleDateString('en-US', {
                        month: 'long',
                        day: '2-digit',
                        year: 'numeric',
                    })}
                </Text>
            </View>
            <View style={{ borderBottomWidth: 1, marginBottom: 16, borderBottomColor: text, opacity: 0.2 }} />
            {quote &&
                <View style={[styles.quote, { backgroundColor: `${background}95` }]}>
                    <Text style={[styles.quoteText, { color: text }]}>
                        {quoteText}
                    </Text>
                    <Text style={[styles.quoteAuthor, { color: text }]}>
                        {quoteAuthor}
                    </Text>
                </View>
            }
        </View>
    )
}

export default QuoteOfDay

const styles = StyleSheet.create({
    quoteContainer: {
        gap: 8,
        borderRadius: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    quote: {
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderRadius: 16,
        gap: 8,
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