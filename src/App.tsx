// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import Article from "./components/article/article"
import Sidebar from './components/sidebar/sidebar.module'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1 className='prova'>MrCorvi Garage</h1>
      </header>
      <div id='center'>
        <Sidebar></Sidebar>
        <main>
          <Article>
            <p>
              {`Progammatore 🖥️
              Appasionato amigurumi ! 🧶
              Animazioni 🎬️
              Gamedev 👾`}
            </p>
          </Article>
          <Article>
            <>
              <h2>
                Perche questa pagina ?
              </h2>
              <p>
                {`Questa pagina nasce pricipalmente per tornare ad una esperienza internet 1.0
                Pur non avendo vissuto molto quel periodo storico mi manca quando Internet era un insieme di pagine web e blog, 
                dove ognuno potesse mostrare la propria personalità, e non solo 3/4 social che ti standardizano come esprimere te stesso.`}
              </p>
              <p>
                {`Detto questo non è che ritiro dai social o alltro, ma pesnavo fosse carino avere uno spazio personale dove non avere restiioni random imposte dai social.
                Quindi se continui a leggere sei il ✨✨benvenuto✨✨`}
              </p>
            </>
          </Article>
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
        `}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      `}</p> */}
    </>
  )
}

export default App
