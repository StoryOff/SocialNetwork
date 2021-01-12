const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: body});

export default dialogsReducer;