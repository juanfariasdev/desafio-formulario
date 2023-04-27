import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login!</h1>
        <p className="text-xl">Preencha os dados abaixo!</p>
      </div>
      <div className="pt-10">
        <LoginForm />
        <p className="p-2">
          Não possui conta?{" "}
          <Link
            href="/registrar"
            className="text-green-500 hover:text-green-600 font-bold"
          >
            Cadastrar
          </Link>
        </p>
      </div>
    </>
  );
}
