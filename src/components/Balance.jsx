import { useState } from "react"

export default function Balance({total,income,expense}) {

    /* Primer intento, pero no necesario si uso props desde el App.jsx:
    const [balance,setBalance]=useState(0.00)
    const [incomeBalance,setIncomeBalance]=useState(0)
    const [expenseBalance,setExpenseBalance]=useState(0) */

    
  return (
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mt-10">React Wallet</h1>
        <div className="my-8 flex flex-col w-full justify-center items-center">
         <p className=" text-sm text-slate-400 font-bold block md:hidden">TU BALANCE</p>
         <em className="not-italic text-6xl font-bold">${total < 0 ? '':''}{Math.abs(total).toFixed(2)}</em>
         <div className="mt-5 w-7/10 md:flex hidden ">
            <div className="border-r-2 border-r-slate-200 w-1/2 flex flex-col justify-center items-center" >
                <p className="text-slate-400 font-bold">INCOME</p>
                <span className="text-emerald-600 font-bold">+${income.toFixed(2)}</span>
            </div>
            <div className=" w-1/2 flex flex-col justify-center items-center">
                <p className=" text-slate-400 font-bold">EXPENSE</p>
                <span className="text-red-600 font-bold">-${Math.abs(expense).toFixed(2)}</span>
            </div>
         </div>
        </div>
    </div>
  )
}
