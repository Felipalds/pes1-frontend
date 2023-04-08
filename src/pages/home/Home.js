import React from 'react'
import { Link } from 'react-router-dom'
import { SHome } from './Styles'

const Home = () => {

  return (
    <SHome>
      <div>
        <h1>Home Aqui, este componente será a imagem com os títulos</h1>
      </div>
      <div>
        <h2>Área das profissionais</h2>
        <ul>
          <li><Link to="professionals/gustavo"> Gustavao do CSS </Link></li>
          <li><Link to="professionals/zoz">Zoz do Pitoon </Link></li>
          <li><Link to="professionais/suamae">Sua mãe</Link></li>
        </ul>
      </div>

      <div>
        <h2>área do sobre nós aqui!</h2>
      </div>

      <div>
        <h2>Veja os procedimentos: </h2>
        <ul>
          <li><Link to="procedures/gustavo">Limpeza de Pele</Link></li>
          <li><Link to="procedures/zoz">Estética capilar</Link></li>
        </ul>
      </div>

      <div>
        <h2>O que clientes dizem</h2>
        <ul>
          <li>UAU MUITO FODA</li>
          <li>ÓTIMOS procedimentos</li>
        </ul>
      </div>

      <div>
        <h2>Localização!</h2>
      </div>


    </SHome>
  )
}

export default Home