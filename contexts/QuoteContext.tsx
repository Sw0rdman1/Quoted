import { getQuote } from '@/utils/quoteUtils';
import BottomSheet from '@gorhom/bottom-sheet';
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface Quote {
    id: number;
    text: string;
    author: string;
}

interface QuoteContextType {
    quote: Quote;
    bottomSheetRef: React.RefObject<BottomSheet | null>;
}



const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const QuoteProvider = ({ children }: { children: ReactNode }) => {
    const [quote, setQuote] = useState<Quote | null>(null);
    const bottomSheetRef = useRef<BottomSheet | null>(null);


    useEffect(() => {
        const fetchQuote = async () => {
            const todayQyote = await getQuote();
            setQuote(todayQyote);
        };

        fetchQuote();
    }, []);

    return (
        <QuoteContext.Provider value={{ quote: quote!, bottomSheetRef }}>
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