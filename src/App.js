import './App.css';
import Window from './components/Window';

function App() {
  return (
    <div className='App'>
      <div className='version-language'>
        <span>VERSÃO: 0.1.0</span>
        <span>Língua: PT-BR</span>
      </div>
      <div className='header'>
        <h2>OLÁ, MEU NOME É ABRAÃO VILA NOVA</h2>
        <div>DEV FULL STACK / WEB GIS / GAME DESIGN</div>
        <div className='color-change-container'>
          <a
            href='https://github.com/abraaovilanova'
            target='_blank'
            rel='noreferrer'
          >
            <span
              className='color-icon'
              role='img'
              aria-label='GitHub'
              style={{
                '--icon': `url(${process.env.PUBLIC_URL + '/images/gh-icon.png'})`,
              }}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/abraao-vila-nova-ab3333a4/'
            target='_blank'
            rel='noreferrer'
          >
            <span
              className='color-icon'
              role='img'
              aria-label='Linkedin'
              style={{
                '--icon': `url(${process.env.PUBLIC_URL + '/images/linkedin-icon.png'})`,
              }}
            />
          </a>
        </div>
      </div>
      <Window
        title='Sobre mim'
        content={
          <div className='about-me-content'>
            <img
              src={process.env.PUBLIC_URL + '/images/me.jpeg'}
              alt='prifile'
              width='10%'
            />
            <div>
              <p>
                Sou Desenvolvedor Full Stack com experiência no desenvolvimento
                de aplicações utilizando JavaScript, Python, Java e C++. Tenho
                experiência na criação de sistemas escaláveis, APIs, aplicações
                web e soluções voltadas para processamento e visualização de
                dados.
              </p>

              <p>
                Ao longo da minha carreira, participei do desenvolvimento de
                aplicações de monitoramento em tempo real para frotas de
                caminhões, sistemas de processamento de alertas utilizando visão
                computacional, soluções para monitoramento do uso de
                Equipamentos de Proteção Individual (EPI) e plataformas Web GIS
                para visualização e análise de dados geoespaciais.
              </p>

              <p>
                Também possuo experiência com tecnologias em nuvem e DevOps,
                utilizando plataformas como Google Cloud Platform (GCP) e Azure
                DevOps para automação, integração contínua (CI/CD) e
                gerenciamento de infraestrutura.
              </p>
            </div>
          </div>
        }
      />

      <Window
        title='Experiência'
        content={
          <ul>
            <li>
              <strong>Desenvolvedor Full Stack</strong> – <em>PixForce</em>{' '}
              (2023 – 2026)
              <ul>
                <li>
                  Desenvolvimento de soluções de P&D nas áreas de visão
                  computacional, processamento de imagens, geoprocessamento e
                  análise de dados.
                </li>
                <li>
                  Desenvolvimento de aplicações backend utilizando Python
                  (FastAPI e Flask) e Java (Spring Boot), além de aplicações
                  frontend com React, Redux e TypeScript.
                </li>
                <li>
                  Desenvolvimento de sistemas em tempo real para monitoramento
                  de frotas de veículos e processamento de alertas baseados em
                  visão computacional.
                </li>
                <li>
                  Implementação de soluções para monitoramento do uso de
                  Equipamentos de Proteção Individual (EPI) utilizando
                  inteligência artificial e visão computacional.
                </li>
                <li>
                  Desenvolvimento de aplicações Web GIS para visualização,
                  processamento e análise de imagens de satélite e dados
                  geoespaciais.
                </li>
                <li>
                  Projeto e implementação de APIs RESTful e integração de
                  modelos de visão computacional em aplicações web.
                </li>
                <li>
                  Gerenciamento de pipelines de dados, conteinerização com
                  Docker, implantação em ambientes AWS e Azure e automação de
                  processos com CI/CD.
                </li>
              </ul>
            </li>

            <li>
              <strong>Desenvolvedor Full Stack</strong> – <em>Maxtrack</em>{' '}
              (2021 – 2023)
              <ul>
                <li>
                  Desenvolvimento de aplicações web utilizando React, Redux e
                  Python (Tornado).
                </li>
                <li>
                  Desenvolvimento de APIs e serviços backend voltados para
                  sistemas de monitoramento de frotas em tempo real.
                </li>
                <li>
                  Desenvolvimento de plataformas de mapeamento, visualização de
                  dados e soluções baseadas em informações geoespaciais.
                </li>
              </ul>
            </li>

            <li>
              <strong>Desenvolvedor Frontend</strong> – <em>Foods GO</em> (2020
              – 2021)
              <ul>
                <li>
                  Desenvolvimento de interfaces web utilizando React e Vue.js,
                  priorizando desempenho, usabilidade e experiência do usuário.
                </li>
                <li>
                  Desenvolvimento de plataforma para pedidos online de
                  restaurantes e integração com chatbot para atendimento
                  automatizado.
                </li>
              </ul>
            </li>
          </ul>
        }
      />

      <Window
        title='Projetos'
        content={
          <div>
            <ul>
              <li>
                <strong>
                  <a href='https://plataformaenergetica.pe.gov.br/'>
                    Plataforma Energética de Pernambuco
                  </a>
                </strong>{' '}
                - <em>Parceria com o Senai</em>
                <ul>
                  <li>
                    Desenvolvi uma plataforma de mapeamento para reunir
                    informações essenciais para o desenvolvimento do estado.
                  </li>
                  <li>
                    Implementei funcionalidades para visualização e análise de
                    dados.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <a href='https://manguebytegames.com/'>MangueByte Games</a>
                </strong>{' '}
                - <em>Projeto Pessoal</em>
                <ul>
                  <li>
                    Desenvolvimento de Jogos 2D e 3D utilizando Unity, com foco
                    em mecânicas de jogo RPG de turnos, design de níveis e
                    experiência do usuário.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  <a href='https://www.youtube.com/@FunWithMaps-dev'>
                    Fun With Maps
                  </a>
                </strong>{' '}
                - <em>Projeto Pessoal</em>
                <ul>
                  <li>
                    Vídeos sobre desenvolvimento de aplicações web direcionadas
                    a geoprocessamento.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        }
      />

      <Window
        title='Formação'
        content={
          <ul>
            <li>
              <strong>Bacharelado em Engenharia Civil</strong> -{' '}
              <em>Universidade Federal de Pernambuco</em> (2013 - 2018)
            </li>
          </ul>
        }
      />

      <div>
        Feito com ❤︎ em Recife © 2026 Abraão Vila Nova. Todos os direitos
        reservados.
      </div>
    </div>
  );
}

export default App;
