import React from 'react';
import c from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

function Dialogs(props) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageText}
                                   placeholder='Enter your message'
                                   onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs