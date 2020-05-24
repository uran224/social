import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d  => <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = props.state.messages.map( m => <Message text = {m.text} />);

    
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);

    }

    return (
        <div className={s.dialogs}> 
            <div className={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>

                { messagesElements }

                <div>
                    <div>
                        <textarea ref={newPostElement} ></textarea>
                    </div>
                    <div>
                        <button onClick={ addPost } >Add post, asshole</button>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Dialogs;
