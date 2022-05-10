import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserInfo from './routes/UserInfo';
import Homepage from './routes/Homepage';



export default function App() {


  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/user/:id' element={<UserInfo />} />
      </Routes>
    </main>
  )
}
