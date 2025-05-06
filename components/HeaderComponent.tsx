import { useColors } from '@/hooks/useThemeColor';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconSymbol } from './ui/IconSymbol';

const HeaderComponent = () => {
    const { primary, surface } = useColors();

    return (
        <View style={styles.headerContainer}>
            <Text style={[styles.title, { color: primary, textShadowColor: surface }]}>
                Quoted
            </Text>
            <IconSymbol
                size={340}
                color={surface}
                name="quote.opening"
                style={styles.headerImage}
                weight='bold'
            />
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 62,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 2,
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 1,
    },
    headerImage: {
        top: -55,
        left: -50,
        position: 'absolute',
        zIndex: -1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
    },
})