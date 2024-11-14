import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/sharedComponents/Footer'
import Header from './components/sharedComponents/Header'

function App() {
  return (
    <>
      <div className='container mx-auto'>
        <header>
          <Header></Header>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </>
  )
}

export default App
