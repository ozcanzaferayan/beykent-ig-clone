import React from 'react'
import { StyleSheet} from 'react-native'
import { Text, View } from '../components/Themed';
import PostActions from './PostActions';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const Post = () => {
    return (
        <>
            
        <PostHeader />
      <PostImage />
      <PostActions />
    {/* 
      
     <PostLikes />
     <PostDescription />
     <PostComments />
     <PostAddComment />
     <PostTime />  
     */}
        </>
    )
}

export default Post

const styles = StyleSheet.create({})
