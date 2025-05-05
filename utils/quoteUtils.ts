import quotes from '../assets/quotes.json';

const START_DATE = new Date('2024-01-01');

export function getDailyQuote() {
    const today = new Date();
    const diffDays = Math.floor(
        (today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)
    );

    const index = diffDays % quotes.length;
    console.log(`Index: ${index}, Quote: ${quotes[index].text}`);

    return quotes[index];
}
