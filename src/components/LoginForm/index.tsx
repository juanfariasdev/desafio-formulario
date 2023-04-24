import { InputLabel } from "../input";

function LoginForm() {
  return (
    <form className="flex flex-col gap-3">
      <InputLabel placeholder="Email" />
      <InputLabel placeholder="Senha" type="password" />
      <button className="rounded bg-yellow-500 hover:bg-yellow-600 text-xl p-3 text-white w-full transition font-bold">
        Login
      </button>
    </form>
  );
}

export { LoginForm };
