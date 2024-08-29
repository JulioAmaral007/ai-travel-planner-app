import { Button } from '@/components/Button'
import { router } from 'expo-router'
import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function InterestScreen() {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { label: 'Comida & Bebidas', icon: '🍔' },
    { label: 'Áreas Urbanas', icon: '🏙️' },
    { label: 'Aventura', icon: '🚵‍♂️' },
    { label: 'Educacional', icon: '🎓' },
    { label: 'Praia', icon: '🏖️' },
    { label: 'Vida Selvagem', icon: '🦁' },
    { label: 'Piscina', icon: '🏊‍♂️' },
    { label: 'Relaxar', icon: '😌' },
    { label: 'Acampamento', icon: '🏕️' },
  ]

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 24,
      }}
    >
      <View className="">
        <Text className="font-semibold py-2 text-5xl text-zinc-90 mt-32">Interesses</Text>
      </View>

      <View className="mt-10 w-full gap-5 flex-1">
        {options.map((option) => {
          const selected = option.label === selectedOption
          return (
            <TouchableOpacity
              key={option.label}
              onPress={() => setSelectedOption(option.label)}
              className={`${
                selected ? 'bg-green-50' : 'bg-transparent'
              } border border-zinc-900 w-full flex-row items-center p-2 rounded-xl gap-2 justify-center`}
            >
              <Text className={`${selected ? 'text-white' : 'text-zinc-900'} font-regular text-md`}>{option.icon}</Text>
              <Text className={`${selected ? 'text-white' : 'text-zinc-900'} font-semibold text-xl`}>
                {option.label}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>

      <Button onPress={() => router.push('/create-trip/review-trip')} className="w-full h-16 mb-10">
        <Button.Title className="text-lg">Continuar</Button.Title>
      </Button>
    </SafeAreaView>
  )
}
