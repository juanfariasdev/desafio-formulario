import Image from "next/image";
import Hero from '../assets/hero.jpg'
import { Form } from "@/components/form";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-between">
    <main className="bg-zinc-900 text-white max-w-xl w-full rounded-r-2xl p-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Criar conta!</h1>
        <p className="text-xl">Preencha os dados abaixo</p>
      </div>
      <div className="pt-10">
        <Form/>
      </div>
    </main>
      <aside className="flex flex-col flex-1 justify-center items-center">
        <Image src={Hero} alt="" width={500} />
        <h1 className="text-3xl font-bold">Seja muito bem-vindo!</h1>
      </aside>
    </div>

  )
}
