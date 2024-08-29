import { Button } from '@/components/Button'
import { InputCheck } from '@/components/InputCheck'
import { Feather, Foundation } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { router } from 'expo-router'
import { useState } from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function BudgetScreen() {
  const [priceRange, setPriceRange] = useState([200, 5200])
  const [selectedOption, setSelectedOption] = useState('')

  const handleSliderChange = (value: number) => {
    const min = Math.min(value, priceRange[1])
    const max = Math.max(value, priceRange[0])
    setPriceRange([min, max])
  }

  const options = [
    { label: 'Econômico', description: 'Fique atento aos custos' },
    { label: 'Moderado', description: 'Mantenha os custos em um nível médio' },
    { label: 'Luxo', description: 'Não se preocupe com isso!' },
  ]

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#EEEEEE',
        paddingHorizontal: 24,
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={150} // ajuste conforme necessário
      >
        <View className="">
          <Text className="font-semibold py-2 text-5xl text-zinc-90 mt-32">Orçamento</Text>
        </View>

        <View className="mt-7">
          <Text className="font-semibold text-2xl text-zinc-90">Faixa de preço</Text>
          <Text className="font-bold text-xl text-zinc-90">A média do preço por noite é R$ 5.200</Text>
        </View>

        <View className="my-8">
          <View>
            <Slider
              style={{ width: '100%', height: 70 }}
              minimumValue={200}
              maximumValue={5200}
              step={100}
              value={priceRange[0]}
              onValueChange={handleSliderChange}
              minimumTrackTintColor="#FF814C"
              maximumTrackTintColor="#000000"
              thumbTintColor="#FF814C"
            />
          </View>

          <View className="flex-row items-center justify-around">
            <View>
              <Text className="absolute left-3 top-[8px] opacity-50">
                <Foundation name="dollar" size={34} color="black" />
              </Text>
              <TextInput
                className="border py-2 px-10 rounded-lg"
                value={priceRange[0].toString()}
                keyboardType="numeric"
                onChangeText={(text) => setPriceRange([Math.min(Number(text), priceRange[1]), priceRange[1]])}
              />
            </View>
            <Feather name="arrow-right" size={24} color="black" />
            <View>
              <Text className="absolute left-3 top-[8px] opacity-50">
                <Foundation name="dollar" size={34} color="black" />
              </Text>
              <TextInput
                className="border py-2 px-10 rounded-lg"
                value={priceRange[1].toString()}
                keyboardType="numeric"
                onChangeText={(text) => setPriceRange([priceRange[0], Math.max(Number(text), priceRange[0])])}
              />
            </View>
          </View>
        </View>

        <Text>Choose spending habits for your trip</Text>
        <View className="mt-10 w-full gap-5">
          {options.map((option) => (
            <InputCheck
              key={option.label}
              title={option.label}
              subtitle={option.description}
              checked={selectedOption === option.label}
              onPress={() => setSelectedOption(option.label)}
            />
          ))}
        </View>

        <Button onPress={() => router.push('/create-trip/interest')} className="w-full h-16 mt-[96px]">
          <Button.Title className="text-lg">Continue</Button.Title>
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
