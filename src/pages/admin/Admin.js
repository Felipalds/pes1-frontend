import axios from 'axios'
import React from 'react'
import {FieldArray, Form, Formik} from "formik"

export const Admin = () => {

    const [ professionals, setProfessionals ] = React.useState([])

    React.useEffect(() => {
        if(professionals.length === 0)
        axios
        .get("http://localhost:3001/professionals")
        .then(res => {
            setProfessionals(res.data)
        })
        }
    )

    const onSubmit = () => {

    }

    const handleAdd = () => {
        const name = document.getElementById("addName").value
        const description = document.getElementById("addDescription").value

        setProfessionals(professionals => [...professionals, { name,  description }])
        document.getElementById("addName").value = ""
        document.getElementById("addDescription").value = ""
    }

    return (
        <div>
            <h1>Admin</h1>
            <h2>Formulário de profissionais</h2>
            <form onSubmit={e => {e.preventDefault()}} >
                {professionals.map(p => {
                    return(<div style={{"paddingBottom" : "100px"}}>
                        nome:<input defaultValue={p.name} placeholder="Nome" type="text"></input>
                        descricao:<input defaultValue={p.description} placeholder="Descrição" type="text"></input>
                    </div>)
                })}
                <hr />
                <input placeholder="Nome" type="text" id="addName"></input>
                <input placeholder="Descrição" type="text" id="addDescription"></input>
                <button onClick={() => handleAdd()}> Adicionar </button>
                <button onClick={() => {}}> Salvar </button>

            </form>


            <h2>Formulário de procedimentos</h2>



        </div>
    )
}
