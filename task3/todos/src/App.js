import './App.css'
import { Routes, Route } from 'react-router-dom';
import UserInfo from './routes/UserInfo';
import { useState } from 'react'
import Homepage from './routes/Homepage';


export default function App() {
  const [userId, setuserId] = useState();

  const viewDetails = (id) => {
    setuserId(id);
    console.log("viewed", id);
  };


  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage viewDetails={viewDetails} />} />
        <Route path='/user' element={<UserInfo userId={userId} />} />
      </Routes>
    </main>
  )
}
