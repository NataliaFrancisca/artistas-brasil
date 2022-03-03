import React from "react";

import "./Information.css"

const Information = ({state}) => {
    console.log(state)
    return(
        <main className="container-artist">
            <h1 className="title-artist">{state.name}</h1>

            <section className="container-details">

                <div className="image">
                 <img src={`${state.image}`} />
                </div>

                <div className="info-about">

                </div>

            </section>


            {/* <section className="container-details">
                <section className="image-artist">
                    <img src={`${state.image}`} />
                </section>

                <section className="info-about-artist">
                    <div className="text-about-artist">
                        <p>
                        Gêmeas univitelinas, Tasha e Tracie Okereke começaram no rap nacional discotecando. Na verdade, mais ou menos: a dupla nascida e criada na Zona Norte paulistana tem uma trajetória um pouquinho anterior na cena paulistana. Irmãs do Bitrinho, um dos fundadores da lendária Batalha do Santa Cruz, as irmãs começaram a frequentar aquela que é uma das batalhas de rima mais importantes da cena de rap paulistana, responsável por revelar nomes como Projota, Emicida e Rashid, quando ainda eram muito jovens. Só que não necessariamente para rimar. “A gente era muito tímida nessa época. Mas foi quando conhecemos a Drik Barbosa, que incentivou muito a gente a começar o Expensive $h1t”.</p>
                        
                        <p>
                        O Expensive $h1t é um blog de moda que Tasha e Tracie começaram em 2014, para poderem falar sobre moda a partir de uma perspectiva periférica. Misturando referências de moda streetstyle internacional com artigos customizados da quebrada local, o blog foi um sucesso: rendeu visibilidade de grandes marcas como Avon, i-D e UOL, foram as primeiras brasileiras a saírem no Afropunk, em 2015, além de terem despertado a atenção do Dapper Dan, estilista do Harlem, de Nova York, conhecido por introduzir a alta costura no universo do hip-hop. O nome do blog veio do disco homônimo do Fela Kuti, lançado em 1975. 
                        </p>

                        <p>
                        Essa mistura de ritmos e o amor pela moda vem desde cedo na vida das irmãs. Filhas de Roseane Aparecida do Nascimento, mãe brasileira, e de James Okereke, pai nigeriano, as artistas ressaltam que eles sempre foram suas principais influências, tanto musicais quanto visuais. 
                        </p>
                    </div>

                    <div className="reference">
                        <div className="writter-article">
                            <span>Beatriz Moura</span>
                            <a href="https://casanaturamusical.com.br/tasha-tracie-diretoria-entrevista-goma-casa-natura-musical/" target="_blank">Leia mais</a>
                        </div>
                        
                        <div className="writter-article">
                            <span>Daniela De Jesus</span>
                            <a href="https://elastica.abril.com.br/especiais/tasha-tracie-okereke-rap-moda-favela-entrevista/" target="_blank">Leia mais</a>
                        </div>
                    </div>
                </section>


            </section> */}
        </main>
        
    )
}

export default Information;