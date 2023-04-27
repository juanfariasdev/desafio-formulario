"use client";
import { useForm } from "react-hook-form";
import { InputLabel } from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { boolean, object, string } from "yup";
import { cpf } from "cpf-cnpj-validator";

const msgRequired = "Campo obrigatório";
const schema = object({
  firstName: string()
    .required(msgRequired)
    .min(3, "Deve conter pelo menos 3 dígitos"),

  lastName: string()
    .required(msgRequired)
    .min(3, "Deve conter pelo menos 3 dígitos"),

  email: string().required(msgRequired).email("Email inválido").min(6, 'Deve conter pelo menos 6 dígitos'),

  cpf: string().test({test:(value) => (value ? cpf.isValid(value) : false), message: 'Digite um CPF válido!'}),

  password: string().matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/,
    "Deve conter pelo menos 6 dígitos tendo pelo menos um número e uma letra minuscula"
  ),

  confirmPassword: string().required(msgRequired).test(
    "password-should-match",
    "As senhas devem ser iguais",
    function (value) {
      return this.parent.password === value;
    }
  ),
  acceptTerms: boolean().test({test: (value)=> value, message: "Precisa aceitar os termos para se cadastrar"})
});

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
function RegisterForm() {
  const {
    handleSubmit: onSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const handleSubmit = (data: IFormInputs) => {
    console.log(data);
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmit(handleSubmit)}>
      <div className="flex gap-3">
        <InputLabel
          placeholder="Nome"
          id="firstName"
          register={register}
          error={errors?.firstName?.message}
        />
        <InputLabel
          placeholder="Sobrenome"
          id="lastName"
          register={register}
          error={errors?.lastName?.message}
        />
      </div>
      <InputLabel
        placeholder="Email"
        register={register}
        id="email"
        error={errors?.email?.message}
      />
      <InputLabel
        placeholder="CPF"
        register={register}
        id="cpf"
        error={errors?.cpf?.message}
      />
      <InputLabel
        placeholder="Senha"
        type="password"
        id="password"
        register={register}
        error={errors?.password?.message}
      />
      <InputLabel
        placeholder="Confirmar Senha"
        type="password"
        id="confirmPassword"
        register={register}
        error={errors?.confirmPassword?.message}
      />
       <div>
        <input type="checkbox" id="acceptTerms" {...register('acceptTerms')} value="true" />
        <span className="pl-2">Aceito os termos e condições</span>
        <p className="text-red-500">{errors?.acceptTerms?.message?.toString()}</p>
      </div>
      <button className="rounded bg-green-600 hover:bg-green-700 text-xl p-3 text-white w-full transition font-bold">
        Cadastrar
      </button>
    </form>
  );
}

export { RegisterForm };
