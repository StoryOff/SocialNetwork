import React from 'react';
import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog