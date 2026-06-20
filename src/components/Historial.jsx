import { useState } from "react"

export default function Historial() {
    
  return (
    <div className="mt-8">
        <h2 className="pb-2 border-b-2 border-b-slate-300 text-sm font-medium">Historial</h2>
        <ul>
            <li className="flex justify-between px-2 w-full border">{`Pago Nomina`} <span className="text-emerald-500 font-bold">+${500.00.toFixed(2)}</span></li>
            <li className="flex justify-between px-2 w-full border">{`Compra Pizza`} <span className="text-red-500 font-bold">-${20.00.toFixed(2)}</span></li>
        </ul>

      
    </div>
  )
}
