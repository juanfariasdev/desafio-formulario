import Image from "next/image";
import Hero from "../../../assets/hero.jpg";
import { RegisterForm } from "@/components/RegisterForm";
import Link from "next/link";

export default function Registrar() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Criar conta!</h1>
        <p className="text-xl">Preencha os dados abaixo</p>
      </div>
      <div className="pt-10">
        <RegisterForm />
        <p className="p-2">
          Já possui conta?{" "}
          <Link
            href="/"
            className="text-yellow-400 hover:text-yellow-500 font-bold"
          >
            Logar
          </Link>
        </p>
      </div>
    </>
  );
}
