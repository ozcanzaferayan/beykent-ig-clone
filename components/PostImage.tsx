import React from 'react'
import { StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Text, View } from './Themed';
import PostHeader from './PostHeader';

const PostImage = () => {
    return (
        <TouchableOpacity>
     <Image source={{ uri: 'https://picsum.photos/id/1076/600/400'}} 
     style={{ width: '100%', height: 400}}/>
        </TouchableOpacity>
    )
}

export default PostImage

const styles = StyleSheet.create({})
