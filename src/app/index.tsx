import { Input } from '@/components/input';

import { Image, Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/styles/colors';
import { Button } from '@/components/button';
import { FormLogin } from '@/components/form-login';
import { Link } from 'expo-router';

export default function Login() {

  return (
    <View className='flex-1 items-center justify-center'>
      <View className='flex-1 w-full items-center justify-center p-8 border-b border-zinc-200 mb-2'>
        {/* LOGO */}
        <Image source={require("@/assets/logo.png")} resizeMode='contain'/>

        {/* FORMULÁRIO DE LOGIN */}
        <FormLogin>
            {/* CABEÇALHO DO FORM */}
          <View>
            <FormLogin.Title>Entrar</FormLogin.Title>
            <FormLogin.Description>Entre com seu usuário e senha</FormLogin.Description>
          </View>

          <View className='gap-2'>
            {/* INPUT DE E-MAIL */}
            <Input.Label>E-mail</Input.Label>
            <Input>
              <MaterialIcons name='alternate-email' size={20} color={colors.zinc[200]}/>
              <Input.Field placeholder='exemplo@test.com' keyboardType='email-address'/>
            </Input>

            {/* INPUT DE SENHA */}
            <Input.Label>Senha</Input.Label>
            <Input>
            <MaterialCommunityIcons name='lock-outline' size={20} color={colors.zinc[200]}/>
              <Input.Field placeholder='************' keyboardType='visible-password'/>
            </Input>
          </View>
          {/* BOTÃO DE ACESSO */}
          <Button title='Acessar' className="w-full h-14 bg-indigo-600 rounded-lg items-center justify-center"/>
          
          {/* LINK PARA CADASTRO */}
          <Link href={"/register"} className='text-center text-zinc-50 text-base font-semibold'>Ainda não está cadastrado?</Link>
        </FormLogin>
      </View>
      <Text className='text-zinc-50 w-full text-center'>
          &copy;MEGA | 2024
      </Text>
    </View>
  )
}
