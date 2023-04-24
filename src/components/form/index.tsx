import { InputLabel } from "./input"

function Form(){
    return(
    <form className="flex flex-col gap-3">
        <div className="flex gap-3">
            <InputLabel placeholder="Nome" />
            <InputLabel placeholder="Sobrenome" />
        </div>
        <InputLabel placeholder="Email" />
        <InputLabel placeholder="CPF" />
        <InputLabel placeholder="Senha" />
        <InputLabel placeholder="Confirmar Senha" />
    </form>
    )
}

export { Form }