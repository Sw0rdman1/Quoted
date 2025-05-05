import { getDailyQuote } from '@/utils/quoteUtils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface Quote {
    id: number;
    text: string;
    author: string;
}

interface QuoteContextType {
    quote: Quote;
}

const QUOTE_CACHE_KEY = 'cached_daily_quote';
const QUOTE_TIMESTAMP_KEY = 'quote_timestamp';

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
    const [quote, setQuote] = useState<Quote | null>(null);


    const refreshQuote = async () => {
        try {
            const newQuote = getDailyQuote();

            setQuote(newQuote);
            await AsyncStorage.setItem(QUOTE_CACHE_KEY, JSON.stringify(newQuote));
            await AsyncStorage.setItem(QUOTE_TIMESTAMP_KEY, Date.now().toString());
        } catch (error) {
            console.error('Error updating quote cache:', error);
            // Still update state even if caching fails
            const newQuote = getDailyQuote();
            setQuote(newQuote);
        }
    };

    const getQuote = async () => {

        try {
            const cachedQuote = await AsyncStorage.getItem(QUOTE_CACHE_KEY);
            const cachedTimestamp = await AsyncStorage.getItem(QUOTE_TIMESTAMP_KEY);

            if (cachedQuote && cachedTimestamp) {
                const today = new Date().toDateString();
                const cachedDate = new Date(parseInt(cachedTimestamp)).toDateString();

                if (today === cachedDate) {
                    setQuote(JSON.parse(cachedQuote));
                    return;
                }
            }

            await refreshQuote();
        } catch (error) {
            console.error('Error accessing quote cache:', error);
            const newQuote = getDailyQuote();
            setQuote(newQuote);
        }
    };


    useEffect(() => {
        getQuote();
    }, []);

    return (
        <QuoteContext.Provider value={{ quote: quote! }}>
            {children}
        </QuoteContext.Provider>
    );
};

// Custom hook for accessing the quote
export const useQuote = () => {
    const context = useContext(QuoteContext);
    if (!context) {
        throw new Error('useQuote must be used within a QuoteProvider');
    }
    return context;
};