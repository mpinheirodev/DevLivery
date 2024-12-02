import { Text, View } from "react-native";
import { ReactNode } from "react";


function FormLogin({ children } : {children: ReactNode}){
  return (
    <View className='w-full mt-12 gap-6 bg-zinc-800 p-6 rounded-lg border border-indigo-600'>
      {children}
    </View>
  )
}

function Title({ children } : {children: string}) {
  return <Text className="text-3xl font-bold text-zinc-50">{children}</Text>
}

function Description({ children } : {children: string}) {
  return <Text className="text-zinc-400 font-medium">{children}</Text>
}

function Content({ children } : {children: ReactNode}){
  return (
    <View>{children}</View>
  )
}

FormLogin.Title = Title
FormLogin.Description = Description
FormLogin.Content = Content

export { FormLogin }