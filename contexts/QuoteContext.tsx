// contexts/QuoteContext.tsx
import { getDailyQuote } from '@/utils/quoteUtils';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface Quote {
    id: number;
    text: string;
    author: string;
}

interface QuoteContextType {
    quote: Quote;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);


export const QuoteProvider = ({ children }: { children: ReactNode }) => {
    const [quote, setQuote] = useState<Quote | null>(null);

    useEffect(() => {
        setQuote(getDailyQuote());
    }, []);

    return (
        <QuoteContext.Provider value={{ quote: quote! }
        }>
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
