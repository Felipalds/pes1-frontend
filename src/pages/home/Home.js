import React from 'react'
import { Link } from 'react-router-dom'
import { SHome } from './Styles'
import axios from 'axios'

const Home = () => {


  const [ professionals, setProfessionals ] = React.useState([])
  const [ procedures, setProcedures ] = React.useState([])


  React.useEffect(() => {
      if(professionals.length === 0)
      axios
      .get("http://localhost:3001/professionals")
      .then(res => {
          setProfessionals(res.data)
      })

      if(procedures.length === 0)
      axios
      .get("http://localhost:3001/procedures")
      .then(res => {
          setProcedures(res.data)
      })
      }
      
  )

  return (
    <SHome>
      <div>
        <h1>Unitá - Clínica Integrada</h1>
      </div>
      <div>
        <h2>Área das profissionais</h2>
        <ul>
          {professionals.map(p => {
            return <li><Link to={`professionals/${p.slug}`}> {p.name}  </Link></li>
          })}
        </ul>
      </div>

      <div>
        <h2>Veja os procedimentos: </h2>
        <ul>
          {procedures.map(p => {
            return <li><Link to={`procedures/${p.slug}`}> {p.name} </Link></li>
          })}
        </ul>
      </div>
    </SHome>
  )
}

export default Home