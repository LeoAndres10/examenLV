import { createContext } from "react";
import { Banco } from "../Modelos/Banco";

export const BancoContext=createContext({
    saldoInicial:0,
    aumentarSaldo:(cantidad:number)=>{},
    listaDepositosBanco: [] as Banco[],
     retirarSaldo:(cantidad:number)=>{}
})