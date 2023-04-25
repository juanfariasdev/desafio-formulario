"use client";
import { useForm } from "react-hook-form";
import { InputLabel } from "../input";

import { cpf } from "cpf-cnpj-validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const msgRequired = "Campo obrigatório";
const schema = object({
  firstName: string()
    .required(msgRequired)
    .min(3, "Deve conter pelo menos 3 dígitos"),

  lastName: string()
    .required(msgRequired)
    .min(3, "Deve conter pelo menos 3 dígitos"),

  email: string().required(msgRequired).email("Email inválido"),

  cpf: string().test((value) => (value ? cpf.isValid(value) : false)),

  password: string().matches(
    /^(?=.*[a-z])(?=.*[0-9])(?=.{6,})/,
    "Deve conter pelo menos 6 dígitos tendo pelo menos um número e uma letra minuscula"
  ),

  confirmPassword: string().test(
    "password-should-match",
    "As senhas devem ser iguais",
    function (value) {
      return this.parent.password === value;
    }
  ),
});

function RegisterForm() {
  const {
    handleSubmit: onSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleSubmit = (data: any) => {
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
      <button className="rounded bg-green-600 hover:bg-green-700 text-xl p-3 text-white w-full transition font-bold">
        Cadastrar
      </button>
    </form>
  );
}

export { RegisterForm };
