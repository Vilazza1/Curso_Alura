import { useParams } from "react-router-dom"

export default function Post () {
    const parametros = useParams();

    console.log(parametros);

    return(
        <div>
            <h1>Uai {parametros.id}</h1>
        </div>
    )
}