import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Link href="/">
      <Text>Go to home screen!</Text>
    </Link>
  </SafeAreaView>
  )
}