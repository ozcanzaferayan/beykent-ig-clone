import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Text, View } from './Themed';
import PostHeader from './PostHeader';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const PostActions = () => {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <View style={styles.iconGroup}>
                <TouchableOpacity>
                    <Ionicons
                        name="ellipsis-horizontal-sharp"
                        size={24} color={Colors[colorScheme].text} />
                </TouchableOpacity>
                <Ionicons
                    name="ellipsis-horizontal-sharp"
                    size={24} color={Colors[colorScheme].text} />
                <Ionicons
                    name="ellipsis-horizontal-sharp"
                    size={24} color={Colors[colorScheme].text} />
            </View>
            <View style={styles.iconGroup}>
                <Ionicons
                    name="ellipsis-horizontal-sharp"
                    size={24} color={Colors[colorScheme].text} />
            </View>
        </View>
    )
};
export default PostActions

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    iconGroup: {
        flexDirection: 'row'
    }
})
