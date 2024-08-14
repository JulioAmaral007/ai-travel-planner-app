import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  return (
    <SafeAreaView>
    <Text>This screen doesn't exist.</Text>
    <Link href="/(drawer)">
      <Text>Go to home screen!</Text>
    </Link>
  </SafeAreaView>
  )
}