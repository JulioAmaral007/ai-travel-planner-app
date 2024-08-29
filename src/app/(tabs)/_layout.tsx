import { TabBar } from '@/components/TabBar'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" />

      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            headerShown: false,
            title: 'Explorar',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: 'Perfil',
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            title: 'Config.',
          }}
        />
      </Tabs>
    </>
  )
}
