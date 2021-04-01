import React, {useState, useEffect } from 'react';
import Board from './board';
import WinMessage from './win';

function shuffle(array) {
    let arr = [...array];
    for (let i=arr.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function Game() {

    const animals = ['cow', 'cow', 'pig', 'pig', 'horse', 'horse', 'sheep', 'sheep'];
    const [ tilesArray, setTilesArray ] = useState(shuffle(animals));
    // console.log(tilesArray);
    const [ clicked, setClicked ] = useState(animals.map(() => false));
    const [ calculating, setCalculating ] = useState(false);
    const [ matched, setMatched ] = useState(animals.map(() => false));
    const [ gameOver, setGameOver ] = useState(false);
    
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
        setClicked(animals.map(() => false));
        setMatched(animals.map(() => false));
        setGameOver(false);
        setTilesArray(shuffle(animals));
    }

    useEffect(() => {
        let first = clicked.indexOf(true);
        let last = clicked.lastIndexOf(true);
        // console.log(first, last);
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
            <h1>Animal Pairs</h1>
            <h2>Can You Find All The Matches?</h2>
            <Board 
                flip={flip}
                clicked={clicked}
                tilesArray={tilesArray}
                matched={matched}
            />
            {
                gameOver && (
                    <WinMessage
                        gameOver={gameOver}
                        restart={restart}
                    />
                )
            }
        </div>
    )
}

export default Game;