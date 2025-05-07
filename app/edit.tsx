import { useImageContext } from '@/contexts/ImageContext';
import { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const EditScreen = () => {
    const { imageUri } = useImageContext(); // get image URI from context
    const [image, setImage] = useState(imageUri);

    useEffect(() => {
        if (imageUri) {
        }
    }, [imageUri]);


    return (
        <View style={styles.container}>
            <Image
                source={{ uri: image || '' }}
                style={styles.image}
                resizeMode="contain"
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
        alignItems: 'center',
        width: '100%',
    },
    image: {
        flex: 1,
        width: '100%',
    },
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})