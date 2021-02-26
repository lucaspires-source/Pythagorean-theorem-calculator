import React from 'react'
import {AppContainer} from './styles/styledComponents'
import Header from './components/Header'
import CalculatorBase from './components/CalculatorBase'
const App = () => {
  return (
    <AppContainer>
      <Header/>
      <CalculatorBase/>
    </AppContainer>
  )
}

export default App
