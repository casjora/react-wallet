import { useState } from 'react'
import './App.css'
import Balance from './components/Balance'
import Form from './components/Form'
import Historial from './components/Historial'

function App() {
//Fase 1 - Estado principal de transacciones
  const [transactions,setTransactions]=useState([])

//Fase 1 - funcion que añade transacciones:
  const addTransaction =(text,amount)=>{
    const newTransaction ={
      id: Date.now(),
      text:text,
      amount:parseFloat(amount)
    }
    setTransactions([...transactions,newTransaction])
  }

  //Fase 2 - Funcion para eliminar historial con filter
  const deleteTransaction = (id)=>{
    setTransactions(transactions.filter(transaction =>transaction.id !==id))
  }

  //Calculo de total con reduce, fase 2

  const total = transactions.reduce((acc,item)=>acc+item.amount,0)

  //Calculos para balance, income y expense:

  const income = transactions.filter(item=>item.amount>0).reduce((acc,item)=>acc+item.amount,0)
  const expense = transactions.filter(item=>item.amount<0).reduce((acc,item)=>acc+item.amount,0)

  return (
    <>
    <main className="flex flex-col items-center py-20 px-5 bg-slate-200 min-h-screen lg:px-40">
      <section className="w-full h-200 rounded-2xl px-5 bg-white shadow-xl lg:max-h-150 lg:max-w-200 xl:max-w-300">
        <Balance total={total} income={income} expense={expense}></Balance>
      <div className='lg:flex gap-5'>
        <Form addTransaction={addTransaction}/>
        <Historial transactions={transactions} deleteTransaction={deleteTransaction}/>
      </div>
      </section>
      
    </main>
      
    </>
  )
}

export default App
