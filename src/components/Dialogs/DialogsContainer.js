import React from 'react';
import c from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return <Dialogs updateNewMessageText={onNewMessageChange} sendMessage={onSendMessageClick}
                    dialogsPage={state.dialogsPage}/>
}

export default DialogsContainer