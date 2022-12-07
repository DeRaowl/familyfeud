import { useEffect, useState } from 'react'
import { Question } from '../Question/Question'
import styled from 'styled-components'
import { useGameContext } from '../../context/GameContext'
import { FinalScoreModal } from '../FinalScore/FinalScoreModal'

export const GameBoard = ({ survey }) => {
    const [surveyData] = useState(survey)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showModal, setShowModal] = useState(false)
  const [scoreBoard, setScoreBoard] = useState({
    player1: 0,
    player2: 0,
  })
  const [scoreForCurrentOption, setScoreForCurrentOption] = useState(0)

  const handleScore = (score) => {
    setScoreForCurrentOption(score)
  }

  const handleNextQuestion = () => {
      setScoreForCurrentOption(0)
      if (Object.keys(surveyData).length - 1 > currentQuestion) {
          setCurrentQuestion(currentQuestion + 1)
      } else {
            setShowModal(true)
    }
  }

    const handleScoreBoard = (player) => {
        setScoreBoard({
            ...scoreBoard,
            [player]: scoreBoard[player] + scoreForCurrentOption,
        })
    }

    return (
        <GameBoardContainer>
            <Question
               question={Object.keys(surveyData)[currentQuestion]}
               options={surveyData[Object.keys(surveyData)[currentQuestion]]}
               handleScore={handleScore}
               scoreBoard={scoreBoard}
               currentQuestion={currentQuestion}
               />
                <p>
                    Current Score: {scoreForCurrentOption}
               </p>
            <ButtonContainer>
                <Button onClick={() => handleScoreBoard('player1')}>Reward Player 1</Button>
                <Button onClick={handleNextQuestion}>Next Question</Button>
                <Button onClick={() => handleScoreBoard('player2')}>Reward Player 2</Button>
            </ButtonContainer>

            {
                showModal && <FinalScoreModal scoreBoard={scoreBoard} onClick={setShowModal} />
            }
        </GameBoardContainer>
    )
}

const GameBoardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    width: 800px;

    p {
        margin: 0;
        font-size: 30px;
    }
`
    
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
    
const Button = styled.button`
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #acbae6;
        color: #fff;
    }
`