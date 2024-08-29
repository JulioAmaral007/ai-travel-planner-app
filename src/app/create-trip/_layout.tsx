import { Ionicons } from '@expo/vector-icons'
import { router, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native'

export default function StackLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Stack>
        <Stack.Screen
          name="travelers"
          options={{
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={34} />
              </TouchableOpacity>
            ),
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="travel-date"
          options={{
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={34} />
              </TouchableOpacity>
            ),
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="budget"
          options={{
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={34} />
              </TouchableOpacity>
            ),
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="interest"
          options={{
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={34} />
              </TouchableOpacity>
            ),
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="review-trip"
          options={{
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={34} />
              </TouchableOpacity>
            ),
            headerTransparent: true,
          }}
        />
      </Stack>
    </>
  )
}
