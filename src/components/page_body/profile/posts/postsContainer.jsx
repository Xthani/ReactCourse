import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../../redux/published-reducer';
import Posts from './posts';

const PostsContainer = ({ store }) => {
    let state = store.state;
    let addPostItem = () => {
        store.dispatch(addPostActionCreater());
    }

    // получение значение из state (flux)
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        store.dispatch(action);
    }
    return <Posts
        updateNewPostTextActionCreater={onPostChange}
        addPostItem={addPostItem}
        posts={state.published.posts}
        newPostText={state.published.newPostText}
        publishedData={state.published.publishedData}
    />
}
export default PostsContainer;