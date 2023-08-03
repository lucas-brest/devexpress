import PostsList from './components/PostsList'
import PieChartExample from './graficos/PieChartExample'
import { Routes, Route, Link } from 'react-router-dom'
import FormExample from './components/FormExample'
import Graficos from './graficos/Graficos'
import Editors from './components/Editors'

function App() {

  return (
    <div style={{display: 'flex',flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>
      <div style={{
        display: 'flex', 
        alignItems:'center', 
        justifyContent: 'center', 
        gap:'2rem',
        marginBottom:'2rem'
      }}>
        <Link to={'/'}>Grilla</Link>
        <Link to={'/formulario'}>Formulario</Link>
        <Link to={'/grafico'}>Gráfico</Link>
        <Link to={'/editors'}>Editors</Link>
      </div>
      <Routes>
        <Route path='/' Component={PostsList}/>
        <Route path='/formulario' Component={FormExample}/>
        <Route path='/grafico' Component={Graficos}/>
        <Route path='/editors' Component={Editors}/>
      </Routes>
    </div>
  )
}

export default App
