import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import Form from './components/Form'
import Historial from './components/Historial'

function App() {

  return (
    <>
    <main className="flex flex-col items-center py-20 px-5 bg-slate-200 min-h-screen">
      <section className="w-full h-200 rounded-2xl px-5 bg-white shadow-xl">
        <Balance></Balance>
        <Form/>
        <Historial/>
      </section>
      
    </main>
      
    </>
  )
}

export default App
