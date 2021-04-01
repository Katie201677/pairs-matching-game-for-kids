import React from 'react';
import './win.css';

function WinMessage(props) {

    const { gameOver } = props;
    let status = gameOver ? 'gameOver' : 'gameOn';

    return (
        <h1
            // className={`${gameOver ? 'gameOver' : 'gameOn'}`}
            className={status}
        > Well Done!
        </h1>
    )
}

export default WinMessage;