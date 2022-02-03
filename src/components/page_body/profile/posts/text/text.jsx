import React from 'react';
import './../posts.css';

const Text = (props) => {
    return (
        <div className="published">
            <div className="publ">
                <img src={props.avatar} alt="avatar" />
            </div>

            <div className="text">
                <p>{props.message}</p>
            </div>

            <button className='likesCounts'>{props.likesCounts}</button>

        </div>
    )
}

export default Text;