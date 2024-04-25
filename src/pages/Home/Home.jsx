import { React, useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Home.css';

import Whychoseus from '../../components/whychoseus/whychoseus';
import Oquepodemosoferecer from '../../components/oquepodemosoferecer/oquepodemosoferecer';
import Npcard from '../../components/npcard/npcard';
import CarouselCards from '../../components/CarouselCards/CarouselCards';

import oqoImg1 from '/assets/casal-treinando.jpg';
import oqoImg2 from '/assets/spinning-img.jpg';
import oqoImg3 from '/assets/strongman-img.jpg';
import oqoImg4 from '/assets/zumba-img.jpg';
import oqoImg5 from '/assets/boxing-img.jpg';

import ciImage1 from '/assets/trainer-homem-1.jpg';
import ciImage2 from '/assets/trainer-mulher-1.jpg';
import ciImage3 from '/assets/trainer-homem-2.jpg';
import ciImage4 from '/assets/trainer-mulher-2.jpg';
import ciImage5 from '/assets/trainer-homem-3.jpg';
import ciImage6 from '/assets/trainer-mulher-3.jpg'

const Home = () => {
  const pqNosEscolheu = [
    { icone: <i class='fa-solid fa-dumbbell'></i>, titulo: 'Variedade de Equipamentos', paragrafo: 'Oferecemos uma ampla variedade de equipamentos de alta qualidade, garantindo uma experiência completa e eficaz para nossos alunos.' },
    { icone: <i class="fa-brands fa-apple"></i>, titulo: 'Plano nutricional', paragrafo: 'Contamos com uma nutricionista dedicada a montar o planejamento nutricional personalizado para cada aluno.' },
    { icone: <i class="fa-solid fa-book"></i>, titulo: 'Ficha de treinamento personalizada', paragrafo: 'Ofereceremos um serviço de treino personalizado, adaptado às necessidades e objetivos individuais que você precisa.' }
  ]
  const oqPodemosOferecer = [
    { img: oqoImg1, title: 'Musculação' },
    { img: oqoImg2, title: 'Spinning' },
    { img: oqoImg3, title: 'Powerlifter' },
    { img: oqoImg4, title: 'Zumba' },
    { img: oqoImg5, title: 'Boxe' }
  ]
  const npCard = [
    { h4: 'Mensal', valor: 'R$ 100.0' },
    { h4: 'Semestral', valor: 'R$ 90.0' },
    { h4: 'Anual', valor: 'R$ 80.0' }
  ]
  const carouselImage = [
    { img: ciImage1, funcao: 'TREINADOR', nomeProfessor: 'Professor 1' },
    { img: ciImage2, funcao: 'TREINADORA', nomeProfessor: 'Professora 1' },
    { img: ciImage3, funcao: 'TREINADOR', nomeProfessor: 'Professor 2' },
    { img: ciImage4, funcao: 'TREINADORA', nomeProfessor: 'Professora 2' },
    { img: ciImage5, funcao: 'TREINADOR', nomeProfessor: 'Prodessor 3' },
    { img: ciImage6, funcao: 'TREINADORA', nomeProfessor: 'Professora 3' }
  ]

  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  return (
    <main>
      <section className='home-banner'>
        <div className=' banner' >
          <div className='home-banner-container'>
            <p className='home-banner-paragrafo'>MODELE SEU CORPO</p>
            <motion.h1 className='home-banner-titulo'>SEJA <span>FORTE</span> <br /> <span> TREINE</span> FORTE</motion.h1>
            <a className='home-banner-link' href="">MAIS INFO</a>
          </div>
          <div className='before'></div>
        </div>
      </section>
      <section className='pq-escolher-nos-section'>
        <div className='pen-container limita-largura'>
          <div className='h2-p'>
            <h2>POR QUE NOS ESCOLHER?</h2>
            <p>AUMENTE SEUS LIMITES</p>
          </div>
          <div className='pen-subcontainer'>
            {pqNosEscolheu.map((e) => {
              return (
                <Whychoseus icone={e.icone} titulo={e.titulo} paragrafo={e.paragrafo} />
              )
            })}

          </div>
        </div>
      </section>
      <section className='section-nossas-classes'>
        <div className='limita-largura'>
          <div className='h2-p'>
            <h2>Nossas Classes</h2>
            <p>O que podemos oferecer</p>
          </div>
          <div className='oqo-container'>
            {oqPodemosOferecer.map((e) => {
              return (
                <Oquepodemosoferecer img={e.img} title={e.title} span={e.title} />
              )
            })}
          </div>
        </div>
      </section>
      <section className='section-home-banner-dois'>
        <div className='home-banner-dois'>
          <div className='hbd-container'>
            <h2>INSCREVA-SE AGORA PARA OBTER MAIS OFERTAS</h2>
            <p>ONDE SAÚDE, BELEZA E FITNESS SE ENCONTRAM!</p>
          </div>
        </div>
      </section>
      <section className='section-nossos-planos'>
        <div className='nossos-planos-container limita-largura'>
          <div className='h2-p'>
            <h2>NOSSOS PLANOS</h2>
            <p>ESCOLHA SEU PLANO</p>
          </div>
          <div className='np-subcontainer'>
            {npCard.map((e) => {
              return (
                <Npcard h4={e.h4} valor={e.valor} />
              )
            })}
          </div>
        </div>
      </section>
      <section className='section-galeria'>
        <div className='galeria-container'>
          <img className='cinquenta-porcento' src="./src/assets/loira-prancha.jpg" alt="" />
          <img className='vinte-e-cinco-porcento' src="./src/assets/mulher-sentada-bola.jpg" alt="" />
          <img className='vinte-e-cinco-porcento' src="./src/assets/mulher-correndo-esteira.jpg" alt="" />
          <img className='vinte-e-cinco-porcento' src="./src/assets/homem-sentado-rosca.jpg" alt="" />
          <img className='vinte-e-cinco-porcento' src="./src/assets/mulher-levantamento-terra.jpg" alt="" />
          <img className='cinquenta-porcento' src="./src/assets/casal-dando-as-maos.jpg" alt="" />
        </div>
      </section>
      <section className='section-nosso-time'>
        <div className='limita-largura'>
          <div className='h2-p'>
            <h2>NOSSO TIME</h2>
            <p>TREINE COM EXPERTS</p>
          </div>
          <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className='nosso-time-carousel'>
            <motion.div className='inner'
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
            >
              {carouselImage.map((e) => {
                return (
                  <CarouselCards
                    key={e.nomeProfessor}
                    funcao={e.funcao}
                    img={e.img}
                    nomeProfessor={e.nomeProfessor}
                  />
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Home;