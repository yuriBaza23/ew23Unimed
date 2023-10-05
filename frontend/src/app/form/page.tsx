"use client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import { useState } from 'react'

type dataProps = { age: string, familyNumber: number }

export default function Home() {
  const [data, setData] = useState<dataProps>()
  return (
    <div className="w-full flex flex-center" >Formulario
      <div className="flex w-72 flex-col gap-6 min-h-screen">
        <div className="relative h-10 w-full min-w-[200px]">
          <input
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Número do cartão Unimed
          </label>
        </div>
        <div>Qual a sua idade</div>
        <RadioGroup onValueChange={() => { }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0 - 5" id="0 - 5" />
            <Label htmlFor="0 - 5">0 - 5</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="6 - 14" id="6 - 14" />
            <Label htmlFor="6 - 14">6 - 14</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="15 - 18" id="15 - 18" />
            <Label htmlFor="15 - 18">15 - 18</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="18 - 24" id="18 - 24" />
            <Label htmlFor="18 - 24">18 - 24</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="25 - 29" id="25 - 29" />
            <Label htmlFor="25 - 29">25 - 29</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="30 - 39" id="30 - 39" />
            <Label htmlFor="30 - 39">30 - 39</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="40 - 49" id="40 - 49" />
            <Label htmlFor="40 - 49">40 - 49</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50 - 59" id="50 - 59" />
            <Label htmlFor="50 - 59">50 - 59</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="60 ou mais" id="60 ou mais" />
            <Label htmlFor="60 ou mais">60 ou mais</Label>
          </div>
        </RadioGroup>

        <div>Quantas pessoas moram com você?</div>
        <RadioGroup onValueChange={() => {}} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0" id="0" />
            <Label htmlFor="0">0</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="1" />
            <Label htmlFor="1">1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="2" />
            <Label htmlFor="2">2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="3" />
            <Label htmlFor="3">3</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4+" id="4+" />
            <Label htmlFor="4+">4+</Label>
          </div>
        </RadioGroup>

        <div>Qual a sua renda per capita?</div>
        <RadioGroup onValueChange={() => {}} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Menos de 1 salario minimo" id="Menos de 1 salario minimo" />
            <Label htmlFor="Menos de 1 salario minimo">Menos de 1 salario minimo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1 a 2 salários mínimos" id="1 a 2 salários mínimos" />
            <Label htmlFor="1 a 2 salários mínimos">1 a 2 salários mínimos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3 a 5 salários mínimos" id="3 a 5 salários mínimos" />
            <Label htmlFor="3 a 5 salários mínimos">3 a 5 salários mínimos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Mais de 5 salarios minimos" id="Mais de 5 salarios minimos" />
            <Label htmlFor="Mais de 5 salarios minimos">Mais de 5 salarios minimos</Label>
          </div>
        </RadioGroup>

        <div>Qual seu nivel de escolaridade?</div>
        <RadioGroup onValueChange={() => { }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ensino médio incompleto" id="Ensino médio incompleto" />
            <Label htmlFor="Ensino médio incompleto">Ensino médio incompleto</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ensino médio completo" id="Ensino médio completo" />
            <Label htmlFor="Ensino médio completo">Ensino médio completo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ensino superior incompleto" id="Ensino superior incompleto" />
            <Label htmlFor="Ensino superior incompleto">Ensino superior incompleto</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ensino superior completo" id="Ensino superior completo" />
            <Label htmlFor="Ensino superior completo">Ensino superior completo</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Pós-Graduado" id="Pós-Graduado" />
            <Label htmlFor="Pós-Graduado">Pós-Graduado</Label>
          </div>
        </RadioGroup>

        <div>Com qual frequência você consome bebidas alcóolicas?</div>
        <RadioGroup onValueChange={() => {}} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nunca" id="Nunca" />
            <Label htmlFor="Nunca">Nunca</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Raramente" id="Raramente" />
            <Label htmlFor="Raramente">Raramente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ás vezes" id="Ás vezes" />
            <Label htmlFor="Ás vezes">Ás vezes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Semanalmente" id="Semanalmente" />
            <Label htmlFor="Semanalmente">Semanalmente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Diariamente" id="Diariamente" />
            <Label htmlFor="Diariamente">Diariamente</Label>
          </div>
        </RadioGroup>

        <div>Com qual frequência você fuma?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nunca" id="Nunca" />
            <Label htmlFor="Nunca">Nunca</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Raramente" id="Raramente" />
            <Label htmlFor="Raramente">Raramente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ás vezes" id="Ás vezes" />
            <Label htmlFor="Ás vezes">Ás vezes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Semanalmente" id="Semanalmente" />
            <Label htmlFor="Semanalmente">Semanalmente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Diariamente" id="Diariamente" />
            <Label htmlFor="Diariamente">Diariamente</Label>
          </div>
        </RadioGroup>

        <div>Com qual frequência realiza atividades fisicas?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nunca" id="Nunca" />
            <Label htmlFor="Nunca">Nunca</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Raramente" id="Raramente" />
            <Label htmlFor="Raramente">Raramente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ás vezes" id="Ás vezes" />
            <Label htmlFor="Ás vezes">Ás vezes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Semanalmente" id="Semanalmente" />
            <Label htmlFor="Semanalmente">Semanalmente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Diariamente" id="Diariamente" />
            <Label htmlFor="Diariamente">Diariamente</Label>
          </div>
        </RadioGroup>

        <div>Possui histórico de câncer na família?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus pais, irmãos ou filhos" id="Sim, meus pais, irmãos ou filhos" />
            <Label htmlFor="Sim, meus pais, irmãos ou filhos">Sim, meus pais, irmãos ou filhos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus avós, tios ou primos" id="Sim, meus avós, tios ou primos" />
            <Label htmlFor="Sim, meus avós, tios ou primos">Sim, meus avós, tios ou primos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Possui histórico de diabetes na família?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus pais, irmãos ou filhos" id="Sim, meus pais, irmãos ou filhos" />
            <Label htmlFor="Sim, meus pais, irmãos ou filhos">Sim, meus pais, irmãos ou filhos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus avós, tios ou primos" id="Sim, meus avós, tios ou primos" />
            <Label htmlFor="Sim, meus avós, tios ou primos">Sim, meus avós, tios ou primos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Realiza ou já realizou alguma sessão de hemodiálise?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim" id="Sim" />
            <Label htmlFor="Sim">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Possui histórico de DPOC(Doença pulmonar obstrutiva crônica) na família?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus pais, irmãos ou filhos" id="Sim, meus pais, irmãos ou filhos" />
            <Label htmlFor="Sim, meus pais, irmãos ou filhos">Sim, meus pais, irmãos ou filhos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus avós, tios ou primos" id="Sim, meus avós, tios ou primos" />
            <Label htmlFor="Sim, meus avós, tios ou primos">Sim, meus avós, tios ou primos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Tem ou já teve algum problema respiratório grave?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim" id="Sim" />
            <Label htmlFor="Sim">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Consome muitos alimentos transgênicos ou industrializados no geral?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim" id="Sim" />
            <Label htmlFor="Sim">Sim</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Possui histórico de Obesidade na família?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus pais, irmãos ou filhos" id="Sim, meus pais, irmãos ou filhos" />
            <Label htmlFor="Sim, meus pais, irmãos ou filhos">Sim, meus pais, irmãos ou filhos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus avós, tios ou primos" id="Sim, meus avós, tios ou primos" />
            <Label htmlFor="Sim, meus avós, tios ou primos">Sim, meus avós, tios ou primos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Costuma se sentir ansioso?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nunca" id="Nunca" />
            <Label htmlFor="Nunca">Nunca</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Raramente" id="Raramente" />
            <Label htmlFor="Raramente">Raramente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ás vezes" id="Ás vezes" />
            <Label htmlFor="Ás vezes">Ás vezes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Semanalmente" id="Semanalmente" />
            <Label htmlFor="Semanalmente">Semanalmente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Diariamente" id="Diariamente" />
            <Label htmlFor="Diariamente">Diariamente</Label>
          </div>
        </RadioGroup>

        <div>Costuma ter situações de descontrole ou alteração emocional?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nunca" id="Nunca" />
            <Label htmlFor="Nunca">Nunca</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Raramente" id="Raramente" />
            <Label htmlFor="Raramente">Raramente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ás vezes" id="Ás vezes" />
            <Label htmlFor="Ás vezes">Ás vezes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Semanalmente" id="Semanalmente" />
            <Label htmlFor="Semanalmente">Semanalmente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Diariamente" id="Diariamente" />
            <Label htmlFor="Diariamente">Diariamente</Label>
          </div>
        </RadioGroup>

        <div>Possui histórico de doenças cerebrovasculares na família?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus pais, irmãos ou filhos" id="Sim, meus pais, irmãos ou filhos" />
            <Label htmlFor="Sim, meus pais, irmãos ou filhos">Sim, meus pais, irmãos ou filhos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Sim, meus avós, tios ou primos" id="Sim, meus avós, tios ou primos" />
            <Label htmlFor="Sim, meus avós, tios ou primos">Sim, meus avós, tios ou primos</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Não" id="Não" />
            <Label htmlFor="Não">Não</Label>
          </div>
        </RadioGroup>

        <div>Tem dificuldade para dormir ou costuma sentir-se cansado o tempo todo?</div>
        <RadioGroup onValueChange={(e) => { setData(e) }} defaultValue="0 - 5">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Nunca" id="Nunca" />
            <Label htmlFor="Nunca">Nunca</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Raramente" id="Raramente" />
            <Label htmlFor="Raramente">Raramente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Ás vezes" id="Ás vezes" />
            <Label htmlFor="Ás vezes">Ás vezes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Semanalmente" id="Semanalmente" />
            <Label htmlFor="Semanalmente">Semanalmente</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Diariamente" id="Diariamente" />
            <Label htmlFor="Diariamente">Diariamente</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}