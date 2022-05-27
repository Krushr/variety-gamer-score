import { useState } from 'react'
import styled from 'styled-components'
import { series } from './series'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: auto;
  text-align: center;
`

const SeriesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  text-align: left;
`

function App() {
  const [selected, setSelected] = useState([]);

  function handleChange(event) {
    const selectedGame = event.target.id

    if (event.target.checked) {
      setSelected([...selected.filter(game => game !== selectedGame), selectedGame])
    } else {
      setSelected(selected.filter(game => game !== selectedGame))
    }
  }

  return (
    <Wrapper>
      <header>
        <h1>What is your VARIETY gamer score?</h1>
        <h3>Which of these Video Game series have you played (at least one game of)?</h3>
      </header>
      <SeriesGrid>
        {series.map(game =>
          <li key={game}>
            <input id={game} type="checkbox" onChange={handleChange} defaultChecked={() => selected.find(game)} />
            <label htmlFor={game}>{game}</label>
          </li>
        )}
      </SeriesGrid>
      <h2>{selected.length}/{series.length}</h2>
      <footer>Inspired by <a href="https://twitter.com/ZweiDouble/status/1528733569224409090">@ZweiDouble's tweet</a>.<br /> Source available on <a href="https://github.com/Krushr/variety-gamer-score">GitHub</a>.</footer>
    </Wrapper>
  );
}

export default App;
