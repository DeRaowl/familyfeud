import { useState } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { useGameContext } from '../../context/GameContext'
import surveyData from '../../../utils/surveyData'

export const placeholder = {
    "Tell me something specific you have lost more than once": [
      [
        "Keys",
        63
      ],
      [
        "Money",
        7
      ],
      [
        "Weight",
        20
      ],
      [
        "Contact Lens",
        10
      ]
    ]
  };

export const UploadData = () => {
  const { setSurveyData } = useGameContext();
  const [data, setData] = useState(JSON.stringify(placeholder, null, 2))
    const handleSurveyData = (e) => {
    setData(e.target.value);
  }
  const handleStartGame = () => {
    setSurveyData(!data ? surveyData : JSON.parse(data));
  }

  return (
    <UploadContainer>
      <h3>
        Enter custom data in the following format:
      </h3>
       <textarea value={data} onChange={handleSurveyData} />
      <div>
      <Link to="/game">
        <button onClick={handleStartGame}>Start Game</button>
      </Link>
      <Link to="/game">
        <button onClick={() => setSurveyData(surveyData)}>Use Default Data</button>
      </Link>
     </div>
    </UploadContainer>
  )
}

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  textarea {
    width: 100%;
    height: 50%;
    margin: 10px 0;
  }

  h3 {
    margin: 10px 0;
  }

  button {
    margin: 10px;
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }
`

  