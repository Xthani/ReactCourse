// import dialogsReducer from "./dialogs-reducer";
// import publishedReducer from "./published-reducer";

// let store = {
//     _state: {
//         dialogs: {
//             contactsData:
//                 [
//                     { id: 1, name: "Name 1" },
//                     { id: 2, name: "Name 2" },
//                     { id: 3, name: "Name 3" },
//                     { id: 4, name: "Name 4" },
//                     { id: 5, name: "Name 5" }
//                 ],
//             dialogData:
//                 [
//                     { id: 1, message: "Это сообщение написал Name 1" },
//                     { id: 2, message: "Привет я Name 2" },
//                     { id: 3, message: "Hello! My name is Name 3" },
//                     { id: 4, message: "Новое сообщение от Name 4" },
//                     { id: 5, message: "Name 5 отправил сообщение" }
//                 ],
//             newMessageText: ''

//         },
//         published: {
//             publishedData:
//                 [
//                     { id: 1, avatar: "https://goo.su/bwMN", message: "Hello World!", likesCounts: '❤ 78' }
//                 ],
//             newPostText: ''
//         }
//     },
//     getState() { return this._state; },

//     // пустая функция, которая изменяется в функции
//     // subscribe приравниваяся к ее аргументу
//     _callSubscriber() { },
//     // методу _callSubscriber из файла state.js
//     // присваивается аргумент subscribe(observer),
//     // в файле index.js аргументом передается фунция renderPage
//     // из файла index.js
//     subscribe(observer) { this._callSubscriber = observer; },

//     dispatch(action) {

//         this._state.published = publishedReducer(this._state.published, action);
//         this._state.dialogs = dialogsReducer(this._state.dialogs, action);
//         this._callSubscriber(this._state);

//     }
// }

// export default store;