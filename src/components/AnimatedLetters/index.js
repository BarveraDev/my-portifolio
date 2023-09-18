import './styles.scss'

export function AnimatedLetters({ LetterClass, stringArray, index }) {
  return (
    <span>
      {stringArray.map((char, i) => (
        <span key={char + i} className={`${LetterClass} _${i + index}`}>
          {char}
        </span>
      ))}
    </span>
  )
}
