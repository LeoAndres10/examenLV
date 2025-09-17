import { View, Text, TextInput, Button } from 'react-native'
import { useBancoContext } from '../Provider/BancoProvider'
import React, { useState } from 'react'


export default function Transferencia() {

  const [nombre, setNombre]=useState<string>("")
  const [numeroCuenta, setNumeroCuenta]=useState<string>("")
  const [cantidad,setCantidad]=useState<string>("")


  const {retirarSaldo} =useBancoContext();
  return (
    <View>
      

      <TextInput placeholder='Nombre'
            value={nombre}
            onChangeText={setNombre}
      ></TextInput>

        <TextInput placeholder='Numero de cuenta'
            value={numeroCuenta}
            onChangeText={setNumeroCuenta}
      ></TextInput>

        <TextInput placeholder='Cantidad'
            value={cantidad}
            onChangeText={setCantidad}
      ></TextInput>
        
      <Button title='Hacer transferencia?' onPress={()=>retirarSaldo(parseFloat(cantidad))}></Button>


    </View>
  )
}