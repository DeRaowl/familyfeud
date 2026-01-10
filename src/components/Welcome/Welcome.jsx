import React, { useEffect} from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import confetti from 'canvas-confetti';

export const Welcome = () => {
  return (
    <WelcomeContainer>
      <h1>Welcome to the Family Feud Game!</h1>
      <p>Let the fun get started</p>
      <Link to="/getDetails">
        <button>Start Game</button>
      </Link>
    </WelcomeContainer>
  )
}

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`