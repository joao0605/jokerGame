import { useState } from 'react'
import perguntas from '../assets/perguntas.json'

export default function Joker() {

    const [indice, setIndice] = useState(0)
    const [pontos, setPontos] = useState(0)
    const [jokers, setJokers] = useState(7)

    function handleProxima() {
        setIndice((previousIndice) => ++previousIndice)
    }

    function handleEscolha(option, correta) {
        handleProxima()
        setPontos((previousPontos) => option === correta ? previousPontos += 100 : previousPontos -= 150)
    }

    function handleJoker(option, correta) {
        setJokers((previousJokers) => previousJokers--)
    }

    function handleReiniciar(){
        setIndice(previousIndice => previousIndice = 0)
    }


    return (
        <div>
            <div>
                {indice <= 15 ? (

                    <div>
                        <h1>Joker Game</h1>
                        <p>Pontos: {pontos}</p>
                        <p>Jokers: {jokers}</p>
                        <p>{perguntas[indice].prompt}</p>
                        {perguntas[indice].options.map(option => <div>{option}<button onClick={() => handleEscolha(option, perguntas[indice].correct)}>✔</button></div>)}
                        <div>

                            <button onClick={() => handleProxima()}>Próxima questão</button>
                            <button onClick={() => handleJoker()}>Joker</button>
                        </div>

                    </div>

                ) : (

                    <div>
                        <h1> Jogo finalizado </h1>
                        <h2>Pontos: {pontos}</h2>
                        <button onClick={() => handleReiniciar()}>Reiniciar</button>
                    </div>
                )

                }

            </div>

        </div>
    )
}