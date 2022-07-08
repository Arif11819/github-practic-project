import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className='grid grid-cols-3 gap-4 px-24'>
            <div className='card-section flex flex-col items-center'>
                <img className='card-img' src="https://i.ibb.co/PxPkfPk/chess-icon.png" alt="" />
                <h2 className='card-text text-center'>Proven Multi-<br />Platform Strategy</h2>
            </div>
            <div className='card-section flex flex-col items-center'>
                <img className='card-img' src="https://i.ibb.co/K6vHp2R/calendar.png" alt="" />
                <h2 className='card-text text-center'>Guaranteed Appoinments</h2>
            </div>
            <div className='card-section flex flex-col items-center'>
                <img className='card-img' src="https://i.ibb.co/Jtpr4rY/client.png" alt="" />
                <h2 className='card-text text-center'>Retaining<br />Clients</h2>
            </div>
        </div>
    );
};

export default Card;