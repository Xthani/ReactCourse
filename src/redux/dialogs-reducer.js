const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MECCAGE = 'UPDATE-NEW-MECCAGE';

let initialState = {
    contactsData:
        [
            { id: 1, name: "Name 1" },
            { id: 2, name: "Name 2" },
            { id: 3, name: "Name 3" },
            { id: 4, name: "Name 4" },
            { id: 5, name: "Name 5" }
        ],
    dialogData:
        [
            { id: 1, message: "Это сообщение написал Name 1" },
            { id: 2, message: "Привет я Name 2" },
            { id: 3, message: "Hello! My name is Name 3" },
            { id: 4, message: "Новое сообщение от Name 4" },
            { id: 5, message: "Name 5 отправил сообщение" }
        ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText
            }
            state.dialogData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MECCAGE:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageCreater = () => ({ type: ADD_MESSAGE });
export const updateNewMessageCreater = (text) => ({ type: UPDATE_NEW_MECCAGE, newMessage: text });
export default dialogsReducer;
