import AsyncStorage from '@react-native-async-storage/async-storage';
import quotes from '../assets/quotes.json';

const START_DATE = new Date('2024-01-01');
const QUOTE_CACHE_KEY = 'cached_daily_quote';
const QUOTE_TIMESTAMP_KEY = 'quote_timestamp';

export function getDailyQuote() {
    const today = new Date();
    const diffDays = Math.floor(
        (today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)
    );

    const index = diffDays % quotes.length;
    console.log(`Index: ${index}, Quote: ${quotes[index].text}`);

    return quotes[index];
}

const refreshQuote = async () => {
    try {
        const newQuote = getDailyQuote();

        await AsyncStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify(newQuote));
        await AsyncStorage.setItem(QUOTE_TIMESTAMP_KEY, Date.now().toString());

        return newQuote;
    } catch (error) {
        console.error('Error updating quote cache:', error);

        const newQuote = getDailyQuote();
        return newQuote;
    }
};

export const getQuote = async () => {

    try {
        const cachedQuote = await AsyncStorage.getItem(QUOTE_CACHE_KEY);
        const cachedTimestamp = await AsyncStorage.getItem(QUOTE_TIMESTAMP_KEY);

        if (cachedQuote && cachedTimestamp) {
            const today = new Date().toDateString();
            const cachedDate = new Date(parseInt(cachedTimestamp)).toDateString();

            if (today === cachedDate) {
                return JSON.parse(cachedQuote);
            }
        }

        return await refreshQuote();
    } catch (error) {
        console.error('Error accessing quote cache:', error);
        const newQuote = getDailyQuote();
        return newQuote;
    }
};

