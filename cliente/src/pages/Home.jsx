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
          <h2 style={{color: "#C69D3B", fontSize: "2em", fontWeight: "bold",textTransform: "uppercase"}}>Una solución para</h2>
          <h1 style={{fontSize: "3em", fontWeight: "bold"}}>TODOS<br></br>EN LA INDUSTRIA​</h1>
          <h1 style={{fontSize: "1.3em",fontWeight: "bold"}}>productos y servicios de la más alta calidad</h1>
        </div>
        <div className="productos">
          <div className="cards">
          <div className="card">Producto 1</div>
          <div className="card">Producto 2</div>
          <div className="card">Producto 3</div>
          </div>
        </div>
      </div>
    </section>
    
  </>
  )
}
