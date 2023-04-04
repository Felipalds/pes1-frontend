import React from 'react'
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import ProfessionalAvaliation from './ProfessionalAvaliation'
import ProfessionalDescription from './ProfessionalDescription'

const Professionals = () => {

    const params = useParams()
    // aqui vem um fetch para a rota de profissionais. sera assim com todas as paginas de requests
    // useLocation para search
        
    return (

        <div>
            <h1>Profissional: {params.id}</h1>
        
            <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
            </nav>


            <Routes>
                <Route path="/" element={<ProfessionalDescription />}/>
                <Route path="/avaliacao" element={<ProfessionalAvaliation />} />
            </Routes>

        </div>

    )
}

export default Professionals