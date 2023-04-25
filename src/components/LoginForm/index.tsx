"use client";
import { useForm } from "react-hook-form";
import { InputLabel } from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";


const msgRequired = "Campo obrigatório";
const schema = object({
  email: string().required(msgRequired).email("Email inválido").min(6, 'Deve conter pelo menos 6 dígitos'),
  password: string().required(msgRequired)
});
function LoginForm() {
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
      <InputLabel placeholder="Email"id="email" register={register} error={errors?.email?.message}/>
      <InputLabel placeholder="Senha" type="password" id="password" register={register} error={errors?.password?.message}/>
      <button className="rounded bg-yellow-500 hover:bg-yellow-600 text-xl p-3 text-white w-full transition font-bold">
        Login
      </button>
    </form>
  );
}

export { LoginForm };
