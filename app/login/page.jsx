import { InputForm, LargerButton } from '@/components';
import { LayoutLogin } from '@/layout'
import Image from 'next/image';

const index = () => {
  return (
    <LayoutLogin>
      <h1 className='font-bold text-4xl text-blue600'>Bem-vindo<span className='text-orange500'>.</span></h1>
      <p className='font-normal text-gray500 text-sm my-2'>Informe suas credenciais de acesso ao portal</p>
      <form className='flex flex-col' action="" method="post">
        <div className='flex flex-col gap-6 mb-3'>
          {/* Add the input-with-icon class to the input field */}
          <InputForm placeholder='Informe seu email' img='/img/icon-arroba.svg' type='email' name='email' />
          <InputForm placeholder='Informe sua senha' img='/img/icon-eye.svg' type='password' name='password' />
        </div>
        <LargerButton color='bg-blueButton' textColor='text-gray150' type='submit'>entrar</LargerButton>
      </form>
      <div className='flex gap-1 justify-end items-center mt-4 font-normal text-orange500'>
        <Image src='/img/icon-recovery-pass.svg' width={14} height={14} />
        <p className='text-[11px]'>Esqueceu a senha?</p>
      </div>
    </LayoutLogin >
  );
}

export default index;