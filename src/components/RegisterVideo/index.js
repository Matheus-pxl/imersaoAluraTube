import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {

    const [values, setValues] = React.useState(propsDoForm.initialValues)
    return {
        values,
        handleChange: (evento) => {
            const value = evento.target.value
            const name = evento.target.name
            setValues({
                ...values,
                [name]: value,
            })
        },
        clearForm() {
            setValues({})
        }
    }
}



export default function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: { titulo: "frost punk", url: "https://youtube.." }
    });

    const [formVisivel, SetFormVisivel] = React.useState(false)

    //const [values, setValues] = React.useState({ titulo: "", url: "" })

    //formulario precisa
    //pegar dados que vem do state
    //-titulo
    //-url do video
    //precisa ter um onsubmit do form


    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => SetFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={(evento) => {
                        evento.preventDefault()
                        SetFormVisivel(false)
                        formCadastro.clearForm()
                    }}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => SetFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="titulo do video"
                                name="titulo"
                                value={formCadastro.values.titulo}
                                onChange={formCadastro.handleChange}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url}
                                onChange={formCadastro.handleChange}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>)
                : false}

        </StyledRegisterVideo >
    )
}