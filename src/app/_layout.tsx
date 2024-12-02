import "@/styles/global.css"

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loading } from "@/components/loading";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { SafeAreaView } from "react-native";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  })

  return (
    <SafeAreaView className="bg-zinc-900 flex-1">
      <StatusBar style="light" />
      {fontsLoaded ? <Slot /> : <Loading />}
    </SafeAreaView>
  )
}
