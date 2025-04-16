import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className='prova'>MrCorvi Garage</h1>
      </header>
      <div id='center'>
        <nav>
          <ul>
            <li>Photos</li>
            <li>Amigurumi</li>
            <li>About Me</li>
          </ul>
        </nav>
        <main>
          <article>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Soluta et fuga quis eligendi dolore, aliquid incidunt voluptatem nam maiores,
            porro quibusdam, sed quam eius ipsam inventore laudantium exercitationem molestiae tempore!
          </article>
        </main>
      </div>
      <footer>
        links
      </footer>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='prova'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
