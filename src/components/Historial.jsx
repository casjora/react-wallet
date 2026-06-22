import { useState } from "react"

export default function Historial({transactions,deleteTransaction}) {
    
  return (
    <div className="mt-8">
        <h2 className="pb-2 border-b-2 border-b-slate-300 text-sm font-medium">Historial</h2>
        {transactions.length ===0 ? (
          <p>
            No hay movimientos. Agrega uno!
          </p>
        ): (
          <ul>
            {transactions.map((t)=>{
              const esPositivo = t.amount > 0
              console.log(`${t} - ${t}`)
              return(
                <li key={t.id}>
                  <div>
                    <button onClick={()=>deleteTransaction(t.id) }>X</button>
                    <span>{t.text}</span>
                  </div>
                  <span className={`font-bold text-sm ${esPositivo ? 'text-emerald-500':'text-red-500'}`}>
                    {esPositivo ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}
                  </span>
                </li>
              )
            })}
          </ul>
        )}
        {/* <ul>
            <li className="flex justify-between px-2 w-full border">{`Pago Nomina`} <span className="text-emerald-500 font-bold">+${500.00.toFixed(2)}</span></li>
            <li className="flex justify-between px-2 w-full border">{`Compra Pizza`} <span className="text-red-500 font-bold">-${20.00.toFixed(2)}</span></li>
        </ul> */}

      
    </div>
  )
}
