import Image from "next/image";
import { Inter } from "next/font/google";

import Hero from "../../assets/hero.jpg";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Academia do Aluno",
  description: "Criado para facilitar o encontro de emprego",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="flex min-h-screen justify-between flex-col lg:flex-row">
          <main className="bg-zinc-900 text-white min-h-[500px] lg:max-w-xl w-full rounded-t-2xl lg:rounded-t-none lg:rounded-r-2xl flex flex-col justify-center p-10 lg:px-20 order-2 lg:order-1">
            {children}
          </main>
          <aside className="flex-col flex-1 justify-center items-center flex order-1 py-10">
            <Image
              src={Hero}
              alt=""
              className="w-auto lg:w-80 max-h-[30vh] lg:max-h-full"
              width={500}
            />
            <h1 className="text-3xl font-bold">Seja muito bem-vindo!</h1>
            <p className="text-xl">Veio melhorar suas habilidades?</p>
            <p className="text-xl">Vamos te ajudar =)</p>
          </aside>
        </div>
      </body>
    </html>
  );
}
