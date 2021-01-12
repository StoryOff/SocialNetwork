import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi. That\'s my first post', likesCount: 61},
                {id: 1, message: 'Follow me', likesCount: 7}
            ],
            newPostBody: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 0, name: 'Roman'},
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Vasyan'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Georgiy'}
            ],
            messages: [
                {id: 0, message: 'Hello.'},
                {id: 1, message: 'How are you?'},
                {id: 2, message: 'I miss you'}
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;