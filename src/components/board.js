import React from 'react';
import './board.css';

function Board(props) {
    
const { flip, tilesArray, clicked, matched } = props;



// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1)); 
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

const handleClick = (index) => {
    if (typeof(flip) === 'function') {
        flip(index);
    }
}

// const classAllocation = (clicked, index) => {
//     let classes;
//     if (clicked[index]) {
//         classes = 'flipped';
//     } else if (clicked[index] === 'matched') {
//         classes = 'matched';
//     } else {
//         classes = '';
//     }
// }

const boardLayout = tilesArray.map(
    (tile, index) => {
        return (
            <div className='tile-container'
                    key={index}
                    >
                <div
                    className={`tile ${clicked[index] ? 'flipped' : ''} ${matched[index] ? 'matched' : ''}`}
                    // className={classAllocation(clicked, index)}
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