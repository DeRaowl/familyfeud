import React from "react"

const GameContext = React.createContext()

const GameContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'SET_SURVEY_DATA':
                return {
                    ...state,
                    surveyData: action.payload,
                }
            case 'SET_PLAYER_DETAILS':
                return {
                    ...state,
                    playerDetails: action.payload,
                }
            case 'SET_WINNER':
                return {
                    ...state,
                    winner: action.payload,
                }
            case 'RESET_GAME':
                return {
                    ...state,
                    surveyData: {},
                    playerDetails: { player1: '', player2: '' },
                    winner: '',
                }
            default:
                return state
        }
    }, {
        surveyData: {},
        playerDetails: { player1: '', player2: '' },
        winner: '',
    }
    )

    const setSurveyData = (data) => {
        dispatch({
            type: 'SET_SURVEY_DATA',
            payload: data,
        })
    }

    const setPlayerDetails = (data) => {
        dispatch({
            type: 'SET_PLAYER_DETAILS',
            payload: data,
        })
    }

    const setWinner = (data) => {
        dispatch({
            type: 'SET_WINNER',
            payload: data,
        })
    }

    const resetGame = () => {
        dispatch({
            type: 'RESET_GAME',
        })
    }

    return (
        <GameContext.Provider value={{ state, setSurveyData, setPlayerDetails, setWinner, resetGame  }}>
            {children}
        </GameContext.Provider>

    )
}

export const useGameContext = () => React.useContext(GameContext)

export { GameContextProvider, GameContext }