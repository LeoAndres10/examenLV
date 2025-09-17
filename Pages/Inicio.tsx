import { View, Text, Button } from 'react-native'

import React from 'react'

import { useBancoContext } from '../Provider/BancoProvider'

export default function Inicio() {

    const {saldoInicial,aumentarSaldo}=useBancoContext()
  return (
    <View>
      <Text>Esta es su aplicacion de banco, Bienvenido!</Text>
      <Text>El saldo inicial es: {saldoInicial}</Text>
      
      <Button title='Depositar 500' onPress={()=>aumentarSaldo(500)}></Button>
    </View>
  )
}
