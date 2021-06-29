import React from 'react';
import './Card.css';

const Card = ({ name, id, email }) => {
    return (
        <div className='bg-light-blue dib  br4 pd4 ma3 grow bw3 shadow=7'>
            <img alt='robots' src={`https://robohash.org/${id}}?200*200`} />
            <div className=' f5 tc'>
                <h2>{name} </h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;