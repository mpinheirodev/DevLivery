import { Link } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
}

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity 
      activeOpacity={0.7} 
      disabled={isLoading} 
      {...rest}
    >
      { isLoading ? (
        <ActivityIndicator className="text-zinc-50" />
      ) : (
      <Text className="text-zinc-50 text-base font-bold uppercase">
        <Link href={"/home"}>{title}</Link>
      </Text>
      )}
    </TouchableOpacity>
  )
}