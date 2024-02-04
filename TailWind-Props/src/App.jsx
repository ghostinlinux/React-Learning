import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
    
        <Card system = {["About Mackbook", "#apple"]}/>
        <Card system = {["About Linux","#linux"]}/>
    </>
  )
}

export default App
