import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import {
  LockKeyholeIcon,
  MailIcon
} from "lucide-react-native";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#181B26", paddingHorizontal: 24, justifyContent: "center" }}>
      <View className="flex-row items-center gap-2 mb-16">
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          className="w-[117px] h-[64px]"
        />

        <Text className="text-4xl text-white font-semibold">
          TripGenius
        </Text>
      </View>

      <View className="flex-row gap-2 w-full justify-around mt-5">
        <Button className="w-16 h-16">
          <AntDesign name="google" size={24} color="white" />
        </Button>

        <Button className="w-16 h-16">
          <AntDesign name="apple1" size={24} color="white" />
        </Button>

        <Button className="w-16 h-16">
          <AntDesign name="facebook-square" size={24} color="white" />
        </Button>
      </View>

      <View className="bg-zinc-300 rounded-3xl w-full h-[1px] my-10" />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="gap-5">
        <Input variant="secondary">
          <MailIcon color={colors.white} size={20} />
          <Input.Field
            placeholder="E-mail"
            // editable={stepForm === StepForm.TRIP_DETAILS}
            // onChangeText={setDestination}
            // value={destination}
          />
        </Input>

        <Input variant="secondary">
          <LockKeyholeIcon color={colors.white} size={20} />
          <Input.Field
            placeholder="Senha"
            // editable={stepForm === StepForm.TRIP_DETAILS}
            // onChangeText={setDestination}
            // value={destination}
          />
        </Input>

        <Button className="h-14 mx-16 mt-5">
          <Button.Title>
             Login
          </Button.Title>
        </Button>

        <View className="flex-row justify-center items-center gap-3">
          <Text className="text-white">Não tem uma conta?</Text>
          <Link href="/sign-up" className="text-orange-500">Cadastre-se</Link>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};