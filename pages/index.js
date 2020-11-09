import { useState } from 'react'

function Home() {
    return (
        <div>
            <h1>My Title | Modifications</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1)

    function adicionarContador() {
        setContador(contador + 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <h2>SPA Frameworks</h2>
            <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Angular</li>
            </ul>
        </div>
    )
}
export default Home