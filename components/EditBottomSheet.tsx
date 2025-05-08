import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const EditBottomSheet = ({ bottomSheetRef }: { bottomSheetRef: React.RefObject<BottomSheet | null> }) => {

    return (
        <BottomSheet
            ref={bottomSheetRef}
            enablePanDownToClose={true}
            snapPoints={['50%']}
            enableContentPanningGesture={true}
            index={-1}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        padding: 36,
        alignItems: 'center',
    },
});

export default EditBottomSheet;