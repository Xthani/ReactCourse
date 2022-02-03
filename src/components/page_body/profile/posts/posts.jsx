import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../../redux/published-reducer';
import './posts.css';
import Text from './text/text';

const Posts = ({ publishedData, updateNewPostTextActionCreater, newPostText, addPostItem }) => {
    // отрисовка поста jsx
    let publishedElement = publishedData.map((publ, i) => {
        return (
            <Text key={i} avatar={publ.avatar} message={publ.message} likesCounts={publ.likesCounts} />
        )
    });

    // добавление поста
    let newPostElement = React.createRef();
    let addPost = () => {
        addPostItem();
    }

    // получение значение из state (flux)
    let onPostChange = () => {
        // в объявленную переменную text кладем
        // value из textarea и указываем
        // в качестве аргумента updatenewPostText
        let text = newPostElement.current.value;
        updateNewPostTextActionCreater(text);
        // let action = updateNewPostTextActionCreater(text);
        // dispatch(action);
    }

    return (
        <div className="posts">
            <h3>Мои посты</h3>
            <div className="newPostWrapper">
                <textarea
                    placeholder='text'
                    ref={newPostElement}
                    value={newPostText}
                    onChange={onPostChange}
                />

                <button onClick={addPost} >✓</button>
            </div>
            {/* отрисовка вызывается в качестве функции */}
            <div>
                {publishedElement}
            </div>
        </div>
    )
}

export default Posts;