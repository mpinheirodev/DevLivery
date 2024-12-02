import { colors } from "@/styles/colors";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export function Header() {
  return (
    <View className='flex-row items-center justify-between w-full mb-8'>
      <Text className='text-3xl text-zinc-50'>
        <Link href={"./"}>Devlivery</Link>
      </Text>
      <View className='flex-row gap-4'>
        <MaterialCommunityIcons name='bell-outline' size={28} color={colors.zinc[50]}/>
        <Octicons name='gear' size={28} color={colors.zinc[50]}/>
      </View>
    </View>
  )
}