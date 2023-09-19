import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import { AnimatedLetters } from '../AnimatedLetters'
import Loader from 'react-loaders'

export function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>O</span>
            <span className={`${letterClass} _12`}>p</span>
            <span className={`${letterClass} _13`}>a,</span>
            <br />
            <span className={`${letterClass} _14`}>E</span>
            <span className={`${letterClass} _15`}>u</span>
            <span className={`${letterClass} _16`}> </span>
            <span className={`${letterClass} _17`}>s</span>
            <span className={`${letterClass} _18`}>o</span>
            <span className={`${letterClass} _19`}>u</span>
            <AnimatedLetters
              letterClass={letterClass}
              stringArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
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
      <Loader type="pacman" />
    </>
  )
}
