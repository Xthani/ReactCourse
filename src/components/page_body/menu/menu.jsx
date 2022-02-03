import React from 'react';
import { NavLink } from 'react-router-dom';
import './menu.css';


const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <NavLink className="item" to="/profile">Профиль</NavLink>
                </li>
                <li>
                    <NavLink className="item" to="/messages">Сообщения</NavLink>
                </li>
                <li>
                    <NavLink className="item" to="/news">Новости</NavLink>
                </li>
                <li>
                    <NavLink className="item" to="/music">Музыка</NavLink>
                </li>
                <li className="setting">
                    <NavLink className="item" to="/setting">Настройки</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;