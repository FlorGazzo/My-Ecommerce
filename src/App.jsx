import React from 'react'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a ScandalQ"}/>
    </>
  )
}

export default App

