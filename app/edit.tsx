import { useImageContext } from '@/contexts/ImageContext';
import { useColors } from '@/hooks/useThemeColor';
import { Image, StyleSheet, Text, View } from 'react-native';


const EditScreen = () => {
    const { imageUri } = useImageContext();
    const { surface } = useColors()

    return (
        <View style={[styles.container, { backgroundColor: surface }]}>
            <Image
                source={{ uri: imageUri || '' }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.content}>
                {/* Add your editing tools here */}
                <Text>Edit your image here</Text>
            </View>
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})