import react from 'react';
import './../messages.css'

const Dialog = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

export default Dialog;