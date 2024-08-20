import { TabBarIcon } from '@/components/atoms'
import React, { useState, ReactNode } from 'react'
import { Text, View, Button } from 'react-native'

const Foo = ({ counter, getIcon }: { counter: number; getIcon: () => ReactNode }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: 40 }}>
      <Text>{counter}</Text>
      {getIcon()}
    </View>
  )
}

const Bar = ({ counter, setCounter }: { counter: number; setCounter: (counter: number) => void }) => {
  return (
    <>
      <Text>{counter}</Text>
      <Foo
        counter={counter}
        getIcon={() => {
          const a = <TabBarIcon tintColor={counter % 2 === 0 ? 'red' : 'blue'} icon={'explore'} />
          const b = <TabBarIcon tintColor={counter % 2 === 0 ? 'red' : 'blue'} icon={'wishlist'} />
          return counter % 4 === 0 ? a : b
        }}
      />
      <Button title="Increment" onPress={() => setCounter(counter + 1)} />
    </>
  )
}

const WishlistRouterScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Bar counter={counter} setCounter={setCounter} />
    </View>
  )
}

export default WishlistRouterScreen
