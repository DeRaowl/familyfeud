import { Link, useNavigate  } from "react-router-dom";
import { useGameContext } from '../../context/GameContext'

export function ErrorFallback({ error }) {
    const { setSurveyData } = useGameContext();
    const navigateTo = useNavigate();
    
    function handleClick() {
        navigateTo("/");
    } 


  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    <button onClick={handleClick}>Try again</button>
    </div>
  )
}
