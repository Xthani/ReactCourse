import React from 'react';
import AvaInformation from './ava-information';
import PostsContainer from './posts/postsContainer';
import Wallpaper from './wallpaper';

const Profile = ({ store }) => {
    // debugger
    return <div className="profile">
        <Wallpaper />
        <AvaInformation />
        <PostsContainer
            store={store}
        // publishedData={props.state.publishedData}
        // newPostText={props.state.newPostText}
        // // dispatch с функциями
        // dispatch={props.dispatch}
        />
    </div>
}

export default Profile;