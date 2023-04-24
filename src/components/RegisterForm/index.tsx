import { InputLabel } from "../input";

function RegisterForm() {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex gap-3">
        <InputLabel placeholder="Nome" />
        <InputLabel placeholder="Sobrenome" />
      </div>
      <InputLabel placeholder="Email" />
      <InputLabel placeholder="CPF" />
      <InputLabel placeholder="Senha" type="password" />
      <InputLabel placeholder="Confirmar Senha" type="password" />
      <button className="rounded bg-green-600 hover:bg-green-700 text-xl p-3 text-white w-full transition font-bold">
        Cadastrar
      </button>
    </form>
  );
}

export { RegisterForm };
