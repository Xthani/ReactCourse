import react from 'react';
import { NavLink } from 'react-router-dom';
import './../messages.css'

const Contacts = (props) => {
    let path = '/messages/' + props.id;
    return (
        < div className="contacts_name" >
            <NavLink to={path}>{props.name}</NavLink>
        </div >
    )
}

export default Contacts;