import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito bom".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({ nome: 'Danilo', idade: 21 })}
            </p>
        </Layout>
    )
}