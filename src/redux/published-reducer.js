const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    publishedData:
        [
            { id: 1, avatar: "https://goo.su/bwMN", message: "Hello World!", likesCounts: '❤ 78' }
        ],
    newPostText: ''
};

const publishedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2,
                avatar: "https://goo.su/aJcg",
                message: state.newPostText,
                likesCounts: '❤ 0'
            }
            // добавить в начало массива новый объект newPost
            state.publishedData.unshift(newPost);
            state.newPostText = '';
            return state;
        // перерисовать страницу
        case UPDATE_NEW_POST_TEXT:
            // обновляет объект массива в state на newText - аргумент функции
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default publishedReducer;
