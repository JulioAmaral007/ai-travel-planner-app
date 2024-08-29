import { Ionicons } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'

type InputCheckProps = {
  title: string
  subtitle: string
  checked: boolean
  onPress: () => void
}

export function InputCheck({ title, subtitle, checked, onPress }: InputCheckProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${
        checked ? 'bg-green-50' : 'bg-transparent'
      } border border-zinc-900 w-full flex-row items-center p-4 rounded-xl gap-5`}
    >
      <View className="bg-white w-6 h-6 border-2 rounded-xl justify-center items-center">
        {checked && <Ionicons name="checkmark" size={14} color="black" />}
      </View>

      <View>
        <Text className={`${checked ? 'text-white' : 'text-zinc-900'} font-semibold text-xl`}>{title}</Text>
        <Text className={`${checked ? 'text-white' : 'text-zinc-900'} font-regular text-md`}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  )
}
