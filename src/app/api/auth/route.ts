import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const idParams = params.id;

  console.log(idParams);
  return new Response("Hello, Next.js!");
}

interface ILogin {
  email?: string;
  password?: string;
}

export async function POST(request: Request) {
  try {
    const res = await request.json();

    const { email, password } = res as ILogin;

    if (!email || !password) {
      throw new Error("Erro ao logar, verifique os acessos!");
    }
    return NextResponse.json(res);
  } catch {
    return NextResponse.json(
      { message: "Erro ao logar, verifique os acessos!" },
      { status: 401 }
    );
  }
}
