import './App.css';
import terminal from './terminal.png';
function App() {
  return (
    <div className='App'>
      <h2>OLÁ, MEU NOME É ABRAÃO VILA NOVA</h2>
      <div>DEV FULL STACK / WEB GIS / GAME DESIGN</div>
      <div className='window'>
        <div className='window-title'>
          <div className='window-title-left'>
            <img src={terminal} alt='Terminal' width='2%' />
            <h3>Sobre mim</h3>
          </div>
          <span>_ □ X</span>
        </div>
        <p>
          I am a Fullstack Developer with expertise in React and React Native,
          as well as complementary libraries such as Redux and React Router.
        </p>
        <p>
          Over the years, I have expanded my skills to backend development using
          Python (Tornado, Flask, FastAPI) and Java (Spring Boot with WebFlux),
          working on real-time applications, fleet monitoring, and alert
          processing using computer vision.
        </p>
        <p>
          O My experience also includes maps and camera streaming, building
          RESTful APIs, and integrating computer vision models into web
          applications. I have worked on projects involving data pipelines,
          cloud platforms (AWS, Azure), CI/CD, and containerization (Docker).
        </p>
        <p>
                  Additionally, I contributed to the initial version of the Atlas of
        Pernambuco, a project in partnership with Senai to develop a mapping
        platform that gathers key insights for the state's development.
        </p>

      </div>
      <div className='window'>
         <div className='window-title'>
          <div className='window-title-left'>
            <img src={terminal} alt='Terminal' width='2%' />
            <h3>Experiência</h3>
          </div>
          <span>_ □ X</span>
        </div>
       <div>
        <ul>
          <li>
            <strong>Fullstack Developer</strong> - <em>Freelancer</em> (2020 - Present)
            <ul>
              <li>Developed web applications using React, React Native, and complementary libraries.</li>
              <li>Implemented backend services with Python (Tornado, Flask, FastAPI) and Java (Spring Boot).</li>
              <li>Worked on real-time applications, fleet monitoring, and alert processing using computer vision.</li>
              <li>Built RESTful APIs and integrated computer vision models into web applications.</li>
              <li>Managed data pipelines, cloud platforms (AWS, Azure), CI/CD, and containerization (Docker).</li>
            </ul>
          </li>
          <li>
            <strong>Software Engineer</strong> - <em>Company XYZ</em> (2018 - 2020)
            <ul>
              <li>Contributed to the development of web applications using React and Redux.</li>
              <li>Implemented backend services with Python and Java.</li>
              <li>Worked on mapping platforms and data visualization projects.</li>
            </ul>
          </li>
        </ul>
        </div>
      </div>
      <div className='window'>
        <h3>Projetos</h3>
        <div>
          <ul>
            <li>
              <strong>Atlas of Pernambuco</strong> - <em>Senai Partnership</em>
              <ul>
                <li>Developed a mapping platform to gather key insights for the state's development.</li>
                <li>Implemented features for data visualization and analysis.</li>
              </ul>   
            </li>
          </ul>
        </div>
      </div>
      <div className='window'>
        <h3>Formação</h3>
        <ul>
          <li>
            <strong>Bachelor's Degree in Computer Science</strong> - <em>University of Pernambuco</em> (2014 - 2018)
          </li>
        </ul>
      </div>
      <div>
        Feito com amor em Recife © 2024 Abraão Vila Nova. All rights reserved.
      </div>
    </div>
  );
}

export default App;
