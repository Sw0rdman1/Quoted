import DragQuote from '@/components/DragQuote';
import EditBottomSheet from '@/components/EditBottomSheet';
import SaveButton from '@/components/SaveButton';
import { useImageContext } from '@/contexts/ImageContext';
import { useColors } from '@/hooks/useThemeColor';
import { useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';

const EditScreen = () => {
    const { imageUri } = useImageContext();
    const { surface, primary } = useColors();
    const imageRef = useRef<View>(null);


    return (
        <View style={[styles.container, { backgroundColor: surface }]}>
            <View ref={imageRef} style={styles.editedImage} collapsable={false}>
                <Image
                    source={{ uri: imageUri || '' }}
                    style={styles.image}
                    resizeMode='cover'
                />
                <DragQuote />
            </View>
            <SaveButton imageRef={imageRef} />
        </View>
    );
};

export default EditScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    editedImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    image: {
        width: '100%',
        flex: 1,
    },
});
