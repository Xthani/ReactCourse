import React from 'react';
import { addMessageCreater, updateNewMessageCreater } from '../../../redux/dialogs-reducer';
import Contacts from './contacts/contacts';
import Dialog from './dialog/dialog';
import './messages.css'

// окно Messages
const Messages = (props) => {

    // массив элементов
    let contactsElements = props.state.contactsData.map((contact, i) => {
        return (
            <Contacts key={i} name={contact.name} id={contact.id} />
        )
    });
    let dialogElements = props.state.dialogData.map((dialog, i) => {
        return (
            <Dialog key={i} message={dialog.message} />
        )
    });

    // публикация сообщений
    let addMessage = () => {
        props.dispatch(addMessageCreater());
    }
    let onMessageChange = (event) => {
        let text = event.target.value;
        let action = updateNewMessageCreater(text);
        props.dispatch(action);
    }

    return (
        <div>

            <div className="messages">
                <div className="contacts">
                    {contactsElements}
                </div>

                <div className="dialogsWrapper">
                    <div className="dialog">
                        {dialogElements}
                    </div>
                    <div className='newMessagesWrapper' >
                        <textarea
                            placeholder='text'
                            value={props.state.newMessageText}
                            onChange={onMessageChange}
                        />
                        <button onClick={addMessage}>✓</button>
                    </div>
                </div>

            </div >



        </div>
    )
}

export default Messages;