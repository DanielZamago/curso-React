import { useForm } from "react-hook-form"

type FormInputs = {
    email: string;
    password: string;
}


export const FormsPage = () => {

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: "daniel@gmail.com",
            password: "123ABC"
        }
    });

    const onSubmit = (data: FormInputs) => {
        console.log(data);
    }

    watch('email');

    return (
        <>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <h3>Formularios</h3>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input type="email" placeholder="Correo" {...register('email', { required:true })} />
                    <input type="password" placeholder="Contraseña" {...register('password')} />
                    <button type="submit">Ingresar</button>
                </div>
            </form>

            <pre>
                { JSON.stringify(formState, null, 2)}
            </pre>
        </>
    )
}
