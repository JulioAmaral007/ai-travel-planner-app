import { Button } from '@/components/Button'
import { router } from 'expo-router'
import { PlaneIcon } from 'lucide-react-native'
import { Image, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#EEEEEEE',
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={require('../../assets/mapPin.png')} className="w-[160px] h-[160px]" />

      <Text className="text-center mt-7 font-bold text-3xl text-zinc-90">Nenhuma viagem planejada ainda</Text>

      <Text className="text-center text-xl text-zinc-90 mt-2 mx-6">
        Parece que é hora de planejar uma nova experiência de viagem! Comece abaixo
      </Text>

      <Image source={require('../../assets/route.png')} className="w-full h-[150px] mt-10" />

      <Button onPress={() => router.push('/create-trip')} className="mt-10 w-full h-16">
        <Button.Title className="text-lg">Criar nova viagem</Button.Title>
        <PlaneIcon size={24} color="white" />
      </Button>
    </SafeAreaView>
  )
}
