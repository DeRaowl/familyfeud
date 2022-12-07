import { Routes, Route } from "react-router-dom"
import { GameBoard, Nav, Footer, Welcome, GetDetails, UploadData, ErrorFallback  } from './components'
import './App.css'
import styled from 'styled-components';
import { useGameContext } from './context/GameContext'
import {ErrorBoundary} from 'react-error-boundary'


function App() {
  const { state } = useGameContext();
  
  return (
    <>
      <Nav />
       <ErrorBoundary
      FallbackComponent={ErrorFallback}
      >
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path='/getDetails' element={<GetDetails />} />
        <Route path='/surveyData' element={<UploadData />} />
        <Route path="/game" element={<GameBoard survey={state.surveyData} />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </ErrorBoundary>
      <Footer />
    </>
  )
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    font-size: 30px;
  }

  h1 {
    font-size: 30px;
    margin: 0;
  } 

  h2 {
    font-size: 20px;
    margin: 0;
  }

  h3 {
    font-size: 20px;
    margin: 0;
  }

  h4 {
    font-size: 20px;
    margin: 0;
  }

  h5 {
    font-size: 20px;
    margin: 0;
  }

  h6 {
    font-size: 20px;
    margin: 0;
  }

`
export default App;
