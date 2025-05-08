import { useColors } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';

interface Props {
    imageRef: React.RefObject<View | null>;
}

const SaveButton = ({ imageRef }: Props) => {
    const { surface, primary } = useColors();

    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(imageRef, {
                height: 440,
                quality: 1,
            });

            await MediaLibrary.saveToLibraryAsync(localUri);
            if (localUri) {
                alert('Saved!');
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <TouchableOpacity
            style={{
                position: 'absolute',
                bottom: 30,
                right: 20,
                backgroundColor: surface,
                borderRadius: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                height: 50,
                paddingHorizontal: 20,
            }}
            onPress={onSaveImageAsync}
            activeOpacity={0.8}
        >
            <Text style={{ color: primary, fontSize: 20, fontWeight: 'bold' }}>
                Save & Share
            </Text>
            <Ionicons
                name="chevron-forward"
                size={24}
                color={primary}
            />
        </TouchableOpacity>
    )
}

export default SaveButton

const styles = StyleSheet.create({})