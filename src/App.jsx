import { useCallback, useEffect, useState } from 'react'
import { GameBoard, Nav, Footer } from './components'
import './App.css'
import styled from 'styled-components'
import surveyData from '../utils/surveyData';

function App() {

  return (
    <Main>
      <Nav />
      {<GameBoard survey={surveyData} />}
      <Footer />
    </Main>
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


export default App
