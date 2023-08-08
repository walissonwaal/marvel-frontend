'use client'
import { InputForm, LargeButton } from '@/components';
import LayoutLogin from '@/layout/LayoutLogin'
import Image from 'next/image';
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const index = () => {
  const [isUser, setIsUser] = useState(false)
  const router = useRouter()

  return (
    <LayoutLogin>
      {!isUser ? (
        <div>
          <h1 className='font-bold tracking-tighter text-4xl text-blue600'>Recuperar senha<span className='text-orange500'>.</span></h1>
          <p
            className='font-normal text-gray500 text-sm my-4'
          >
            Informe o e-mail do seu cadastro. Nós estaremos realizando o envio de um link com as instruções para você redefinir a sua senha.
          </p>

          <form className='flex flex-col gap-3' action="" method="post">
            <InputForm placeholder='Informe seu e-mail' icon='/img/icon-arroba.svg' type='email' name='email' />
            <LargeButton color='bg-[#C3C3C3]' textColor='text-gray150' type='submit'>enviar link</LargeButton>
          </form>
        </div>
      ) : (
        <div>
          <h1 className='font-bold tracking-tighter text-4xl text-blue600'>Tudo certo<span className='text-orange500'>{` ;)`}</span></h1>
          <p
            className='font-normal text-gray500 text-sm my-4'
          >
            Foi enviado um e-mail para você com instruções de como redefinir a sua senha.
          </p>

          <form className='flex flex-col' action="" method="post">
            <LargeButton
              onClick={() => router.push('/login')}
              color='bg-blueButton'
              textColor='text-gray150'
              type='submit'>voltar para o login
            </LargeButton>
          </form>
        </div>
      )}

    </LayoutLogin>
  );
}

export default index;