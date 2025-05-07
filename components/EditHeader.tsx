import { useColors } from '@/hooks/useThemeColor'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const EditHeader = () => {
    const { top } = useSafeAreaInsets()
    const { primary, surface } = useColors()
    return (
        <View style={[styles.container, { paddingTop: top, backgroundColor: surface }]}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.back()}
            >
                <Ionicons
                    name="arrow-back"
                    size={24}
                    color={primary}
                />
            </TouchableOpacity>
            <Text style={[styles.title, { color: primary }]}>
                Edit Image
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log('reset')}
            >
                <Ionicons
                    name="refresh"
                    size={24}
                    color={primary}
                />
            </TouchableOpacity>
        </View>
    )
}

export default EditHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingBottom: 8,
    },
    button: {
        padding: 8,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'ForumRegular',
    },
})