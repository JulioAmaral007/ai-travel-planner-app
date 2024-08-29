import { Button } from '@/components/Button'
import { InputCheck } from '@/components/InputCheck'
import { TripContext } from '@/context/TripContext'
import { router } from 'expo-router'
import { useContext, useState } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TravelersScreen() {
  const { updateTripData } = useContext(TripContext)
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { title: 'Sozinho', subtitle: 'Um viajante solitário em exploração' },
    { title: 'Casal', subtitle: 'Dois viajantes em conjunto' },
    { title: 'Familia', subtitle: 'Um grupo de aventuras divertidas' },
    { title: 'Amigos', subtitle: 'Um bando de caçadores de emoções' },
  ]

  const handleContinue = () => {
    updateTripData('travelers', selectedOption)
    router.push('/create-trip/travel-date')
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 24,
      }}
    >
      <View className="">
        <Text className="font-semibold py-2 text-5xl text-zinc-90 mt-32">Quem vai?</Text>
        <Text className="font-bold text-xl text-zinc-90">Escolha seus viajantes</Text>
      </View>

      <View className="mt-10 w-full gap-5 flex-1 justify-center">
        {options.map((option) => (
          <InputCheck
            key={option.title}
            title={option.title}
            subtitle={option.subtitle}
            checked={selectedOption === option.title}
            onPress={() => setSelectedOption(option.title)}
          />
        ))}
      </View>

      <Button onPress={handleContinue} className="w-full h-16 mb-10">
        <Button.Title className="text-lg">Continuar</Button.Title>
      </Button>
    </SafeAreaView>
  )
}
