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
  height: 50vh;
  width: 100%;
  max-width: 800px;


  label {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 600;
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
    margin: 10px 0;
    resize: vertical;
    height: 316px;
    min-height: 316px;
    overflow-y: scroll;
    font-family: Roboto Mono,Consolas,Courier New,monospace;
    font-size: .9rem;
    line-height: 1.45;
    text-shadow: 0.015em 0.015em 0 #666;
    color: #666;
    padding: calc(0.75rem - 1px);
    background-color: #fff;
    box-shadow: inset 0 5px 2px rgba(0,0,0,.075);
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
      }
    }
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

  @media (max-width: 768px) {
    height: 100vh;

    input {
      width: 100%;

      &:focus {
        outline: none;

        &::placeholder {
          color: transparent;

        }

      }

    }
  }

`

const Divider = styled.div` 
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;

`