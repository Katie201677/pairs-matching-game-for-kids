import React, {useState, useEffect, useMemo} from 'react';
import Board from './board';
import WinMessage from './win';

function Game() {

    const tilesArray = useMemo(() => (
        ['cow', 'cow', 'pig', 'pig', 'horse', 'horse', 'duck', 'duck']
    ), []); 
    const [ clicked, setClicked ] = useState(tilesArray.map(() => false));
    const [ calculating, setCalculating] = useState(false);
    console.log('clicked', clicked);
    const [ matched, setMatched ] = useState(tilesArray.map(() => false));
    console.log('matched', matched);
    const [gameOver, setGameOver ] = useState(false);
    console.log(gameOver);

    function flip(index) {   
        if (calculating || clicked[index]) {
            return;
        }  else {
            setClicked([
                ...clicked.slice(0, index),
                true,
                ...clicked.slice(index + 1),
            ]);
        }
    }

    function restart() {
        setClicked(tilesArray.map(() => false));
        setMatched(tilesArray.map(() => false));
        setGameOver(false);
    }

    useEffect(() => {
        let first = clicked.indexOf(true);
        let last = clicked.lastIndexOf(true);
        console.log(first, last);
        if (first === last) {
            return;
        } else if (first !== last && first >= 0 && last >= 0) {
            if (tilesArray[first] === tilesArray[last]) {
                setCalculating(true);
                setTimeout(() => {
                    setClicked(tilesArray.map(() => false));
                    setMatched(m => [
                        ...m.slice(0, first),
                        true,
                        ...m.slice(first + 1, last),
                        true,
                        ...m.slice(last + 1),
                    ]);
                    setCalculating(false);
                }, 1000);
            } else {
                setCalculating(true);
                setTimeout(() => {
                    setClicked(tilesArray.map(() => false));
                    setCalculating(false);
                }, 1000);
            }
        }
        
    }, [clicked, tilesArray]);

    useEffect(() => {
        if (matched.includes(false)) {
            setGameOver(false);
        } else {
            setGameOver(true);
        }
    }, [matched]);
        
    return (
        <div>
            <Board 
                flip={flip}
                clicked={clicked}
                tilesArray={tilesArray}
                matched={matched}
            />
            <WinMessage
                gameOver={gameOver}
                restart={restart}
            />
        </div>
    )
}

export default Game;