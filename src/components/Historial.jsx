import { useState } from "react"

export default function Historial({transactions,deleteTransaction}) {
    
  return (
    <div className="mt-8 lg:w-1/2">
      <div>
        <h2 className="pb-2 border-b-2 border-b-slate-300 text-sm lg:text-base font-medium flex justify-between">Historial<span className="hidden lg:block text-xs text-slate-400">Ultimos movimientos</span></h2>
        
      </div>
        {transactions.length ===0 ? (
          <p>
            No hay movimientos. Agrega uno!
          </p>
        ): (
          <ul>
            {transactions.map((t)=>{
              const esPositivo = t.amount > 0

              const date = new Date(t.id)
              const fecha = `${date.toLocaleDateString('en-US')} ${date.toLocaleTimeString('en-US',{hour:'2-digit',minute: '2-digit'})}`
              console.log(`${t} - ${t}`)
              return(
                <li key={t.id} className={`gap-3 flex rounded-xl my-1 ${esPositivo ? 'lg:border-l-5 lg:border-l-emerald-500':'lg:border-l-5 lg:border-l-red-500'} bg-slate-100 shadow `}>

                  <div className={`rounded-md  flex flex-col justify-between w-full px-2 my-2 `}>
                    <span>{t.text}</span>
                    <p className="lg:block hidden text-xs text-slate-400">{fecha}</p>
                    
                    
                  </div>
                  <span className={`flex justify-between items-center gap-2 font-bold text-sm ${esPositivo ? 'text-emerald-500 ':'text-red-500'}`}>
                    {esPositivo ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}<button onClick={()=>deleteTransaction(t.id) }>X</button></span>
                  

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
