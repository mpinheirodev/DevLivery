
import { Card } from '@/components/card';
import { Header } from '@/components/header';
import { ScrollView, Text, View } from 'react-native';


export default function Home() {

  return (
    <View className='flex-1 items-center justify-center'>
      <ScrollView className='flex-1 w-full p-4 border-b border-zinc-200 mb-2'>
        <Header />
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} />
        ))}
        <Card />
      </ScrollView>
      <Text className='text-zinc-50 w-full text-center'>
          &copy;MEGA | 2024
      </Text>
    </View>
  )
}
