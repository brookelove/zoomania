import { useState } from 'react'
import { useLocation } from "react-router-dom";
import './App.css'
import Page from './components/Page/index.jsx';
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)
  console.log("App Component Rendering")
  const currentPage = useLocation().pathname;
  return (
    <>
    <Header/>
    <main>
      <Page currentPage={currentPage} /> 
    </main>
    </>
  )
}

export default App
