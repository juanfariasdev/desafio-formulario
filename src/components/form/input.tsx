

export function InputLabel({...rest}){
    return(
        <>
            <input className="rounded bg-zinc-600 text-xl p-3 text-white w-full" placeholder="Nome" {...rest}/>
        </>
    )
}