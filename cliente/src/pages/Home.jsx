import React from 'react'
import Navbaar from '../components/Navbar'
import '../css/home.css'
export const Home = () => {
  return (
    
    <>
  
    <Navbaar/>
    <section id="hero">
      <div className="container">
        <div className="textos">
          <h2 style={{color: "#C69D3B"}}>Una solución para</h2>
          <h1>TODOS EN LA INDUSTRIA​</h1>
        </div>
        <div className="productos">
          <h1>productos y servicios de la más alta calidad</h1>
          <div className="card">Producto 1</div>
          <div className="card">Producto 2</div>
          <div className="card">Producto 3</div>
        </div>
      </div>
    </section>
    
  </>
  )
}
