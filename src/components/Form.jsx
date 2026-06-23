import { useState } from "react"


export default function Form({addTransaction}) {
  const [text,setText]=useState('')
  const [amount,setAmount]=useState(0.00)
  const handleSubmit = (e)=>{
    e.preventDefault()
    addTransaction(text,amount)
    {console.log(`${text} - ${amount}`)}

    setText("")
    setAmount("")
    {console.log(`${text} - ${amount}`)}


  }

  return (
    <div className="lg:w-1/2">
        <form className="flex gap-2 flex-col" action="submit" onSubmit={handleSubmit}>
            <h2 className="pb-2 border-b-2 border-b-slate-300 text-sm font-medium">Nueva Transacción</h2>
            <label className="text-slate-300 font-medium text-sm capitalize" htmlFor="concepto">concepto</label>
            <input className="border border-slate-300 rounded-md px-3 py-2" type="text" name="concepto" id="concepto" placeholder="Ej. Salario, Pizza, Renta..." value={text} onChange={(e)=>setText(e.target.value)} />
            <label className="text-slate-300 font-medium text-sm capitalize" htmlFor="monto">monto <span className="text-xs">(negativo - gasto, positivo-ingreso)</span></label>
            <input className="border border-slate-300 rounded-md px-3 py-2" type="number" name="monto" id="monto" placeholder="0.00"value={amount} onChange={(e)=>setAmount(e.target.value)} step="0.01" />
            <button className="bg-indigo-600 text-white font-medium border text-lg py-3 rounded-xl hover:bg-indigo-700 transition-colors" onSubmit={Form} type="submit">Agregar Transaccion</button>
            
        </form>
      
    </div>
  )
}
