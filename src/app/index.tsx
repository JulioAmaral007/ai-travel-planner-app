import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function WelcomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <Image source={require('../assets/onboarding.jpg')} className="w-full h-full absolute" />
      <View className="flex-1 items-center">
        <Image source={require('../assets/logo.png')} className="w-[242px] h-[132px] mt-32" />
      </View>

      <View className="bg-white/70 h-80 rounded-t-[30px] p-5 justify-center items-center">
        <View className="bg-green-50/70 rounded-3xl w-56 h-2 absolute top-3" />
        <Text className="font-semibold text-7xl pt-5">TripGenius</Text>
        <Text className="text-3xl text-center mt-3">Encontre a melhor viagem com assistência de IA</Text>
        <TouchableOpacity
          onPress={() => router.push('/(tabs)/home')}
          className="bg-green-50 rounded-3xl p-5 mt-5 w-full"
        >
          <Text className="text-center text-white">Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
