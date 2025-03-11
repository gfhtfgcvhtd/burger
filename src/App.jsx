import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pol/Home'
import Navbar from './pol/Navbar'
import About from './About'

function App() {

  return (
    <>
    <header>
      <nav>
     <img src="/img/logo.png" alt="logo" />
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<About/>}/>
     </Routes>
      </nav>
    </header>
    <main>
      <section></section>
    </main>

    <div>
      <p className='p-nav'>$<p>
      
      </p>

      </p>
    </div>
    
     
    </>
  )
}

export default App
