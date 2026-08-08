import { useEffect, useState } from 'react';
import './App.css';
import Window from './components/Window';
import translations, {
  LANGUAGES,
  DEFAULT_LANGUAGE,
  EMAIL,
} from './i18n/translations';

const VERSION = '0.1.1';
const STORAGE_KEY = 'language';

function initialLanguage() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && translations[stored]) return stored;

  const browser = window.navigator.language || '';
  const match = LANGUAGES.find(
    ({ code }) => browser === code || browser.split('-')[0] === code.split('-')[0]
  );
  return match ? match.code : DEFAULT_LANGUAGE;
}

function App() {
  const [language, setLanguage] = useState(initialLanguage);
  const t = translations[language];

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className='App'>
      <div className='version-language'>
        <span>
          {t.versionLabel}: {VERSION}
        </span>
        <label className='language-select'>
          <span>{t.languageLabel}:</span>
          <select
            aria-label={t.languageSelectAria}
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className='header'>
        <h2>{t.header.greeting}</h2>
        <div>{t.header.role}</div>
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
        title={t.about.title}
        content={
          <div className='about-me-content'>
            <img
              src={process.env.PUBLIC_URL + '/images/me.jpeg'}
              alt={t.header.greeting}
              className='profile-picture'
            />
            <div>
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className='stack-line'>
                <strong>{t.about.stackLabel}:</strong>{' '}
                {t.about.stack.map((item) => (
                  <span className='stack-tag' key={item}>
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        }
      />

      <Window
        title={t.experience.title}
        content={
          <ul className='job-list'>
            {t.experience.jobs.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <div className='job-heading'>
                  <strong>{job.role}</strong> – <em>{job.company}</em>{' '}
                  <span className='job-period'>({job.period})</span>
                </div>
                <ul className='entry-list'>
                  {job.entries.map((entry) => (
                    <li key={entry.problem}>
                      <strong className='entry-problem'>{entry.problem}</strong>{' '}
                      {entry.action}{' '}
                      <span className='entry-result'>
                        {t.experience.resultLabel}: {entry.result}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        }
      />

      <Window
        title={t.projects.title}
        content={
          <ul>
            {t.projects.items.map((project) => (
              <li key={project.url}>
                <strong>
                  <a href={project.url} target='_blank' rel='noreferrer'>
                    {project.name}
                  </a>
                </strong>{' '}
                – <em>{project.subtitle}</em>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        }
      />

      <Window
        title={t.education.title}
        content={
          <ul>
            {t.education.items.map((item) => (
              <li key={item.degree}>
                <strong>{item.degree}</strong> – <em>{item.school}</em>{' '}
                <span className='job-period'>({item.period})</span>
              </li>
            ))}
          </ul>
        }
      />

      <Window
        title={t.contact.title}
        content={
          <ul>
            <li>
              <a href={`mailto:${EMAIL}`}>
                <strong>{EMAIL}</strong>
              </a>
            </li>
            <li>
              <a
                href={`${process.env.PUBLIC_URL}/cv-${language}.pdf`}
                download
              >
                <strong>{t.contact.downloadCv} [↓]</strong>
              </a>
            </li>
          </ul>
        }
      />

      <div className='footer'>{t.footer}</div>
    </div>
  );
}

export default App;
