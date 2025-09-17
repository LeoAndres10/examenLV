import { createContext } from "react";
import { Banco } from "../Modelos/Banco";

export const BancoContext=createContext({
    saldoInicial:0,
    aumentarSaldo:(monto:number)=>{},
    listaDepositosBanco: [] as Banco[],
     retirarSaldo:(monto:number)=>{}
})