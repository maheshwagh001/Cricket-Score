
import './App.css'
import Toss from './components/Toss'
import FirstInnings from './components/FirstInnings'
import SecondInnings from './components/SecondInnings'
import UserContextProvider from './context/UserContextProvider'
import {Routes, Route } from "react-router-dom"
// import FirstInnings from './components/FirstInnings'

function App() {
  

  return (
    // <UserContextProvider>
    //   <h1>React with Chai and share is important</h1>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>
    <>
    <UserContextProvider>
    {/* <Toss />s
    <CountScore /> */}
    <Routes>
       <Route path='/Cricket-Score' element={<Toss />} />
       <Route path='/Cricket-Score/countscore' element={<FirstInnings />} />
       <Route path='/Cricket-Score/targetscore' element={<SecondInnings />} />
       {/* <Route path="/products" element={<Products />} /> */}
       {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    </UserContextProvider>
 </>
  )
}

export default App