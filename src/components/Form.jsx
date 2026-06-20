import { useState } from "react"


export default function Form() {
  return (
    <div>
        <form className="flex gap-2 flex-col" action="submit">
            <h2 className="pb-2 border-b-2 border-b-slate-300 text-sm font-medium">Nueva Transacción</h2>
            <label className="text-slate-300 font-medium text-sm capitalize" htmlFor="concepto">concepto</label>
            <input className="border border-slate-300 rounded-md px-3 py-2" type="text" name="concepto" id="concepto" placeholder="Ej. Salario, Pizza, Renta..." />
            <label className="text-slate-300 font-medium text-sm capitalize" htmlFor="monto">monto <span className="text-xs">(negativo - gasto, positivo-ingreso)</span></label>
            <input className="border border-slate-300 rounded-md px-3 py-2" type="text" name="monto" id="monto" placeholder="0.00" />
            <button className="bg-indigo-600 text-white font-medium border text-lg py-3 rounded-xl" type="submit">Agregar Transaccion</button>

        </form>
      
    </div>
  )
}
