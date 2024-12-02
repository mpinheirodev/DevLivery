import { Input } from '@/components/input';

import { Image, Text, View } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { colors } from '@/styles/colors';
import { Button } from '@/components/button';
import { FormLogin } from '@/components/form-login';
import { Link } from 'expo-router';

export default function Register() {

  return (
    <View className='flex-1 items-center justify-center'>
      <View className='flex-1 w-full items-center justify-center p-8 border-b border-zinc-200 mb-2'>
        {/* LOGO */}
        <Image source={require("@/assets/logo.png")} resizeMode='contain'/>

        {/* FORMULÁRIO DE LOGIN */}
        <FormLogin>
            {/* CABEÇALHO DO FORM */}
          <View>
            <FormLogin.Title>Cadastrar</FormLogin.Title>
            <FormLogin.Description>Cadastre seus dados</FormLogin.Description>
          </View>

          <View className='gap-2'>
            {/* INPUT DE NOME */}
            <Input.Label>Nome</Input.Label>
            <Input>
              <MaterialCommunityIcons name='account-outline' size={20} color={colors.zinc[200]}/>
              <Input.Field placeholder='Digite seu nome'/>
            </Input>

            {/* INPUT DE USUÁRIO */}
            <Input.Label>E-mail</Input.Label>
            <Input>
              <MaterialIcons name='alternate-email' size={20} color={colors.zinc[200]}/>
              <Input.Field placeholder='exemplo@test.com' keyboardType='email-address'/>
            </Input>

            {/* INPUT DE SENHA */}
            <Input.Label>Senha</Input.Label>
            <Input>
            <MaterialCommunityIcons name='lock-outline' size={20} color={colors.zinc[200]}/>
              <Input.Field placeholder='************'/>
            </Input>
          </View>

          {/* BOTÃO DE ACESSO */}
          <Button title='Cadastrar' className="w-full h-14 bg-indigo-600 rounded-lg items-center justify-center"/>
          <Link 
          href={"/"} 
          className='text-center text-zinc-50 text-base font-semibold'
          >
            Já possui conta?
          </Link>
        </FormLogin>
      </View>
      <Text className='text-zinc-50 w-full text-center'>
          &copy;MEGA | 2024
      </Text>
    </View>
  )
}
