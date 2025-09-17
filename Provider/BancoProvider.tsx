import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { Banco } from '../Modelos/Banco';
import { Plantilla } from '../Modelos/Plantilla'

import {BancoContext} from '../Context/BancoContext'
export default function BancoProvider({children}:Plantilla) {

  const [saldoInicial,setSaldoInicial]=useState<number>(10000);
  const [listaDepositosBanco, setListaDepositosBanco]=useState<Banco[]>([]);

  function aumentarSaldo(cantidad:number){
        setSaldoInicial(saldoInicial+cantidad);

        let razonDeposito:Banco={
            razon:'Depositos',
            cantidad:cantidad
        }
        setListaDepositosBanco([...listaDepositosBanco,razonDeposito])
  }


  function retirarSaldo(cantidad:number){

    if(cantidad>saldoInicial){
        alert("El saldo es insuficiente")
    }
    else{

         let razonDeposito:Banco={
            razon:'Retiro',
            cantidad:cantidad
        }

        setListaDepositosBanco([...listaDepositosBanco,razonDeposito]);
        alert("Transferencia exitosa")

    }

  }

  return (
    <BancoContext.Provider value={{saldoInicial,listaDepositosBanco,aumentarSaldo,retirarSaldo}}>
      {children}
    </BancoContext.Provider>
  )
}

export function useBancoContext(){
    return useContext(BancoContext)
}