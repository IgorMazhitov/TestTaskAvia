import React, { useState } from 'react';
import AviaPage from './components/AviaPage/AviaPage';
import CardsPage from './components/CardsPage/CardsPage';
import { AviaContext } from './Context/Context';

function App() {

  const [aviaPageState, setAviaPageState] = useState(true)
  const aviaPageStateChange = (value: boolean) => setAviaPageState(value)
  const [searchPlaceFrom, setSearchPlaceFrom] = useState('')
  const searchPlaceFromChange = (value: string) => setSearchPlaceFrom(value)
  const [searchPlaceTo, setSearchPlaceTo] = useState('')
  const searchPlaceToChange = (value: string) => setSearchPlaceTo(value)
  const [searchDateTo, setSearchDateTo] = useState('')
  const searchDateToChange = (value: string) => setSearchDateTo(value)
  const [searchDateBack, setSearchDateBack] = useState('')
  const searchDateBackChange = (value: string) => setSearchDateBack(value)
  const [submitState, setSubmitState] = useState(true)
  const submitStateChange = (value: boolean) => setSubmitState(value)
  const [cardsPageState, setCardsPageState] = useState(false)
  const cardsPageStateChange = (value: boolean) => setCardsPageState(value)

  return (
    <AviaContext.Provider value={{
      aviaPageState, aviaPageStateChange,
      searchPlaceFrom, searchPlaceFromChange,
      searchPlaceTo, searchPlaceToChange,
      searchDateTo, searchDateToChange,
      searchDateBack, searchDateBackChange,
      submitState, submitStateChange,
      cardsPageState, cardsPageStateChange
    }}>
      <div className="App">
        {aviaPageState && <AviaPage/>}
        {cardsPageState && <CardsPage/>}
      </div>
    </AviaContext.Provider>
  );
}

export default App
