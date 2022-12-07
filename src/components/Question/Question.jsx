import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGameContext } from '../../context/GameContext'

export const Question = ({ question, options, handleScore, scoreBoard, currentQuestion }) => {
  
  const { state: {playerDetails} } = useGameContext()

  return (
    <QuestionContainer>
      <h1>{question}</h1>
      <PlayerScore>
         <h3>{playerDetails.player1 ? playerDetails.player1 : "team 1"} Score: {scoreBoard.player1}</h3>
         <h3>{playerDetails.player2 ? playerDetails.player2 : "team 2"} Score: {scoreBoard.player2}</h3>
      </PlayerScore>
      <Questions>
      {options.map((option) => (
        <Option key={option} option={option} handleScore={handleScore}  currentQuestion={currentQuestion} />
        ))}    
      </Questions>
    </QuestionContainer>
  )
}

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px;
    h1 {
        font-size: 30px;
        margin: 10px;
    }

    div {
        grid-template-columns: 1fr 1fr;
        width: 100%;
        place-items: center;

        p {
            font-size: 20px;
            margin: 0;
            color: #000;
        }

        h3 {
            font-size: 20px;
            margin: 0;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
`

const PlayerScore = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: 10px 0;
`

const Questions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`


const Option = ({ option, handleScore, currentQuestion }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
    handleScore(option[1])
  }

  useEffect(() => {
    setIsFlipped(old => old === true ? false : old)
  }, [currentQuestion])
    
   
  return (
    <OptionContainer>
      <OptionWrapper isFlipped={isFlipped} onClick={handleFlip}>
        <OptionFront>
          <p>Flip</p>
        </OptionFront>
        <OptionBack>
          <h3>{option[0]}</h3> -
          <h3> {option[1]}%</h3>
        </OptionBack>
      </OptionWrapper>
    </OptionContainer>
  )
}

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const OptionWrapper = styled.div`
  width: 100%;
  height: 100px;
  perspective: 1000px;
  position: relative;
  transform-style: preserve-3d;
  transition: all .2s ease;
  transform: ${(props) => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
  opacity: ${(props) => (props.isDisabled ? '0.5' : '1')};

    &:hover {
        cursor: pointer;
    }
`

const OptionFront = styled.div` 
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const OptionBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;

    h3 {
        font-size: 30px;
        margin: 0;
    }
`
