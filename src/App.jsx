import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Register from './pages/Register';
import JoinCommunities from './pages/JoinCommunities';
import LanguageSelect from './pages/LanguageSelect';
import Community from './pages/Community';
import Language from './pages/Language';
import Translate from './pages/Translate';
import Chat from './pages/Chat';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/joincommunities" element={<JoinCommunities />}/>
        <Route path="/languageselect" element={<LanguageSelect />}/>
        <Route path="/languageexerciseselection" element={<Language />}/>
        <Route path="/community" element={<Community />}/>
        <Route path="/languagetranslate" element={<Translate />}/>
        <Route path="/chat" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
