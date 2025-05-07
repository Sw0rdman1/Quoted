import { useQuote } from '@/contexts/QuoteContext';
import { useColors } from '@/hooks/useThemeColor';
import { formatDate } from '@/utils/date';
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
                    {formatDate(new Date())}
                </Text>
            </View>
            <View style={{ borderBottomWidth: 1, marginBottom: 16, borderBottomColor: text, opacity: 0.2 }} />
            {quote &&
                <View style={[styles.quote, { backgroundColor: `${background}` }]}>
                    <Text style={[styles.quoteText, { color: primary }]}>
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
        fontSize: 22,
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: '300',
        lineHeight: 28,
        alignSelf: 'center',
        textTransform: 'capitalize',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
        fontFamily: 'ForumRegular',
    },
    quoteAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        fontStyle: 'italic',
        textTransform: 'capitalize',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
        fontFamily: 'ForumRegular',
    },
})