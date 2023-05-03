import { LoginForm } from "@/components/LoginForm";
import { authOptions } from "@/config/nextAuth/authOptions";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login!</h1>
        <p className="text-xl">Preencha os dados abaixo!</p>
      </div>
      <div className="pt-10">
        <LoginForm />
      </div>
    </>
  );
}
