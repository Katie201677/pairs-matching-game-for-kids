import React from 'react';
import './win.css';

function WinMessage(props) {

    const { gameOver, restart } = props;

    const handleClick = () => {
        if (typeof(restart) === 'function') {
            restart();
        }
    }

    return (
        <div>
            <h1
                className={`${gameOver ? 'gameOver' : 'gameOn'}`}
            > Well Done!
            </h1>
            <button
                className={`${gameOver ? 'gameOver' : 'gameOn'}`}
                onClick={() => handleClick()}
            >Play Again?</button>
        </div>
    )
}

export default WinMessage;