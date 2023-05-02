"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { title: "Home", link: "/dashboard", icon: "" },
  { title: "Usuários", link: "/dashboard/usuarios", icon: "" },
  { title: "", link: "", icon: "" },
];
export function Menu() {
  const router = usePathname();
  return (
    <>
      {menu.map((item, key) => (
        <Link href={item.link} key={key}>
          <div
            className={`hover:text-gray-50 hover:opacity-95 hover:bg-zinc-800 rounded px-4 py-2 ${
              router === item.link ? "text-yellow-500 bg-zinc-800" : ""
            }`}
          >
            {item.title}
          </div>
        </Link>
      ))}
      <div
        className={`hover:text-gray-50 hover:opacity-95 hover:bg-zinc-800 rounded`}
      >
        <button
          onClick={() => signOut()}
          className="text-left w-full h-full px-4 py-2"
        >
          Sair
        </button>
      </div>
    </>
  );
}
