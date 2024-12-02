import { ReactNode } from "react";
import { TextInput, View, TextInputProps, Text } from "react-native";

function Input( { children } : {children: ReactNode} ) {
  return (
    <View 
      className="w-full h-14 flex-row items-center justify-center p-3 gap-3 border border-indigo-600 rounded-lg"
      >
      {children}
    </View>
  )
}

function Field({ ...rest } : TextInputProps) {
  return <TextInput className="flex-1 text-zinc-50 text-base font-regular" {...rest}/>
}

function Label({ children } : {children: string}){
  return <Text className="text-zinc-50 text-lg font-semibold">{children}</Text>
}

Input.Field = Field
Input.Label = Label

export { Input }