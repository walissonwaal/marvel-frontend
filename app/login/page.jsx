'use client'
import { LayoutLogin } from "@/layout";
import SelectForm from "@/components/SelectForm";
import {useState} from 'react'
import { InputForm, LargeButton, Title, SmallButton } from "@/components";
import Image from "next/image";
import { getCharacters } from "../utils/api";

const Login = () => {

  const characters = getCharacters();

  const [isLoged, setIsLoged] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    return console.log('Login')
  }

  const options = [
    {
      value: "Homem-aranha",
      label: "Homem-aranha",
      image: "/caminho/para/imagem1.jpg",
    },
    {
      value: "Capitão América",
      label: "Capitão América",
      image: "/caminho/para/imagem2.jpg",
    },
    {
      value: "Homem de Ferro",
      label: "Homem de Ferro",
      image: "/caminho/para/imagem3.jpg",
    },
  ];

  const handleSelectChange = (selectedOption) => {
    console.log("Opção selecionada:", selectedOption);
  };

  return (
    <LayoutLogin>
      {!isLoged ? (
        <>
          <div className="w-full flex justify-center lg:me-20">
          <div className="hidden lg:flex lg:ms-36">
              <Image
                src="/img/background-img.svg"
                layout="responsive"
                width={610}
                height={467}
              />
            </div>

            <div className="bg-white rounded-3xl px-8 py-12 mx-6 sm:mx-0 lg:ms-28">
              <Title span=".">Bem vindo</Title>
              <p className="font-normal text-gray500 text-sm my-2">
                Informe suas credenciais de acesso ao portal
              </p>
              <div className="flex flex-col">
                <div className="flex flex-col gap-6 mb-3">
                  <InputForm
                    placeholder="Informe seu usuário"
                    icon="/img/icon-arroba.svg"
                    type="text"
                    name="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <InputForm
                    placeholder="Informe sua senha"
                    icon="/img/icon-eye.svg"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <LargeButton
                  color="bg-blueButton"
                  textColor="text-gray150"
                  icon="/img/icon-enter.svg"
                  type="button"
                  onClick={handleLogin}
                >
                  entrar
                </LargeButton>
              <div className="flex gap-1 justify-end items-center mt-4 font-normal text-orange500">
                <Image
                  src="/img/icon-recovery-pass.svg"
                  width={14}
                  height={14}
                />
                <p className="text-[11px]">Esqueceu a senha?</p>
              </div>
            </div>
          </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex justify-center lg:me-20">
          <div className="hidden lg:flex lg:ms-36">
              <Image
                src="/img/background-img.svg"
                layout="responsive"
                width={610}
                height={467}
              />
            </div>

            <div className="bg-white h-full rounded-3xl max-w-[405px] px-8 py-12 mx-6 sm:mx-0 lg:ms-28">
              <Title span=".">Selecione o seu agente mais legal</Title>
              <p className="font-normal text-gray500 text-sm mb-2">
                Tenha a visão completa do seu agente.
              </p>
              <div className="flex flex-col gap-4">
                <SelectForm characters={characters} onChange={handleSelectChange} />
              </div>
              <div className="flex justify-end">
                <SmallButton color="bg-blue800" textColor="text-white">
                  Entrar
                </SmallButton>
              </div>
            </div>
          </div>
        </>
      )}
    </LayoutLogin>
  );
};

export default Login;
