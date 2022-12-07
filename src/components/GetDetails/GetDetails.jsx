import { useState } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { useGameContext } from '../../context/GameContext'

export const GetDetails = () => {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')

  const { setPlayerDetails } = useGameContext();

  const handlePlayer1 = (e) => {
    setPlayer1(e.target.value)
  }

  const handlePlayer2 = (e) => {
    setPlayer2(e.target.value)
  }

  return (
    <GetDetailsContainer>
      <h1>Enter Player Details</h1>
      <label>Enter Team 1 Name: 
      <input type="text" value={player1} onChange={handlePlayer1} />
      </label>
      <label>Enter Team 2 Name:
      <input type="text" value={player2} onChange={handlePlayer2} />
      </label>
       <Link to="/surveyData">
        <button onClick={() => setPlayerDetails({ player1, player2 })}>Next</button>
      </Link>
    </GetDetailsContainer>
  )
}

const GetDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    margin: 10px;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
      }
    }
  }

  p {
    margin: 10px;
    font-size: 1.2rem;
  }

  textarea {
    width: 100%;
    height: 100%;
    margin: 10px 0;
  }

  code {
    width: 100%;
    height: 200px;
    margin: 10px 0;
    background-color: grey; 
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    overflow: scroll;
    
    pre {
      width: 100%;
      height: 100%;
      overflow: scroll;
    }
  }

`

const Divider = styled.div` 
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;

`