import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGameContext } from '../../context/GameContext'
import confetti from 'canvas-confetti';

export const FinalScoreModal = ({ scoreBoard, onClick }) => {
    const { resetGame, state} = useGameContext()
    const handleClick = () => {
        onClick(false);
        resetGame();
    }

useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
}, []);
    
    const { player1, player2 } = state.playerDetails;
    
    return (
        <ModalContainer>
            <Modal>
                <h1>Final Score</h1>
                <h2>{player1 || "Team 1"}: {scoreBoard.player1}</h2>
                <h2>{player2 || "Team 2"}: {scoreBoard.player2}</h2>
                <h2>Winner: {scoreBoard.player1 === scoreBoard.player2 ? "Yo it's a draw" : scoreBoard.player1 > scoreBoard.player2 ? `${player1} Wins` : `${player2} Wins` }</h2>
                <button onClick={handleClick}>Close</button>
            </Modal>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modal = styled.div`
    background-color: #fff;
    padding: 20px;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 30px;
        margin: 10px;
    }
    h2 {
        font-size: 20px;
        margin: 10px;
    }
`