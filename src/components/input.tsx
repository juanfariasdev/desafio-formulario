import { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register?: (value: string) => any | null;
  id: string;
}
export function InputLabel({ error, id, register, ...rest }: any): JSX.Element {
  const registerForm = (value: string) => {
    if (register) return { ...register(value) };
    else null;
  };

  return (
    <div>
      <input
        className="rounded bg-zinc-600 text-xl p-3 text-white w-full fill-white reval"
        type="text"
        {...rest}
        {...registerForm(id)}
      />
      <p className="pt-1 text-red-500">{error}</p>
    </div>
  );
}
