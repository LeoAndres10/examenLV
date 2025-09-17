import React from 'react'

import { View, Text, FlatList } from 'react-native'
import { useBancoContext } from '../Provider/BancoProvider'

export default function Historial() {

    const {listaDepositosBanco}=useBancoContext()
  return (
    <View>
      <Text>Este es su historial</Text>

      <FlatList
      
        data={listaDepositosBanco}

        keyExtractor={(item , index)=> index.toString()}
        renderItem={({item})=>(

            <View>

                <Text>Razon: {item.razon}</Text>
                 <Text>Cantidad: {item.cantidad}</Text>
            </View>

        )}

      >

      </FlatList>
      
    </View>
  )
}