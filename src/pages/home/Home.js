import React from 'react'
import { Link } from 'react-router-dom'
import { SHome } from './Styles'

const Home = () => {

  const professionals = ['zoz', 'kamis', 'guanabara']
  

  return (
    <SHome>
        <h1>Home do siteeeeee</h1>
        <h2>Veja as profissionais: </h2>
        <ul>
          <li><Link to="professionals/gustavo"> Gustavao do CSS </Link></li>
          <li><Link to="professionals/zoz">Zoz do Pitoon </Link></li>
        </ul>

        {
          professionals.map(professional => {
            return (<h1>
              Profissioan ltop: {professional}
            </h1>)
          })
        }
    </SHome>
  )
}

export default Home