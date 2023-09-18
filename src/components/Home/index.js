import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { AnimatedLetters } from '../AnimatedLetters'

export function Home() {
  const [LetterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'P',
    'a',
    'u',
    'l',
    'o',
    ' ',
    'B',
    'a',
    'r',
    'b',
    'o',
    's',
    'a',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={LetterClass}>O</span>
          <span className={`${LetterClass} _12`}>p</span>
          <span className={`${LetterClass} _13`}>a,</span>
          <br />
          <span className={`${LetterClass} _14`}>E</span>
          <span className={`${LetterClass} _15`}>u</span>
          <span className={`${LetterClass} _16`}> </span>
          <span className={`${LetterClass} _17`}>s</span>
          <span className={`${LetterClass} _18`}>o</span>
          <span className={`${LetterClass} _19`}>u</span>
          <AnimatedLetters
            LetterClass={LetterClass}
            stringArray={nameArray}
            index={15}
          />
          <br />
          <AnimatedLetters
            LetterClass={LetterClass}
            stringArray={jobArray}
            index={22}
          />
        </h1>
        <h2>Frontend Developer - JavaScript - React</h2>
        <h2>Backend Developer - NodeJs - SQL - Knex</h2>
        <Link to="/contato" className="flat-button">
          Meu contato
        </Link>
      </div>
    </div>
  )
}
