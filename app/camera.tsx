import { useQuote } from '@/contexts/QuoteContext';
import { useColors } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';
import { CameraType, CameraView, FlashMode, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CameraScreen = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [flashMode, setFlashMode] = useState<FlashMode>('off');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<CameraView>(null);
    const { primary, title, background } = useColors();
    const { top } = useSafeAreaInsets();
    const { quote } = useQuote();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            try {
                const photo = await cameraRef.current.takePictureAsync({
                    quality: 0.8,
                });
                router.push('/edit');
            } catch (error) {
                console.error('Error taking picture:', error);
            }
        }
    };

    const toggleCameraType = () => {
        setFacing(current => (current === 'back' ? 'front' : 'back'));

    };

    const toggleFlashMode = () => {
        setFlashMode(current => {
            if (current === 'off') {
                return 'on';
            } else if (current === 'on') {
                return 'auto';
            } else {
                return 'off';
            }
        });
    };

    return (
        <View style={styles.container}>
            <View style={[styles.quoteContainer, { backgroundColor: `${background}`, top: top }]}>
                <Text style={[styles.quoteText, { color: primary }]}>
                    {quote.text}
                </Text>
            </View>
            <CameraView
                style={styles.camera}
                facing={facing}
                flash={flashMode}
                ref={cameraRef}
            />
            <View style={styles.bottomControls}>
                <TouchableOpacity
                    style={styles.controlButton}
                    onPress={toggleCameraType}
                >
                    <Ionicons name="camera-reverse" size={28} color="white" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.captureButton}
                    onPress={takePicture}
                >
                    <View style={styles.captureButtonInner} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.controlButton}
                    onPress={toggleFlashMode}
                >
                    <Ionicons
                        name={flashMode === 'on' ? 'flash' : flashMode === 'auto' ? 'flash-outline' : 'flash-off'}
                        size={28}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    topControls: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 20,
        marginTop: 40,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    bottomControls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        marginBottom: 40,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    controlButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'rgba(255,255,255,0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureButtonInner: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    quoteContainer: {
        position: 'absolute',
        paddingTop: 20,
        left: 30,
        right: 30,
        padding: 10,
        borderRadius: 10,
        zIndex: 1,
    },
    quoteText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
});

export default CameraScreen;