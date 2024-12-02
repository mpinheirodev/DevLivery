import { colors } from "@/styles/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";

export function Card() {
  return (
    <View className="w-full border border-indigo-600 rounded-lg px-2 py-4 gap-3 flex-row items-center mb-4">
      <Image className="size-32" source={require("@/assets/logo.png")} resizeMode='contain'/>
      <View className="flex-1 gap-2">
        <Text className="text-xl text-zinc-50">Devlivery Mega</Text>
        <View className="flex-row gap-1">
          <MaterialCommunityIcons name="star" size={24} color={colors.yellow[400]} />
          <MaterialCommunityIcons name="star" size={24} color={colors.yellow[400]} />
          <MaterialCommunityIcons name="star" size={24} color={colors.yellow[400]} />
          <MaterialCommunityIcons name="star" size={24} color={colors.yellow[400]} />
          <MaterialCommunityIcons name="star" size={24} color={colors.yellow[400]} />
        </View>
        <View className="flex-row gap-2 w-full">
          <View className="bg-yellow-500 px-1.5 py-1 w-[70px] rounded-md">
            <Text className="text-xs font-bold text-center">
              Javascript
            </Text>
          </View>
          <View className="bg-blue-400 px-1.5 py-1 rounded-md">
            <Text className="text-xs font-bold text-center">
              ReactJS
            </Text>
          </View>
          <View className="bg-orange-600 px-1.5 py-1 rounded-md">
            <Text className="text-xs font-bold text-center">
              Git
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}