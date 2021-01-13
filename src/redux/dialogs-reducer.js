const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        case SEND_MESSAGE:
            let text = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 6, message: text});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageTextCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text});

export default dialogsReducer;