import React from 'react';
import './board.css';

function Board(props) {
    
const { flip, tilesArray, clicked, matched } = props;

const handleClick = (index) => {
    if (typeof(flip) === 'function') {
        flip(index);
    }
}

const boardLayout = tilesArray.map(
    (tile, index) => {
        return (
            <div className='tile-container'
                    key={index}
                    >
                <div
                    className={`tile ${clicked[index] ? 'flipped' : ''} ${matched[index] ? 'matched' : ''}`}
                    id={index}
                    onClick = {() => handleClick(index)}
                    >
                    <div className={`${tile} front`}>
                        {tile}
                    </div>
                    <div className='back'>

                    </div>
                    
                </div>
            </div>
        )
    }
    );

return (
    
    <div className='container'>
        {boardLayout}
    </div>
)
}

export default Board;