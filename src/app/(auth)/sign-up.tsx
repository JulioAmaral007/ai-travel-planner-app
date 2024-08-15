import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import {
  LockKeyholeIcon,
  MailIcon,
  UserIcon
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

export default function SignUpScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#181B26", paddingHorizontal: 24, justifyContent: "center" }}>
      <View className="flex-row items-center gap-2">
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          className="w-[117px] h-[64px]"
        />

        <Text className="text-4xl text-white font-semibold">
          TripGenius
        </Text>
      </View>

      <Text className="text-4xl text-white font-semibold my-10">
        Crie sua conta gratuita
      </Text>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="gap-5">
      <Input variant="secondary">
          <UserIcon color={colors.white} size={20} />
          <Input.Field
            placeholder="Nome"
            // editable={stepForm === StepForm.TRIP_DETAILS}
            // onChangeText={setDestination}
            // value={destination}
          />
        </Input>

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
            Criar uma Conta
          </Button.Title>
        </Button>

        <View className="flex-row justify-center items-center gap-3">
          <Text className="text-white">Tem uma conta?</Text>
          <Link href="/sign-in" className="text-orange-500">Faça login</Link>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};