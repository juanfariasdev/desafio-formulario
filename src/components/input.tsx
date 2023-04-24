import { InputHTMLAttributes } from "react";

export function InputLabel({ ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        className="rounded bg-zinc-600 text-xl p-3 text-white w-full fill-white reval"
        {...rest}
      />
    </>
  );
}
