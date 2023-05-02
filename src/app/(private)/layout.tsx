import Image from "next/image";

import { Menu } from "@/components/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen justify-between flex-col lg:flex-row bg-zinc-900 p-4">
      <aside className="text-gray-400 font-bold flex-col w-72  flex py-10 pr-6">
        {/* Perfil */}
        <div className="flex gap-2 items-center w-full pb-3 mb-3 border-b border-gray-500">
          <Image
            src={"https://github.com/juanfariasdev.png"}
            alt={""}
            className="rounded-full w-16"
            width={75}
            height={75}
          />
          <div className="flex flex-col ">
            <h3 className="text-white text-lg overflow-hidden text-ellipsis whitespace-nowrap max-w-[20ch]">
              Juan Pablo Farias
            </h3>
            <span className="text-lg font-normal">Administrador</span>
          </div>
        </div>
        {/* Menu */}
        <nav className="text-xl">
          <Menu />
        </nav>
      </aside>
      <main className="bg-white flex-1 rounded-3xl px-8 py-6">{children}</main>
    </div>
  );
}
