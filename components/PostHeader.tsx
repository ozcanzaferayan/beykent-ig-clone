import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { Text, View } from './Themed';

const PostHeader = () => {
    return (
        <View style={styles.container}>
        <ProfileImage />
        <ProfileNameAndLocation />
        <ProfileActions />
        </View>
    );
}

const ProfileImage = () => (
    <TouchableOpacity onPress={() => alert("Pressed")}>
    <Image 
    source={{ uri: 'https://picsum.photos/id/598/600/400'}}
    style={styles.image}/>
    </TouchableOpacity>
)

const ProfileNameAndLocation = () => (
    <View style={styles.profileNameAndLocation}>
        <Text style={styles.username}>500px</Text>
        <Text style={styles.location}>İstanbul</Text>
    </View>
)

const ProfileActions = () => {

  const colorScheme = useColorScheme();
    
    return (
    <TouchableOpacity onPress={() => alert("Pressed")}>
    <Ionicons 
        name="ellipsis-horizontal-sharp" 
        size={24} color={Colors[colorScheme].text} />
    </TouchableOpacity>
    )
}

export default PostHeader

const styles = StyleSheet.create({
    location : {
        opacity: .5
    },
    username : {
        fontWeight: 'bold'
    },
    profileNameAndLocation: {
        paddingLeft: 8,
        flex: 1
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: 16,
    }
})
