import React from 'react';
import c from './Dialogs.module.css';
import Dialog from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {
    let dialogsElements = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id}/> )

    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> )

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={c.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs